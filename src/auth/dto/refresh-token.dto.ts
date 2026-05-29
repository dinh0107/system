import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({ description: 'Mã làm mới phiên nhận được khi đăng nhập' })
  @IsString({ message: 'Mã làm mới phiên phải là chuỗi ký tự' })
  @MinLength(1, { message: 'Mã làm mới phiên đăng nhập không được để trống' })
  refresh_token!: string;
}
