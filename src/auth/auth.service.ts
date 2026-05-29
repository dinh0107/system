import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma/prisma.service';

import { UsersService } from '../users/users.service';

import { RegisterDto } from './dto/register.dto';

import { VerifyOtpDto } from './dto/verify-otp.dto';

import { LoginDto } from './dto/login.dto';

import { RefreshTokenDto } from './dto/refresh-token.dto';

import { MailService } from '../mail/mail.service';

import {
  REFRESH_TOKEN_TTL_MS,
  accessTokenExpiresInSeconds,
  generateRefreshTokenValue,
  hashRefreshToken,
  signAccessToken,
} from './auth.tokens';

const OTP_TTL_MS = 5 * 60 * 1000;

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async register(data: RegisterDto) {
    await this.assertRegistrationAvailable(data.email, data.phone);
    return this.issueRegistrationOtp(data);
  }

  async resendOtp(data: RegisterDto) {
    await this.assertRegistrationAvailable(data.email, data.phone);

    const hasValidOtp = await this.hasValidPendingOtp(data.email);
    if (hasValidOtp) {
      throw new BadRequestException(
        'OTP is still valid. Check your email or wait until it expires',
      );
    }

    return this.issueRegistrationOtp(data);
  }

  async verifyOtp(body: VerifyOtpDto) {
    const { email, otp, temp_user: tempUser } = body;

    if (tempUser.email !== email) {
      throw new BadRequestException('Email does not match temp_user');
    }

    await this.assertRegistrationAvailable(email, tempUser.phone);

    const otpRecord = await this.prisma.email_otps.findFirst({
      where: {
        email,
        otp,
        is_used: false,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    if (!otpRecord) {
      if (await this.hasExpiredUnusedOtp(email)) {
        throw new BadRequestException(
          'OTP expired. Please request a new OTP via POST /auth/resend-otp',
        );
      }
      throw new BadRequestException('Invalid OTP');
    }

    if (new Date() > otpRecord.expired_at) {
      throw new BadRequestException(
        'OTP expired. Please request a new OTP via POST /auth/resend-otp',
      );
    }

    await this.prisma.email_otps.update({
      where: { id: otpRecord.id },
      data: { is_used: true },
    });

    const user = await this.usersService.create({
      full_name: tempUser.full_name,
      email: tempUser.email,
      phone: tempUser.phone,
      password: tempUser.password,
      role: tempUser.role || 'STUDENT',
      is_active: true,
    });

    const { password: _, ...userWithoutPassword } = user;
    return {
      message: 'Account verified successfully',
      user: userWithoutPassword,
    };
  }

  async login(data: LoginDto) {
    const user = await this.usersService.findByEmail(data.email);

    if (!user) {
      if (await this.hasValidPendingOtp(data.email)) {
        throw new BadRequestException(
          'Please verify OTP before logging in',
        );
      }
      if (await this.hasExpiredUnusedOtp(data.email)) {
        throw new BadRequestException(
          'OTP expired. Please request a new OTP via POST /auth/resend-otp',
        );
      }
      throw new BadRequestException('Invalid credentials');
    }

    if (user.is_active === false) {
      throw new ForbiddenException('Account is locked');
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Invalid credentials');
    }

    const tokens = await this.issueTokenPair(user.id);
    const { password: _, ...userWithoutPassword } = user;

    return {
      ...tokens,
      user: userWithoutPassword,
    };
  }

  async refresh(body: RefreshTokenDto) {
    const stored = await this.findValidRefreshToken(body.refresh_token);
    if (!stored) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    const user = stored.users;
    if (user.is_active === false) {
      throw new ForbiddenException('Account is locked');
    }

    await this.revokeRefreshToken(stored.id);
    const tokens = await this.issueTokenPair(user.id);

    const { password: _, ...userWithoutPassword } = user;
    return {
      ...tokens,
      user: userWithoutPassword,
    };
  }

  async logout(body: RefreshTokenDto) {
    const stored = await this.findValidRefreshToken(body.refresh_token);
    if (stored) {
      await this.revokeRefreshToken(stored.id);
    }
    return { message: 'Logged out successfully' };
  }

  private async issueTokenPair(userId: string) {
    const user = await this.prisma.users.findUniqueOrThrow({
      where: { id: userId },
    });

    const access_token = await signAccessToken(this.jwtService, user);
    const refresh_token = generateRefreshTokenValue();

    await this.prisma.refresh_tokens.create({
      data: {
        user_id: user.id,
        token_hash: hashRefreshToken(refresh_token),
        expires_at: new Date(Date.now() + REFRESH_TOKEN_TTL_MS),
      },
    });

    return {
      access_token,
      refresh_token,
      expires_in: accessTokenExpiresInSeconds(),
      token_type: 'Bearer' as const,
    };
  }

  private async findValidRefreshToken(rawToken: string) {
    return this.prisma.refresh_tokens.findFirst({
      where: {
        token_hash: hashRefreshToken(rawToken),
        revoked_at: null,
        expires_at: { gt: new Date() },
      },
      include: { users: true },
    });
  }

  private async revokeRefreshToken(id: string) {
    await this.prisma.refresh_tokens.update({
      where: { id },
      data: { revoked_at: new Date() },
    });
  }

  private async assertRegistrationAvailable(email: string, phone?: string) {
    const userExist = await this.usersService.findByEmail(email);
    if (userExist) {
      throw new BadRequestException('Email already exists');
    }

    if (phone) {
      const phoneExist = await this.usersService.findByPhone(phone);
      if (phoneExist) {
        throw new BadRequestException('Phone number already exists');
      }
    }
  }

  private async issueRegistrationOtp(data: RegisterDto) {
    await this.prisma.email_otps.updateMany({
      where: { email: data.email, is_used: false },
      data: { is_used: true },
    });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedPassword = await bcrypt.hash(data.password, 10);

    await this.prisma.email_otps.create({
      data: {
        email: data.email,
        otp,
        expired_at: new Date(Date.now() + OTP_TTL_MS),
      },
    });

    await this.mailService.sendOtp(data.email, otp);

    return {
      message: 'OTP sent to email',
      temp_user: {
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        password: hashedPassword,
        role: data.role || 'STUDENT',
      },
    };
  }

  private async hasValidPendingOtp(email: string): Promise<boolean> {
    const record = await this.prisma.email_otps.findFirst({
      where: {
        email,
        is_used: false,
        expired_at: { gt: new Date() },
      },
    });
    return !!record;
  }

  private async hasExpiredUnusedOtp(email: string): Promise<boolean> {
    const record = await this.prisma.email_otps.findFirst({
      where: {
        email,
        is_used: false,
        expired_at: { lte: new Date() },
      },
    });
    return !!record;
  }
}
