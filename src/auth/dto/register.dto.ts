import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Dương Văn Định' })
  @IsString()
  full_name!: string;

  @ApiProperty({ example: 'user@example.com' })
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email!: string;

  @ApiPropertyOptional({ example: '0912345678' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'matkhau0107', minLength: 6 })
  @IsString()
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  password!: string;

  @ApiPropertyOptional({
    enum: ['ADMIN', 'TEACHER', 'STUDENT'],
    default: 'STUDENT',
  })
  @IsOptional()
  @IsEnum(['ADMIN', 'TEACHER', 'STUDENT'])
  role?: 'ADMIN' | 'TEACHER' | 'STUDENT';
}
