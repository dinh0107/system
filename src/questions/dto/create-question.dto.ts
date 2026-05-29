import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { question_type_enum } from '../../../generated/prisma';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

import { CreateAnswerDto } from './create-answer.dto';

export class CreateQuestionDto {
  @ApiProperty({ example: 'Cho tam giác ABC vuông tại A...' })
  @IsString({ message: 'Nội dung câu hỏi phải là chuỗi ký tự' })
  @IsNotEmpty({ message: 'Nội dung câu hỏi không được để trống' })
  @MaxLength(5000, { message: 'Nội dung câu hỏi tối đa 5000 ký tự' })
  content!: string;

  @ApiPropertyOptional({ example: 'Dùng định lý Pythagore' })
  @IsOptional()
  @IsString({ message: 'Giải thích phải là chuỗi ký tự' })
  @MaxLength(2000, { message: 'Giải thích tối đa 2000 ký tự' })
  explanation?: string;

  @ApiPropertyOptional({ example: 'https://example.com/hinh-cau-hoi.png' })
  @IsOptional()
  @IsUrl({}, { message: 'URL hình ảnh không hợp lệ' })
  image_url?: string;

  @ApiPropertyOptional({ example: 1, default: 1, description: 'Độ khó 1–5' })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Độ khó phải là số nguyên' })
  @Min(1, { message: 'Độ khó tối thiểu là 1' })
  @Max(5, { message: 'Độ khó tối đa là 5' })
  level?: number;

  @ApiPropertyOptional({
    enum: question_type_enum,
    default: 'SINGLE_CHOICE',
  })
  @IsOptional()
  @IsEnum(question_type_enum, { message: 'Loại câu hỏi không hợp lệ' })
  type?: question_type_enum;

  @ApiProperty({ description: 'Mã môn học' })
  @IsUUID('4', { message: 'Mã môn học không hợp lệ' })
  subject_id!: string;

  @ApiProperty({ type: [CreateAnswerDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateAnswerDto)
  @ArrayMinSize(2, { message: 'Câu hỏi phải có ít nhất 2 đáp án' })
  @ArrayMaxSize(10, { message: 'Câu hỏi tối đa 10 đáp án' })
  answers!: CreateAnswerDto[];

  @ApiPropertyOptional({
    description: 'Chỉ admin: tạo câu hỏi thay giáo viên khác',
  })
  @IsOptional()
  @IsUUID('4', { message: 'Mã giáo viên không hợp lệ' })
  created_by_id?: string;
}
