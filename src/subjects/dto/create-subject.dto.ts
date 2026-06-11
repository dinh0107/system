import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSubjectDto {
  @ApiProperty({ example: 'Toán học' })
  @IsString()
  @IsNotEmpty({ message: 'Tên môn học không được để trống' })
  @MaxLength(100)
  name!: string;

  @ApiPropertyOptional({ example: 'toan-hoc' })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  slug?: string;

  @ApiPropertyOptional({ example: 'Môn Toán THPT' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;
}
