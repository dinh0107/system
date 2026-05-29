import { ApiPropertyOptional } from '@nestjs/swagger';
import { exam_status_enum } from '../../../generated/prisma';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class ListExamsQueryDto {
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

  @ApiPropertyOptional({ description: 'Lọc theo môn học' })
  @IsOptional()
  @IsUUID('4', { message: 'Mã môn học không hợp lệ' })
  subject_id?: string;

  @ApiPropertyOptional({ enum: exam_status_enum })
  @IsOptional()
  @IsEnum(exam_status_enum, { message: 'Trạng thái đề thi không hợp lệ' })
  status?: exam_status_enum;

  @ApiPropertyOptional({ description: 'Tìm theo tiêu đề đề thi' })
  @IsOptional()
  @IsString({ message: 'Từ khóa tìm kiếm phải là chuỗi ký tự' })
  search?: string;
}
