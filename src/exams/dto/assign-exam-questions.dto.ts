import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsInt,
  IsNumber,
  IsOptional,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';

export class AssignQuestionItemDto {
  @ApiProperty({ description: 'Mã câu hỏi' })
  @IsUUID('4', { message: 'Mã câu hỏi không hợp lệ' })
  question_id!: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'Thứ tự hiển thị trong đề (bỏ trống = tự thêm cuối)',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Thứ tự câu hỏi phải là số nguyên' })
  @Min(0, { message: 'Thứ tự câu hỏi không được âm' })
  order_index?: number;

  @ApiPropertyOptional({ example: 1, default: 1, description: 'Điểm câu hỏi' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'Điểm câu hỏi phải là số' })
  @Min(0, { message: 'Điểm câu hỏi không được âm' })
  score?: number;
}

export class AssignExamQuestionsDto {
  @ApiProperty({ type: [AssignQuestionItemDto] })
  @ValidateNested({ each: true })
  @Type(() => AssignQuestionItemDto)
  @ArrayMinSize(1, { message: 'Phải gán ít nhất một câu hỏi' })
  @ArrayMaxSize(100, { message: 'Mỗi lần gán tối đa 100 câu hỏi' })
  questions!: AssignQuestionItemDto[];
}
