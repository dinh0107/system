import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class ListClassesQueryDto {
  @ApiPropertyOptional({ default: 1, minimum: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Trang phải là số nguyên' })
  @Min(1, { message: 'Trang phải lớn hơn hoặc bằng 1' })
  page?: number = 1;

  @ApiPropertyOptional({ default: 20, minimum: 1, maximum: 100 })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Số bản ghi mỗi trang phải là số nguyên' })
  @Min(1, { message: 'Số bản ghi mỗi trang phải từ 1 trở lên' })
  @Max(100, { message: 'Số bản ghi mỗi trang tối đa 100' })
  limit?: number = 20;

  @ApiPropertyOptional({ description: 'Tìm theo tên hoặc mã lớp' })
  @IsOptional()
  @IsString({ message: 'Từ khóa tìm kiếm phải là chuỗi ký tự' })
  search?: string;

  @ApiPropertyOptional({ description: 'Lọc theo năm học, ví dụ 2024-2025' })
  @IsOptional()
  @IsString({ message: 'Năm học phải là chuỗi ký tự' })
  school_year?: string;
}
