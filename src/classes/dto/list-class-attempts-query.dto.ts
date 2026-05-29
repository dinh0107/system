import { ApiPropertyOptional } from '@nestjs/swagger';
import { attempt_status_enum } from '../../../generated/prisma';
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

export class ListClassAttemptsQueryDto {
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

  @ApiPropertyOptional({ description: 'Lọc theo đề thi' })
  @IsOptional()
  @IsUUID('4', { message: 'Mã đề thi không hợp lệ' })
  exam_id?: string;

  @ApiPropertyOptional({ enum: attempt_status_enum })
  @IsOptional()
  @IsEnum(attempt_status_enum, {
    message: 'Trạng thái làm bài không hợp lệ',
  })
  status?: attempt_status_enum;

  @ApiPropertyOptional({ description: 'Tìm theo họ tên hoặc email học sinh' })
  @IsOptional()
  @IsString({ message: 'Từ khóa tìm kiếm phải là chuỗi ký tự' })
  search?: string;
}
