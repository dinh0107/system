import { ApiPropertyOptional } from '@nestjs/swagger';
import { question_type_enum } from '../../../generated/prisma';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

import { CreateAnswerDto } from '../../questions/dto/create-answer.dto';

export class UpdateExamQuestionDto {
  @ApiPropertyOptional({ example: 'Cho tam giác ABC vuông tại A...' })
  @IsOptional()
  @IsString({ message: 'Nội dung câu hỏi phải là chuỗi ký tự' })
  @MaxLength(5000, { message: 'Nội dung câu hỏi tối đa 5000 ký tự' })
  content?: string;

  @ApiPropertyOptional({ example: 'Dùng định lý Pythagore' })
  @IsOptional()
  @IsString({ message: 'Giải thích phải là chuỗi ký tự' })
  @MaxLength(2000, { message: 'Giải thích tối đa 2000 ký tự' })
  explanation?: string;

  @ApiPropertyOptional({ example: 'https://example.com/hinh.png', nullable: true })
  @IsOptional()
  @ValidateIf((_, value) => value !== null && value !== '')
  @IsUrl({}, { message: 'URL hình ảnh không hợp lệ' })
  image_url?: string | null;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Độ khó phải là số nguyên' })
  @Min(1, { message: 'Độ khó tối thiểu là 1' })
  @Max(5, { message: 'Độ khó tối đa là 5' })
  level?: number;

  @ApiPropertyOptional({ enum: question_type_enum })
  @IsOptional()
  @IsEnum(question_type_enum, { message: 'Loại câu hỏi không hợp lệ' })
  type?: question_type_enum;

  @ApiPropertyOptional({ type: [CreateAnswerDto] })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateAnswerDto)
  @ArrayMinSize(2, { message: 'Câu hỏi phải có ít nhất 2 đáp án' })
  @ArrayMaxSize(10, { message: 'Câu hỏi tối đa 10 đáp án' })
  answers?: CreateAnswerDto[];

  @ApiPropertyOptional({ example: 0, description: 'Thứ tự trong đề' })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Thứ tự câu hỏi phải là số nguyên' })
  @Min(0, { message: 'Thứ tự câu hỏi không được âm' })
  order_index?: number;

  @ApiPropertyOptional({ example: 1, description: 'Điểm câu hỏi' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'Điểm câu hỏi phải là số' })
  @Min(0, { message: 'Điểm câu hỏi không được âm' })
  score?: number;
}
