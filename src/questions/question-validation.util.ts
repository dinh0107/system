import { BadRequestException } from '@nestjs/common';
import { question_type_enum } from '../../generated/prisma';

import { CreateAnswerDto } from './dto/create-answer.dto';

export function validateQuestionAnswers(
  type: question_type_enum,
  answers: CreateAnswerDto[],
): void {
  const correctCount = answers.filter((a) => a.is_correct).length;

  if (
    type === question_type_enum.SINGLE_CHOICE ||
    type === question_type_enum.TRUE_FALSE
  ) {
    if (correctCount !== 1) {
      throw new BadRequestException(
        'Câu hỏi một đáp án đúng phải có đúng một đáp án được đánh dấu đúng',
      );
    }
    return;
  }

  if (type === question_type_enum.MULTIPLE_CHOICE) {
    if (correctCount < 1) {
      throw new BadRequestException(
        'Câu hỏi nhiều đáp án đúng phải có ít nhất một đáp án được đánh dấu đúng',
      );
    }
  }
}
