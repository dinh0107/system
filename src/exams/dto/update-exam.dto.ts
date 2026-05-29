import { ApiPropertyOptional } from '@nestjs/swagger';
import { exam_status_enum } from '../../../generated/prisma';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

import { UpdateExamQuestionItemDto } from './update-exam-question-item.dto';

export class UpdateExamDto {
  @ApiPropertyOptional({ example: 'Kiểm tra 15 phút chương 2' })
  @IsOptional()
  @IsString({ message: 'Tiêu đề đề thi phải là chuỗi ký tự' })
  @MaxLength(255, { message: 'Tiêu đề không được vượt quá 255 ký tự' })
  title?: string;

  @ApiPropertyOptional({ example: 'kiem-tra-15-phut-chuong-2' })
  @IsOptional()
  @IsString({ message: 'Slug phải là chuỗi ký tự' })
  @MaxLength(255, { message: 'Slug không được vượt quá 255 ký tự' })
  @MinLength(3, { message: 'Slug phải có ít nhất 3 ký tự' })
  slug?: string;

  @ApiPropertyOptional({ example: 'Đề kiểm tra trắc nghiệm môn Toán' })
  @IsOptional()
  @IsString({ message: 'Mô tả phải là chuỗi ký tự' })
  @MaxLength(2000, { message: 'Mô tả không được vượt quá 2000 ký tự' })
  description?: string;

  @ApiPropertyOptional({ example: 45, description: 'Thời gian làm bài (phút)' })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Thời gian làm bài phải là số nguyên (phút)' })
  @Min(1, { message: 'Thời gian làm bài phải ít nhất 1 phút' })
  @Max(600, { message: 'Thời gian làm bài tối đa 600 phút' })
  duration?: number;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @Type(() => Number)
  @Min(0, { message: 'Tổng điểm không được âm' })
  total_score?: number;

  @ApiPropertyOptional({ enum: exam_status_enum })
  @IsOptional()
  @IsEnum(exam_status_enum, { message: 'Trạng thái đề thi không hợp lệ' })
  status?: exam_status_enum;

  @ApiPropertyOptional({
    description:
      'true = cho phép người ngoài làm bài. Có thể kèm access_code.',
  })
  @IsOptional()
  @IsBoolean({ message: 'is_public phải là true hoặc false' })
  is_public?: boolean;

  @ApiPropertyOptional({
    type: [String],
    description: 'Thay thế toàn bộ danh sách lớp được giao đề',
  })
  @IsOptional()
  @IsUUID('4', { each: true, message: 'Mã lớp không hợp lệ' })
  @ArrayMaxSize(50, { message: 'Mỗi đề tối đa 50 lớp' })
  class_ids?: string[];

  @ApiPropertyOptional({
    example: 'ABC123',
    description: 'Mã vào đề cho người ngoài (khi is_public = true)',
  })
  @IsOptional()
  @IsString({ message: 'Mã truy cập phải là chuỗi ký tự' })
  @MaxLength(50, { message: 'Mã truy cập tối đa 50 ký tự' })
  access_code?: string;

  @ApiPropertyOptional({ example: '2026-06-01T08:00:00.000Z', nullable: true })
  @IsOptional()
  @ValidateIf((_, value) => value !== null)
  @IsDateString({}, { message: 'Thời gian bắt đầu không hợp lệ' })
  start_time?: string | null;

  @ApiPropertyOptional({ example: '2026-06-01T09:00:00.000Z', nullable: true })
  @IsOptional()
  @ValidateIf((_, value) => value !== null)
  @IsDateString({}, { message: 'Thời gian kết thúc không hợp lệ' })
  end_time?: string | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean({ message: 'shuffle_questions phải là true hoặc false' })
  shuffle_questions?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean({ message: 'shuffle_answers phải là true hoặc false' })
  shuffle_answers?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean({ message: 'show_result_after_submit phải là true hoặc false' })
  show_result_after_submit?: boolean;

  @ApiPropertyOptional({ minimum: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Số lần làm bài tối đa phải là số nguyên' })
  @Min(1, { message: 'Số lần làm bài tối đa phải ít nhất 1' })
  max_attempts?: number;

  @ApiPropertyOptional({
    type: [UpdateExamQuestionItemDto],
    description: 'Cập nhật nhiều câu hỏi trong đề cùng lúc',
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UpdateExamQuestionItemDto)
  @ArrayMaxSize(100, { message: 'Mỗi đề tối đa 100 câu hỏi' })
  questions?: UpdateExamQuestionItemDto[];
}
