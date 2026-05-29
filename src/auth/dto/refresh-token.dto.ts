import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty({ description: 'Refresh token từ login hoặc refresh trước đó' })
  refresh_token!: string;
}
