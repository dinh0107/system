import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { Prisma } from '../../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';

import { UsersService } from '../users/users.service';

import { RegisterDto } from './dto/register.dto';

import { VerifyOtpDto } from './dto/verify-otp.dto';

import { LoginDto } from './dto/login.dto';

import { RefreshTokenDto } from './dto/refresh-token.dto';

import { UpdateProfileDto } from './dto/update-profile.dto';

import { ChangePasswordDto } from './dto/change-password.dto';

import { MailService } from '../mail/mail.service';
import { ImgbbService } from '../upload/imgbb.service';

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
    private imgbbService: ImgbbService,
  ) {}

  async register(data: RegisterDto) {
    const email = data.email.trim().toLowerCase();
    await this.assertNoDuplicateAccount(email, data.phone);
    await this.createPendingUser(data);
    return this.issueRegistrationOtp(email);
  }

  async resendOtp(data: RegisterDto) {
    const email = data.email.trim().toLowerCase();
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new BadRequestException(
        'Chưa có đăng ký chờ xác minh với email này',
      );
    }

    if (user.email_verified) {
      throw new BadRequestException('Email đã được sử dụng');
    }

    await this.assertPhoneAvailableForPending(email, data.phone);

    const hasValidOtp = await this.hasValidPendingOtp(email);
    if (hasValidOtp) {
      throw new BadRequestException(
        'Mã OTP trước đó vẫn còn hiệu lực. Vui lòng kiểm tra email hoặc đợi hết hạn',
      );
    }

    await this.updatePendingUser(user.id, data);
    return this.issueRegistrationOtp(email);
  }

  async verifyOtp(body: VerifyOtpDto) {
    const email = body.email.trim().toLowerCase();
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new BadRequestException('Email chưa được đăng ký');
    }

    if (user.email_verified) {
      throw new BadRequestException('Email đã được xác minh');
    }

    const otpRecord = await this.findValidOtpRecord(email, body.otp);
    if (!otpRecord) {
      if (await this.hasExpiredUnusedOtp(email)) {
        throw new BadRequestException(
          'Mã OTP đã hết hạn. Vui lòng yêu cầu gửi lại mã OTP',
        );
      }
      throw new BadRequestException('Mã OTP không đúng');
    }

    await this.prisma.email_otps.update({
      where: { id: otpRecord.id },
      data: { is_used: true },
    });

    const verified = await this.usersService.update(user.id, {
      email_verified: true,
    });

    const { password: _, ...userWithoutPassword } = verified;
    return {
      message: 'Xác minh tài khoản thành công',
      user: userWithoutPassword,
    };
  }

  async login(data: LoginDto) {
    const email = data.email.trim().toLowerCase();
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new BadRequestException('Email chưa được đăng ký');
    }

    if (!user.email_verified) {
      throw new BadRequestException(
        'Vui lòng xác minh email trước khi đăng nhập',
      );
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
        'Mã làm mới phiên không hợp lệ hoặc đã hết hạn',
      );
    }

    const user = stored.users;
    if (!user.email_verified) {
      throw new ForbiddenException('Vui lòng xác minh email trước khi đăng nhập');
    }

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

    if (!user || user.is_active === false || !user.email_verified) {
      throw new UnauthorizedException('Phiên đăng nhập không hợp lệ');
    }

    const { password: _, ...userWithoutPassword } = user;
    return {
      isAuthenticated: true,
      user: userWithoutPassword,
    };
  }

  async updateProfile(
    authUser: AuthUser,
    data: UpdateProfileDto,
    file?: Express.Multer.File,
  ) {
    let avatar = data.avatar;

    if (file) {
      const uploaded = await this.imgbbService.uploadImage(file);
      avatar = uploaded.url;
    }

    const hasUpdate =
      file !== undefined ||
      (data.full_name !== undefined && data.full_name.trim() !== '') ||
      (data.phone !== undefined && data.phone.trim() !== '') ||
      data.avatar !== undefined;

    if (!hasUpdate) {
      throw new BadRequestException(
        'Cần gửi ít nhất một trường: full_name, phone, avatar (URL) hoặc file ảnh (field file/avatar/image)',
      );
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
      ...(avatar !== undefined && {
        avatar: avatar.trim() || null,
      }),
    });

    const { password: _, ...userWithoutPassword } = user;
    return {
      message: 'Cập nhật thông tin thành công',
      isAuthenticated: true,
      user: userWithoutPassword,
    };
  }

  async changePassword(authUser: AuthUser, data: ChangePasswordDto) {
    const user = await this.usersService.findById(authUser.id);

    if (!user || user.is_active === false || !user.email_verified) {
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

  private async assertNoDuplicateAccount(email: string, phone?: string) {
    const byEmail = await this.usersService.findByEmail(email);
    if (byEmail) {
      if (byEmail.email_verified) {
        throw new BadRequestException('Email đã được sử dụng');
      }
      throw new BadRequestException(
        'Tài khoản với email này đang chờ xác minh. Vui lòng gửi lại mã OTP',
      );
    }

    if (phone?.trim()) {
      const byPhone = await this.usersService.findByPhone(phone.trim());
      if (byPhone) {
        throw new BadRequestException('Số điện thoại đã được sử dụng');
      }
    }
  }

  private async assertPhoneAvailableForPending(email: string, phone?: string) {
    if (!phone?.trim()) {
      return;
    }

    const phoneOwner = await this.usersService.findByPhone(phone.trim());
    if (!phoneOwner || phoneOwner.email === email) {
      return;
    }

    if (phoneOwner.email_verified) {
      throw new BadRequestException('Số điện thoại đã được sử dụng');
    }

    throw new BadRequestException(
      'Số điện thoại đang được dùng cho tài khoản chờ xác minh khác',
    );
  }

  private async createPendingUser(data: RegisterDto) {
    const email = data.email.trim().toLowerCase();
    const password = data.password?.trim();

    if (!password) {
      throw new BadRequestException('Mật khẩu không được để trống');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await this.usersService.create({
        full_name: data.full_name.trim(),
        email,
        phone: data.phone?.trim() || null,
        password: hashedPassword,
        role: data.role || 'STUDENT',
        email_verified: false,
        is_active: true,
      });
    } catch (error) {
      throw this.toDuplicateAccountException(error);
    }
  }

  private async updatePendingUser(userId: string, data: RegisterDto) {
    const password = data.password?.trim();

    if (!password) {
      throw new BadRequestException('Mật khẩu không được để trống');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await this.usersService.update(userId, {
        full_name: data.full_name.trim(),
        phone: data.phone?.trim() || null,
        password: hashedPassword,
        role: data.role || 'STUDENT',
      });
    } catch (error) {
      throw this.toDuplicateAccountException(error);
    }
  }

  private toDuplicateAccountException(error: unknown): BadRequestException {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      const fields = Array.isArray(error.meta?.target)
        ? error.meta.target.join(',')
        : String(error.meta?.target ?? '');

      if (fields.includes('phone')) {
        return new BadRequestException('Số điện thoại đã được sử dụng');
      }

      return new BadRequestException('Email đã được sử dụng');
    }

    throw error;
  }

  private async issueRegistrationOtp(email: string) {
    await this.prisma.email_otps.updateMany({
      where: { email, is_used: false },
      data: { is_used: true },
    });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await this.prisma.email_otps.create({
      data: {
        email,
        otp,
        expired_at: new Date(Date.now() + OTP_TTL_MS),
      },
    });

    await this.mailService.sendOtp(email, otp);

    return {
      message:
        'Đã gửi mã OTP đến email của bạn. Vui lòng xác minh để hoàn tất đăng ký',
      email,
    };
  }

  private async findValidOtpRecord(email: string, otp: string) {
    const record = await this.prisma.email_otps.findFirst({
      where: {
        email,
        otp,
        is_used: false,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    if (!record || new Date() > record.expired_at) {
      return null;
    }

    return record;
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
