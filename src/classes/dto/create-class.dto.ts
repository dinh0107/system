import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateClassDto {
  @ApiProperty({ example: '12A1' })
  @IsString({ message: 'Tên lớp phải là chuỗi ký tự' })
  @IsNotEmpty({ message: 'Tên lớp không được để trống' })
  @MaxLength(100, { message: 'Tên lớp không được vượt quá 100 ký tự' })
  name!: string;

  @ApiPropertyOptional({ example: '12A1-2025' })
  @IsOptional()
  @IsString({ message: 'Mã lớp phải là chuỗi ký tự' })
  @MaxLength(50, { message: 'Mã lớp không được vượt quá 50 ký tự' })
  code?: string;

  @ApiPropertyOptional({ example: 'Lớp chuyên Toán' })
  @IsOptional()
  @IsString({ message: 'Mô tả phải là chuỗi ký tự' })
  @MaxLength(500, { message: 'Mô tả không được vượt quá 500 ký tự' })
  description?: string;

  @ApiPropertyOptional({ example: '2024-2025' })
  @IsOptional()
  @IsString({ message: 'Năm học phải là chuỗi ký tự' })
  @MaxLength(20, { message: 'Năm học không được vượt quá 20 ký tự' })
  school_year?: string;

  @ApiPropertyOptional({
    description: 'Chỉ admin: gán lớp cho giáo viên khác',
  })
  @IsOptional()
  @IsUUID('4', { message: 'Mã giáo viên không hợp lệ' })
  teacher_id?: string;
}
