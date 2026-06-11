import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { question_type_enum } from '../../generated/prisma';

import { AuthUser } from '../auth/strategies/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { CreateQuestionDto } from './dto/create-question.dto';
import { validateQuestionAnswers } from './question-validation.util';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  async create(authUser: AuthUser, data: CreateQuestionDto) {
    const createdById = await this.resolveCreatorId(
      authUser,
      data.created_by_id,
    );

    const subject = await this.prisma.subjects.findUnique({
      where: { id: data.subject_id },
    });
    if (!subject) {
      throw new BadRequestException('Không tìm thấy môn học');
    }

    const type = data.type ?? question_type_enum.SINGLE_CHOICE;
    validateQuestionAnswers(type, data.answers);

    const result = await this.prisma.$transaction(async (tx) => {
      const question = await tx.questions.create({
        data: {
          content: data.content.trim(),
          explanation: data.explanation?.trim() || null,
          image_url: data.image_url?.trim() || null,
          level: data.level ?? 1,
          type,
          subject_id: data.subject_id,
          created_by_id: createdById,
        },
      });

      const answers: Awaited<ReturnType<typeof tx.answers.create>>[] = [];
      for (const answer of data.answers) {
        const created = await tx.answers.create({
          data: {
            content: answer.content.trim(),
            is_correct: answer.is_correct ?? false,
            question_id: question.id,
          },
        });
        answers.push(created);
      }

      return { question, answers };
    });

    const withSubject = await this.prisma.questions.findUniqueOrThrow({
      where: { id: result.question.id },
      include: {
        subjects: { select: { id: true, name: true, slug: true } },
        answers: {
          orderBy: { created_at: 'asc' },
          select: {
            id: true,
            content: true,
            is_correct: true,
            created_at: true,
          },
        },
      },
    });

    return {
      message: 'Tạo câu hỏi thành công',
      data: {
        id: withSubject.id,
        content: withSubject.content,
        explanation: withSubject.explanation,
        image_url: withSubject.image_url,
        level: withSubject.level,
        type: withSubject.type,
        subject: withSubject.subjects,
        answers: withSubject.answers,
        created_at: withSubject.created_at,
        updated_at: withSubject.updated_at,
      },
    };
  }

  private async resolveCreatorId(
    authUser: AuthUser,
    creatorIdFromBody?: string,
  ): Promise<string> {
    if (authUser.role === 'ADMIN' && creatorIdFromBody) {
      const creator = await this.prisma.users.findUnique({
        where: { id: creatorIdFromBody },
      });

      if (!creator) {
        throw new BadRequestException('Không tìm thấy giáo viên');
      }

      if (creator.role !== 'TEACHER' && creator.role !== 'ADMIN') {
        throw new BadRequestException(
          'Chỉ có thể tạo câu hỏi cho tài khoản giáo viên hoặc admin',
        );
      }

      if (!creator.email_verified || creator.is_active === false) {
        throw new BadRequestException('Giáo viên được chọn chưa sẵn sàng');
      }

      return creator.id;
    }

    if (creatorIdFromBody && creatorIdFromBody !== authUser.id) {
      throw new ForbiddenException(
        'Giáo viên chỉ có thể tạo câu hỏi cho chính mình',
      );
    }

    return authUser.id;
  }
}
