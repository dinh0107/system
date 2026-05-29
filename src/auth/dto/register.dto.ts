import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'Dương Văn Định' })
  full_name!: string;

  @ApiProperty({ example: 'user@example.com' })
  email!: string;

  @ApiPropertyOptional({ example: '0912345678' })
  phone?: string;

  @ApiProperty({ example: 'matkhau0107', minLength: 6 })
  password!: string;

  @ApiPropertyOptional({
    enum: ['ADMIN', 'TEACHER', 'STUDENT'],
    default: 'STUDENT',
  })
  role?: 'ADMIN' | 'TEACHER' | 'STUDENT';
}
