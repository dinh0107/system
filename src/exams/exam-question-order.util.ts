import { Prisma } from '../../generated/prisma';

import { CreateAnswerDto } from '../questions/dto/create-answer.dto';

/** Tạo đáp án tuần tự để giữ đúng thứ tự (tránh Promise.all làm lộn created_at). */
export async function createAnswersInOrder(
  tx: Prisma.TransactionClient,
  questionId: string,
  answers: CreateAnswerDto[],
): Promise<void> {
  for (const answer of answers) {
    await tx.answers.create({
      data: {
        content: answer.content.trim(),
        is_correct: answer.is_correct ?? false,
        question_id: questionId,
      },
    });
  }
}

/** Gán lại order_index 0..n-1 theo danh sách question_id (hai bước, tránh trùng khi hoán đổi). */
export async function applyQuestionOrder(
  tx: Prisma.TransactionClient,
  examId: string,
  orderedQuestionIds: string[],
): Promise<void> {
  const offset = 10_000;

  for (let i = 0; i < orderedQuestionIds.length; i++) {
    await tx.exam_questions.update({
      where: {
        exam_id_question_id: {
          exam_id: examId,
          question_id: orderedQuestionIds[i],
        },
      },
      data: { order_index: offset + i },
    });
  }

  for (let i = 0; i < orderedQuestionIds.length; i++) {
    await tx.exam_questions.update({
      where: {
        exam_id_question_id: {
          exam_id: examId,
          question_id: orderedQuestionIds[i],
        },
      },
      data: { order_index: i },
    });
  }
}

/** Nén thứ tự câu hỏi liên tiếp 0..n-1 theo order_index hiện tại. */
export async function compactQuestionOrder(
  tx: Prisma.TransactionClient,
  examId: string,
): Promise<void> {
  const rows = await tx.exam_questions.findMany({
    where: { exam_id: examId },
    orderBy: [{ order_index: 'asc' }, { question_id: 'asc' }],
    select: { question_id: true },
  });

  await applyQuestionOrder(
    tx,
    examId,
    rows.map((row) => row.question_id),
  );
}

export const examQuestionsOrderBy = [
  { order_index: 'asc' as const },
  { question_id: 'asc' as const },
];
