import { BadRequestException, Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma/prisma.service';

import { UsersService } from '../users/users.service';

import { RegisterDto } from './dto/register.dto';

import { VerifyOtpDto } from './dto/verify-otp.dto';

import { LoginDto } from './dto/login.dto';

import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async register(data: RegisterDto) {
    const userExist = await this.usersService.findByEmail(data.email);

    if (userExist) {
      throw new BadRequestException('Email already exists');
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedPassword = await bcrypt.hash(data.password, 10);

    await this.prisma.email_otps.create({
      data: {
        email: data.email,
        otp,
        expired_at: new Date(Date.now() + 5 * 60 * 1000),
      },
    });

    await this.mailService.sendOtp(data.email, otp);

    return {
      message: 'OTP sent to email',

      temp_user: {
        full_name: data.full_name,
        email: data.email,
        password: hashedPassword,
        role: data.role || 'STUDENT',
      },
    };
  }

  async verifyOtp(
    body: VerifyOtpDto,
    tempUser: {
      full_name: string;
      email: string;
      password: string;
      role: 'ADMIN' | 'TEACHER' | 'STUDENT';
    },
  ) {
    const otpRecord = await this.prisma.email_otps.findFirst({
      where: {
        email: body.email,
        otp: body.otp,
        is_used: false,
      },

      orderBy: {
        created_at: 'desc',
      },
    });

    if (!otpRecord) {
      throw new BadRequestException('Invalid OTP');
    }

    if (new Date() > otpRecord.expired_at) {
      throw new BadRequestException('OTP expired');
    }

    await this.prisma.email_otps.update({
      where: {
        id: otpRecord.id,
      },

      data: {
        is_used: true,
      },
    });

    const user = await this.usersService.create({
      full_name: tempUser.full_name,
      email: tempUser.email,
      password: tempUser.password,
      role: tempUser.role,
    });

    return user;
  }

  async login(data: LoginDto) {
    const user = await this.usersService.findByEmail(data.email);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Invalid credentials');
    }

    const token = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      access_token: token,
      user,
    };
  }
}
