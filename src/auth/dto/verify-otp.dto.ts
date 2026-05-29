import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TempUserDto {
  @ApiProperty({ example: 'Dương Văn Định' })
  full_name!: string;

  @ApiProperty({ example: 'user@example.com' })
  email!: string;

  @ApiPropertyOptional({ example: '0912345678' })
  phone?: string;

  @ApiProperty({
    description: 'Mật khẩu đã hash từ response /auth/register',
    example: '$2b$10$...',
  })
  password!: string;

  @ApiPropertyOptional({
    enum: ['ADMIN', 'TEACHER', 'STUDENT'],
    default: 'STUDENT',
  })
  role?: 'ADMIN' | 'TEACHER' | 'STUDENT';
}

export class VerifyOtpDto {
  @ApiProperty({ example: 'user@example.com' })
  email!: string;

  @ApiProperty({ example: '123456', description: 'Mã OTP 6 số từ email' })
  otp!: string;

  @ApiProperty({ type: TempUserDto })
  temp_user!: TempUserDto;
}
