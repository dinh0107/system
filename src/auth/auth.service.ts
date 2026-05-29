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

import { UpdateProfileDto } from './dto/update-profile.dto';

import { ChangePasswordDto } from './dto/change-password.dto';

import { MailService } from '../mail/mail.service';

import { AuthUser } from './strategies/jwt.strategy';

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
        'OTP vẫn còn hiệu lực. Vui lòng kiểm tra email hoặc đợi hết hạn',
      );
    }

    return this.issueRegistrationOtp(data);
  }

  async verifyOtp(body: VerifyOtpDto) {
    const { email, otp, temp_user: tempUser } = body;

    if (tempUser.email !== email) {
      throw new BadRequestException('Email không khớp với temp_user');
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
          'OTP đã hết hạn. Vui lòng gửi lại OTP qua POST /auth/resend-otp',
        );
      }
      throw new BadRequestException('Mã OTP không đúng');
    }

    if (new Date() > otpRecord.expired_at) {
      throw new BadRequestException(
        'OTP đã hết hạn. Vui lòng gửi lại OTP qua POST /auth/resend-otp',
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
    const email = data.email.trim().toLowerCase();
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      if (await this.hasValidPendingOtp(email)) {
        throw new BadRequestException(
          'Vui lòng xác minh OTP trước khi đăng nhập',
        );
      }
      if (await this.hasExpiredUnusedOtp(email)) {
        throw new BadRequestException(
          'OTP đã hết hạn. Vui lòng gửi lại OTP qua POST /auth/resend-otp',
        );
      }
      throw new BadRequestException('Email chưa được đăng ký');
    }

    const isMatch = await bcrypt.compare(data.password.trim(), user.password);

    if (!isMatch) {
      throw new BadRequestException('Mật khẩu không đúng');
    }

    if (user.is_active === false) {
      throw new ForbiddenException('Tài khoản đã bị khóa');
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
      throw new UnauthorizedException(
        'Refresh token không hợp lệ hoặc đã hết hạn',
      );
    }

    const user = stored.users;
    if (user.is_active === false) {
      throw new ForbiddenException('Tài khoản đã bị khóa');
    }

    await this.revokeRefreshToken(stored.id);
    const tokens = await this.issueTokenPair(user.id);

    const { password: _, ...userWithoutPassword } = user;
    return {
      ...tokens,
      user: userWithoutPassword,
    };
  }

  async getMe(authUser: AuthUser) {
    const user = await this.usersService.findById(authUser.id);

    if (!user || user.is_active === false) {
      throw new UnauthorizedException('Phiên đăng nhập không hợp lệ');
    }

    const { password: _, ...userWithoutPassword } = user;
    return {
      isAuthenticated: true,
      user: userWithoutPassword,
    };
  }

  async updateProfile(authUser: AuthUser, data: UpdateProfileDto) {
    const hasUpdate =
      data.full_name !== undefined ||
      data.phone !== undefined ||
      data.avatar !== undefined;

    if (!hasUpdate) {
      throw new BadRequestException('Cần ít nhất một trường để cập nhật');
    }

    if (data.phone !== undefined && data.phone !== null) {
      const phone = data.phone.trim();
      if (phone) {
        const phoneOwner = await this.usersService.findByPhone(phone);
        if (phoneOwner && phoneOwner.id !== authUser.id) {
          throw new BadRequestException('Số điện thoại đã được sử dụng');
        }
      }
    }

    const user = await this.usersService.update(authUser.id, {
      ...(data.full_name !== undefined && {
        full_name: data.full_name.trim(),
      }),
      ...(data.phone !== undefined && {
        phone: data.phone.trim() || null,
      }),
      ...(data.avatar !== undefined && {
        avatar: data.avatar.trim() || null,
      }),
    });

    const { password: _, ...userWithoutPassword } = user;
    return {
      message: 'Cập nhật thông tin thành công',
      user: userWithoutPassword,
    };
  }

  async changePassword(authUser: AuthUser, data: ChangePasswordDto) {
    const user = await this.usersService.findById(authUser.id);

    if (!user || user.is_active === false) {
      throw new UnauthorizedException('Phiên đăng nhập không hợp lệ');
    }

    const isMatch = await bcrypt.compare(
      data.current_password.trim(),
      user.password,
    );

    if (!isMatch) {
      throw new BadRequestException('Mật khẩu hiện tại không đúng');
    }

    const hashedPassword = await bcrypt.hash(data.new_password.trim(), 10);

    await this.usersService.update(authUser.id, {
      password: hashedPassword,
    });

    return { message: 'Đổi mật khẩu thành công' };
  }

  async logout(body: RefreshTokenDto) {
    const stored = await this.findValidRefreshToken(body.refresh_token);
    if (stored) {
      await this.revokeRefreshToken(stored.id);
    }
    return { message: 'Đăng xuất thành công' };
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
      throw new BadRequestException('Email đã được sử dụng');
    }

    if (phone) {
      const phoneExist = await this.usersService.findByPhone(phone);
      if (phoneExist) {
        throw new BadRequestException('Số điện thoại đã được sử dụng');
      }
    }
  }

  private async issueRegistrationOtp(data: RegisterDto) {
    const email = data.email?.trim().toLowerCase();
    const password = data.password?.trim();

    if (!password) {
      throw new BadRequestException('Mật khẩu không được để trống');
    }

    await this.prisma.email_otps.updateMany({
      where: { email, is_used: false },
      data: { is_used: true },
    });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedPassword = await bcrypt.hash(password, 10);

    await this.prisma.email_otps.create({
      data: {
        email,
        otp,
        expired_at: new Date(Date.now() + OTP_TTL_MS),
      },
    });

    await this.mailService.sendOtp(email, otp);

    return {
      message: 'OTP sent to email',
      temp_user: {
        full_name: data.full_name.trim(),
        email,
        phone: data.phone?.trim(),
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
