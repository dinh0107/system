import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({ description: 'Refresh token từ login hoặc refresh trước đó' })
  @IsString()
  @MinLength(1, { message: 'refresh_token không được để trống' })
  refresh_token!: string;
}
