import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({ example: 'matkhau0107' })
  @IsString()
  @MinLength(1, { message: 'Mật khẩu hiện tại không được để trống' })
  current_password!: string;

  @ApiProperty({ example: 'matkhaumoi123', minLength: 6 })
  @IsString()
  @MinLength(6, { message: 'Mật khẩu mới phải có ít nhất 6 ký tự' })
  new_password!: string;
}
