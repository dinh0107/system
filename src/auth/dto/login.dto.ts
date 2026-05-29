import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email!: string;

  @ApiProperty({ example: 'matkhau0107' })
  @IsString({ message: 'Mật khẩu phải là chuỗi ký tự' })
  @MinLength(1, { message: 'Mật khẩu không được để trống' })
  password!: string;
}
