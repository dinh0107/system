import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { role_enum } from '../../../generated/prisma';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAdminUserDto {
  @ApiProperty({ example: 'Nguyễn Văn A' })
  @IsString()
  @IsNotEmpty({ message: 'Họ và tên không được để trống' })
  @MaxLength(255)
  full_name!: string;

  @ApiProperty({ example: 'teacher@school.edu.vn' })
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email!: string;

  @ApiPropertyOptional({ example: '0912345678' })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @ApiProperty({ example: 'MatKhau123', minLength: 6 })
  @IsString()
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  password!: string;

  @ApiProperty({ enum: role_enum, example: 'TEACHER' })
  @IsEnum(role_enum, { message: 'Vai trò không hợp lệ' })
  role!: role_enum;
}
