import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';

export class TempUserDto {
  @ApiProperty({ example: 'Dương Văn Định' })
  @IsString()
  full_name!: string;

  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email!: string;

  @ApiPropertyOptional({ example: '0912345678' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'Mật khẩu đã hash từ response /auth/register',
    example: '$2b$10$...',
  })
  @IsString()
  password!: string;

  @ApiPropertyOptional({
    enum: ['ADMIN', 'TEACHER', 'STUDENT'],
    default: 'STUDENT',
  })
  @IsOptional()
  @IsEnum(['ADMIN', 'TEACHER', 'STUDENT'])
  role?: 'ADMIN' | 'TEACHER' | 'STUDENT';
}

export class VerifyOtpDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: '123456', description: 'Mã OTP 6 số từ email' })
  @IsString()
  @Length(6, 6, { message: 'OTP phải có đúng 6 chữ số' })
  otp!: string;

  @ApiProperty({ type: TempUserDto })
  @ValidateNested()
  @Type(() => TempUserDto)
  temp_user!: TempUserDto;
}
