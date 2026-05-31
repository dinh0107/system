import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateClassDto {
  @ApiPropertyOptional({ example: '12A2' })
  @IsOptional()
  @IsString({ message: 'Tên lớp phải là chuỗi ký tự' })
  @MaxLength(100, { message: 'Tên lớp không được vượt quá 100 ký tự' })
  name?: string;

  @ApiPropertyOptional({ example: '12A2-2025', nullable: true })
  @IsOptional()
  @IsString({ message: 'Mã lớp phải là chuỗi ký tự' })
  @MaxLength(50, { message: 'Mã lớp không được vượt quá 50 ký tự' })
  code?: string | null;

  @ApiPropertyOptional({ example: 'Lớp chuyên Lý', nullable: true })
  @IsOptional()
  @IsString({ message: 'Mô tả phải là chuỗi ký tự' })
  @MaxLength(500, { message: 'Mô tả không được vượt quá 500 ký tự' })
  description?: string | null;

  @ApiPropertyOptional({ example: '2025-2026', nullable: true })
  @IsOptional()
  @IsString({ message: 'Năm học phải là chuỗi ký tự' })
  @MaxLength(20, { message: 'Năm học không được vượt quá 20 ký tự' })
  school_year?: string | null;
}
