import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

import { UpdateExamQuestionDto } from './update-exam-question.dto';

export class UpdateExamQuestionItemDto extends UpdateExamQuestionDto {
  @ApiProperty({ description: 'Mã câu hỏi cần cập nhật' })
  @IsUUID('4', { message: 'Mã câu hỏi không hợp lệ' })
  question_id!: string;
}
