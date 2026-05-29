import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Dương Văn Định' })
  @IsString({ message: 'Họ và tên phải là chuỗi ký tự' })
  @IsNotEmpty({ message: 'Họ và tên không được để trống' })
  @MaxLength(255, { message: 'Họ và tên không được vượt quá 255 ký tự' })
  full_name!: string;

  @ApiProperty({ example: 'user@example.com' })
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email!: string;

  @ApiPropertyOptional({ example: '0912345678' })
  @IsOptional()
  @IsString({ message: 'Số điện thoại phải là chuỗi ký tự' })
  @MaxLength(20, { message: 'Số điện thoại không được vượt quá 20 ký tự' })
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
  @IsEnum(['ADMIN', 'TEACHER', 'STUDENT'], {
    message: 'Vai trò phải là ADMIN, TEACHER hoặc STUDENT',
  })
  role?: 'ADMIN' | 'TEACHER' | 'STUDENT';
}
