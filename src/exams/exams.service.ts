import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  exam_status_enum,
  Prisma,
  question_type_enum,
} from '../../generated/prisma';

import { AuthUser } from '../auth/strategies/jwt.strategy';
import { validateQuestionAnswers } from '../questions/question-validation.util';
import { PrismaService } from '../prisma/prisma.service';
import { AssignExamQuestionsDto } from './dto/assign-exam-questions.dto';
import { CreateExamDto } from './dto/create-exam.dto';
import { CreateExamQuestionItemDto } from './dto/create-exam-question-item.dto';
import { ListExamsQueryDto } from './dto/list-exams-query.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { UpdateExamQuestionDto } from './dto/update-exam-question.dto';
import { UpdateExamQuestionItemDto } from './dto/update-exam-question-item.dto';
import {
  buildExamAccessSummary,
  validateExamAudience,
} from './exam-access.util';
import { slugifyTitle } from './exam-slug.util';

@Injectable()
export class ExamsService {
  constructor(private prisma: PrismaService) {}

  async assignQuestions(
    authUser: AuthUser,
    examId: string,
    data: AssignExamQuestionsDto,
  ) {
    const exam = await this.findAccessibleExam(authUser, examId);

    if (
      exam.status === exam_status_enum.CLOSED ||
      exam.status === exam_status_enum.ARCHIVED
    ) {
      throw new BadRequestException(
        'Không thể gán câu hỏi vào đề đã đóng hoặc lưu trữ',
      );
    }

    const items = data.questions;
    const questionIds = items.map((item) => item.question_id);

    if (new Set(questionIds).size !== questionIds.length) {
      throw new BadRequestException(
        'Danh sách câu hỏi không được chứa mã trùng lặp',
      );
    }

    const questions = await this.prisma.questions.findMany({
      where: { id: { in: questionIds } },
      select: {
        id: true,
        content: true,
        type: true,
        level: true,
        subject_id: true,
        created_by_id: true,
      },
    });

    if (questions.length !== questionIds.length) {
      throw new BadRequestException('Một hoặc nhiều câu hỏi không tồn tại');
    }

    const questionMap = new Map(questions.map((q) => [q.id, q]));

    for (const question of questions) {
      if (question.subject_id !== exam.subject_id) {
        throw new BadRequestException(
          'Tất cả câu hỏi phải cùng môn học với đề thi',
        );
      }

      if (
        authUser.role !== 'ADMIN' &&
        question.created_by_id !== authUser.id
      ) {
        throw new ForbiddenException('Chỉ được gán câu hỏi do bạn tạo');
      }
    }

    const alreadyAssigned = await this.prisma.exam_questions.findMany({
      where: {
        exam_id: examId,
        question_id: { in: questionIds },
      },
      select: { question_id: true },
    });

    if (alreadyAssigned.length > 0) {
      throw new BadRequestException(
        'Một hoặc nhiều câu hỏi đã có trong đề thi',
      );
    }

    const maxOrder = await this.prisma.exam_questions.aggregate({
      where: { exam_id: examId },
      _max: { order_index: true },
    });
    let autoOrder = (maxOrder._max.order_index ?? -1) + 1;

    const rows = items.map((item) => {
      const orderIndex = item.order_index ?? autoOrder++;
      return {
        exam_id: examId,
        question_id: item.question_id,
        order_index: orderIndex,
        score: item.score ?? 1,
      };
    });

    await this.prisma.exam_questions.createMany({ data: rows });

    const assigned = await this.prisma.exam_questions.findMany({
      where: {
        exam_id: examId,
        question_id: { in: questionIds },
      },
      orderBy: { order_index: 'asc' },
    });

    const totalQuestions = await this.prisma.exam_questions.count({
      where: { exam_id: examId },
    });

    return {
      message: 'Gán câu hỏi vào đề thành công',
      data: {
        exam_id: examId,
        question_count: totalQuestions,
        questions: assigned.map((row) => {
          const question = questionMap.get(row.question_id)!;
          return {
            question_id: row.question_id,
            order_index: row.order_index,
            score: row.score,
            content: question.content,
            type: question.type,
            level: question.level,
          };
        }),
      },
    };
  }

  async create(authUser: AuthUser, data: CreateExamDto) {
    return this.createExamWithQuestions(authUser, data);
  }

  async update(authUser: AuthUser, examId: string, data: UpdateExamDto) {
    const exam = await this.findAccessibleExam(authUser, examId);

    if (
      exam.status === exam_status_enum.CLOSED ||
      exam.status === exam_status_enum.ARCHIVED
    ) {
      throw new BadRequestException(
        'Không thể sửa đề đã đóng hoặc lưu trữ',
      );
    }

    if (!this.hasUpdateFields(data)) {
      throw new BadRequestException('Cần gửi ít nhất một trường để cập nhật');
    }

    const existingClassRows = await this.prisma.exam_classes.findMany({
      where: { exam_id: examId },
      select: { class_id: true },
    });
    const existingClassIds = existingClassRows.map((row) => row.class_id);

    const mergedIsPublic =
      data.is_public !== undefined ? data.is_public : exam.is_public === true;

    const mergedClassIds =
      data.class_ids !== undefined
        ? await this.resolveClassIds(
            authUser,
            data.class_ids,
            exam.created_by_id,
          )
        : existingClassIds;

    validateExamAudience({
      is_public: mergedIsPublic,
      class_ids: mergedClassIds,
    });

    if (data.access_code !== undefined && !mergedIsPublic) {
      throw new BadRequestException(
        'access_code chỉ dùng khi is_public = true',
      );
    }

    const startTime =
      data.start_time !== undefined
        ? data.start_time
          ? new Date(data.start_time)
          : null
        : exam.start_time;
    const endTime =
      data.end_time !== undefined
        ? data.end_time
          ? new Date(data.end_time)
          : null
        : exam.end_time;

    if (startTime && endTime && startTime >= endTime) {
      throw new BadRequestException(
        'Thời gian kết thúc phải sau thời gian bắt đầu',
      );
    }

    let accessCode = exam.access_code;
    if (!mergedIsPublic) {
      accessCode = null;
    } else if (data.access_code !== undefined) {
      accessCode = data.access_code.trim() || null;
    }

    const updateData: Prisma.examsUpdateInput = {};

    if (data.title !== undefined) {
      updateData.title = data.title.trim();
    }

    if (data.slug !== undefined) {
      updateData.slug = await this.resolveUniqueSlugForUpdate(
        data.slug.trim(),
        examId,
      );
    }

    if (data.description !== undefined) {
      updateData.description = data.description.trim() || null;
    }

    if (data.duration !== undefined) {
      updateData.duration = data.duration;
    }

    if (data.total_score !== undefined) {
      updateData.total_score = data.total_score;
    }

    if (data.status !== undefined) {
      updateData.status = data.status;
    }

    if (data.is_public !== undefined) {
      updateData.is_public = data.is_public;
    }

    if (
      data.is_public !== undefined ||
      data.access_code !== undefined ||
      accessCode !== exam.access_code
    ) {
      updateData.access_code = accessCode;
    }

    if (data.start_time !== undefined) {
      updateData.start_time = startTime;
    }

    if (data.end_time !== undefined) {
      updateData.end_time = endTime;
    }

    if (data.shuffle_questions !== undefined) {
      updateData.shuffle_questions = data.shuffle_questions;
    }

    if (data.shuffle_answers !== undefined) {
      updateData.shuffle_answers = data.shuffle_answers;
    }

    if (data.show_result_after_submit !== undefined) {
      updateData.show_result_after_submit = data.show_result_after_submit;
    }

    if (data.max_attempts !== undefined) {
      updateData.max_attempts = data.max_attempts;
    }

    try {
      await this.prisma.$transaction(async (tx) => {
        if (Object.keys(updateData).length > 0) {
          await tx.exams.update({
            where: { id: examId },
            data: updateData,
          });
        }

        if (data.class_ids !== undefined) {
          await tx.exam_classes.deleteMany({ where: { exam_id: examId } });

          if (mergedClassIds.length > 0) {
            await tx.exam_classes.createMany({
              data: mergedClassIds.map((classId) => ({
                exam_id: examId,
                class_id: classId,
              })),
            });
          }
        }

        if (data.questions?.length) {
          await this.batchUpdateQuestionsInTransaction(
            authUser,
            tx,
            examId,
            exam,
            data.questions,
          );
        }
      });

      const updated = await this.prisma.exams.findUniqueOrThrow({
        where: { id: examId },
        include: {
          subjects: { select: { id: true, name: true, slug: true } },
          _count: { select: { exam_questions: true } },
          exam_classes: {
            include: {
              classes: {
                select: {
                  id: true,
                  name: true,
                  code: true,
                  school_year: true,
                },
              },
            },
          },
        },
      });

      const responseData: Record<string, unknown> = this.mapExam(updated);

      if (data.questions?.length) {
        const rows = await this.prisma.exam_questions.findMany({
          where: {
            exam_id: examId,
            question_id: { in: data.questions.map((item) => item.question_id) },
          },
          orderBy: { order_index: 'asc' },
          include: {
            questions: {
              select: {
                id: true,
                content: true,
                type: true,
                level: true,
                explanation: true,
                image_url: true,
                answers: {
                  orderBy: { created_at: 'asc' },
                  select: {
                    id: true,
                    content: true,
                    is_correct: true,
                  },
                },
              },
            },
          },
        });

        responseData.questions = rows.map((row) => this.mapExamQuestionRow(row));
      }

      return {
        message: 'Cập nhật đề thi thành công',
        data: responseData,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Slug đề thi đã được sử dụng');
      }
      throw error;
    }
  }

  async createQuestionInExam(
    authUser: AuthUser,
    examId: string,
    data: CreateExamQuestionItemDto,
  ) {
    const exam = await this.findAccessibleExam(authUser, examId);
    this.assertExamEditableForQuestions(exam);
    await this.assertNoSubmittedAttempts(examId);

    const questionCount = await this.prisma.exam_questions.count({
      where: { exam_id: examId },
    });
    if (questionCount >= 100) {
      throw new BadRequestException('Mỗi đề tối đa 100 câu hỏi');
    }

    const type = data.type ?? question_type_enum.SINGLE_CHOICE;
    validateQuestionAnswers(type, data.answers);

    const maxOrder = await this.prisma.exam_questions.aggregate({
      where: { exam_id: examId },
      _max: { order_index: true },
    });
    const orderIndex = data.order_index ?? (maxOrder._max.order_index ?? -1) + 1;

    const questionId = await this.prisma.$transaction(async (tx) => {
      const question = await tx.questions.create({
        data: {
          content: data.content.trim(),
          explanation: data.explanation?.trim() || null,
          image_url: data.image_url?.trim() || null,
          level: data.level ?? 1,
          type,
          subject_id: exam.subject_id,
          created_by_id: exam.created_by_id,
        },
      });

      await Promise.all(
        data.answers.map((answer) =>
          tx.answers.create({
            data: {
              content: answer.content.trim(),
              is_correct: answer.is_correct ?? false,
              question_id: question.id,
            },
          }),
        ),
      );

      await tx.exam_questions.create({
        data: {
          exam_id: examId,
          question_id: question.id,
          order_index: orderIndex,
          score: data.score ?? 1,
        },
      });

      return question.id;
    });

    const row = await this.fetchExamQuestionRow(examId, questionId);

    return {
      message: 'Thêm câu hỏi vào đề thành công',
      data: this.mapExamQuestionRow(row),
    };
  }

  async updateQuestion(
    authUser: AuthUser,
    examId: string,
    questionId: string,
    data: UpdateExamQuestionDto,
  ) {
    if (!this.hasQuestionUpdateFields(data)) {
      throw new BadRequestException('Cần gửi ít nhất một trường để cập nhật');
    }

    const exam = await this.findAccessibleExam(authUser, examId);
    this.assertExamEditableForQuestions(exam);

    const { examQuestion, question } = await this.findExamQuestionLink(
      authUser,
      examId,
      questionId,
      exam,
    );

    if (this.questionTouchesContent(data)) {
      await this.assertNoSubmittedAttempts(examId);
    }

    await this.prisma.$transaction(async (tx) => {
      await this.applyQuestionUpdateInTransaction(
        tx,
        examId,
        examQuestion,
        question,
        data,
      );
    });

    const row = await this.fetchExamQuestionRow(examId, questionId);

    return {
      message: 'Cập nhật câu hỏi thành công',
      data: this.mapExamQuestionRow(row),
    };
  }

  async removeQuestionFromExam(
    authUser: AuthUser,
    examId: string,
    questionId: string,
  ) {
    const exam = await this.findAccessibleExam(authUser, examId);
    this.assertExamEditableForQuestions(exam);
    await this.assertNoSubmittedAttempts(examId);

    const questionCount = await this.prisma.exam_questions.count({
      where: { exam_id: examId },
    });
    if (questionCount <= 1) {
      throw new BadRequestException('Đề phải có ít nhất một câu hỏi');
    }

    await this.findExamQuestionLink(authUser, examId, questionId, exam);

    await this.prisma.$transaction(async (tx) => {
      await tx.exam_questions.delete({
        where: {
          exam_id_question_id: {
            exam_id: examId,
            question_id: questionId,
          },
        },
      });

      const otherUsage = await tx.exam_questions.count({
        where: { question_id: questionId },
      });

      if (otherUsage === 0) {
        await tx.questions.delete({ where: { id: questionId } });
      }
    });

    const remaining = await this.prisma.exam_questions.count({
      where: { exam_id: examId },
    });

    return {
      message: 'Xóa câu hỏi khỏi đề thành công',
      data: {
        exam_id: examId,
        question_id: questionId,
        question_count: remaining,
      },
    };
  }

  private async createExamWithQuestions(
    authUser: AuthUser,
    data: CreateExamDto,
  ) {
    const items = data.questions;
    const createdById = await this.resolveCreatorId(
      authUser,
      data.created_by_id,
    );

    const subjectId = await this.resolveSubjectId(data);
    validateExamAudience(data);
    const classIds = await this.resolveClassIds(
      authUser,
      data.class_ids,
      createdById,
    );
    const { startTime, endTime } = this.parseExamTimes(data);
    const slug = await this.resolveUniqueSlug(
      data.slug?.trim() || slugifyTitle(data.title),
    );

    for (const item of items) {
      const type = item.type ?? question_type_enum.SINGLE_CHOICE;
      validateQuestionAnswers(type, item.answers);
    }

    let autoOrder = 0;

    try {
      const { examId } = await this.prisma.$transaction(async (tx) => {
        const exam = await tx.exams.create({
          data: {
            title: data.title.trim(),
            slug,
            description: data.description?.trim() || null,
            duration: data.duration,
            total_score: data.total_score ?? 10,
            status: data.status ?? 'DRAFT',
            is_public: data.is_public ?? false,
            access_code: data.is_public
              ? data.access_code?.trim() || null
              : null,
            start_time: startTime,
            end_time: endTime,
            shuffle_questions: data.shuffle_questions ?? false,
            shuffle_answers: data.shuffle_answers ?? false,
            show_result_after_submit: data.show_result_after_submit ?? true,
            max_attempts: data.max_attempts ?? 1,
            subject_id: subjectId,
            created_by_id: createdById,
          },
        });

        for (const item of items) {
          const type = item.type ?? question_type_enum.SINGLE_CHOICE;

          const question = await tx.questions.create({
            data: {
              content: item.content.trim(),
              explanation: item.explanation?.trim() || null,
              image_url: item.image_url?.trim() || null,
              level: item.level ?? 1,
              type,
              subject_id: subjectId,
              created_by_id: createdById,
            },
          });

          await Promise.all(
            item.answers.map((answer) =>
              tx.answers.create({
                data: {
                  content: answer.content.trim(),
                  is_correct: answer.is_correct ?? false,
                  question_id: question.id,
                },
              }),
            ),
          );

          const orderIndex = item.order_index ?? autoOrder++;

          await tx.exam_questions.create({
            data: {
              exam_id: exam.id,
              question_id: question.id,
              order_index: orderIndex,
              score: item.score ?? 1,
            },
          });
        }

        if (classIds.length > 0) {
          await tx.exam_classes.createMany({
            data: classIds.map((classId) => ({
              exam_id: exam.id,
              class_id: classId,
            })),
          });
        }

        return { examId: exam.id };
      });

      const exam = await this.prisma.exams.findUniqueOrThrow({
        where: { id: examId },
        include: {
          subjects: { select: { id: true, name: true, slug: true } },
          _count: { select: { exam_questions: true } },
          exam_classes: {
            include: {
              classes: {
                select: {
                  id: true,
                  name: true,
                  code: true,
                  school_year: true,
                },
              },
            },
          },
          exam_questions: {
            orderBy: { order_index: 'asc' },
            include: {
              questions: {
                select: {
                  id: true,
                  content: true,
                  type: true,
                  level: true,
                  answers: {
                    orderBy: { created_at: 'asc' },
                    select: {
                      id: true,
                      content: true,
                      is_correct: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      return {
        message: 'Tạo đề thi và câu hỏi thành công',
        data: {
          ...this.mapExam(exam),
          questions: exam.exam_questions.map((row) => ({
            order_index: row.order_index,
            score: row.score,
            question: row.questions,
          })),
        },
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Slug đề thi đã được sử dụng');
      }
      throw error;
    }
  }

  private async resolveSubjectId(data: CreateExamDto): Promise<string> {
    if (data.subject_id) {
      const subject = await this.prisma.subjects.findUnique({
        where: { id: data.subject_id },
      });
      if (!subject) {
        throw new BadRequestException('Không tìm thấy môn học');
      }
      return subject.id;
    }

    const slug = data.subject_slug?.trim();
    if (slug) {
      const subject = await this.prisma.subjects.findUnique({
        where: { slug },
      });
      if (!subject) {
        throw new BadRequestException('Không tìm thấy môn học theo slug');
      }
      return subject.id;
    }

    throw new BadRequestException(
      'Cần gửi subject_id hoặc subject_slug của môn học',
    );
  }

  private parseExamTimes(data: CreateExamDto) {
    const startTime = data.start_time ? new Date(data.start_time) : null;
    const endTime = data.end_time ? new Date(data.end_time) : null;

    if (startTime && endTime && startTime >= endTime) {
      throw new BadRequestException(
        'Thời gian kết thúc phải sau thời gian bắt đầu',
      );
    }

    return { startTime, endTime };
  }

  async listForTeacher(authUser: AuthUser, query: ListExamsQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;

    const where: Prisma.examsWhereInput = {
      ...(authUser.role !== 'ADMIN' && { created_by_id: authUser.id }),
      ...(query.subject_id && { subject_id: query.subject_id }),
      ...(query.status && { status: query.status }),
      ...(query.search?.trim() && {
        title: { contains: query.search.trim() },
      }),
    };

    const [items, total] = await Promise.all([
      this.prisma.exams.findMany({
        where,
        skip,
        take: limit,
        orderBy: { updated_at: 'desc' },
        include: {
          subjects: {
            select: { id: true, name: true, slug: true },
          },
          exam_classes: {
            include: {
              classes: {
                select: {
                  id: true,
                  name: true,
                  code: true,
                  school_year: true,
                },
              },
            },
          },
          _count: {
            select: { exam_questions: true },
          },
        },
      }),
      this.prisma.exams.count({ where }),
    ]);

    return {
      data: items.map((exam) => this.mapExam(exam)),
      meta: {
        page,
        limit,
        total,
        total_pages: Math.ceil(total / limit) || 0,
      },
    };
  }

  private mapExam(
    exam: {
      id: string;
      title: string;
      slug: string;
      description: string | null;
      duration: number;
      total_score: number | null;
      status: string | null;
      is_public: boolean | null;
      access_code: string | null;
      start_time: Date | null;
      end_time: Date | null;
      max_attempts: number | null;
      shuffle_questions: boolean | null;
      shuffle_answers: boolean | null;
      show_result_after_submit: boolean | null;
      created_at: Date | null;
      updated_at: Date | null;
      subjects: { id: string; name: string; slug: string };
      _count: { exam_questions: number };
      exam_classes?: Array<{
        classes: {
          id: string;
          name: string;
          code: string | null;
          school_year: string | null;
        };
      }>;
    },
  ) {
    return {
      id: exam.id,
      title: exam.title,
      slug: exam.slug,
      description: exam.description,
      duration: exam.duration,
      total_score: exam.total_score,
      status: exam.status,
      start_time: exam.start_time,
      end_time: exam.end_time,
      max_attempts: exam.max_attempts,
      shuffle_questions: exam.shuffle_questions,
      shuffle_answers: exam.shuffle_answers,
      show_result_after_submit: exam.show_result_after_submit,
      subject: exam.subjects,
      question_count: exam._count.exam_questions,
      access: buildExamAccessSummary(exam),
      created_at: exam.created_at,
      updated_at: exam.updated_at,
    };
  }

  private async resolveClassIds(
    authUser: AuthUser,
    classIds: string[] | undefined,
    examOwnerId: string,
  ): Promise<string[]> {
    if (!classIds?.length) {
      return [];
    }

    const uniqueIds = [...new Set(classIds)];

    const classes = await this.prisma.classes.findMany({
      where: { id: { in: uniqueIds } },
    });

    if (classes.length !== uniqueIds.length) {
      throw new BadRequestException('Một hoặc nhiều lớp không tồn tại');
    }

    for (const classRoom of classes) {
      if (authUser.role !== 'ADMIN' && classRoom.teacher_id !== authUser.id) {
        throw new ForbiddenException(
          'Chỉ được gán đề cho lớp do bạn phụ trách',
        );
      }

      if (authUser.role === 'ADMIN' && classRoom.teacher_id !== examOwnerId) {
        throw new BadRequestException(
          'Lớp được chọn phải thuộc giáo viên được gán đề',
        );
      }
    }

    return uniqueIds;
  }

  private async resolveUniqueSlug(baseSlug: string): Promise<string> {
    const normalized = slugifyTitle(baseSlug);
    let slug = normalized;
    let suffix = 1;

    while (await this.prisma.exams.findUnique({ where: { slug } })) {
      suffix += 1;
      slug = `${normalized}-${suffix}`;
    }

    return slug;
  }

  private async resolveUniqueSlugForUpdate(
    baseSlug: string,
    excludeExamId: string,
  ): Promise<string> {
    const normalized = slugifyTitle(baseSlug);
    let slug = normalized;
    let suffix = 1;

    while (true) {
      const existing = await this.prisma.exams.findUnique({ where: { slug } });
      if (!existing || existing.id === excludeExamId) {
        return slug;
      }
      suffix += 1;
      slug = `${normalized}-${suffix}`;
    }
  }

  private hasUpdateFields(data: UpdateExamDto): boolean {
    return (
      data.title !== undefined ||
      data.slug !== undefined ||
      data.description !== undefined ||
      data.duration !== undefined ||
      data.total_score !== undefined ||
      data.status !== undefined ||
      data.is_public !== undefined ||
      data.class_ids !== undefined ||
      data.access_code !== undefined ||
      data.start_time !== undefined ||
      data.end_time !== undefined ||
      data.shuffle_questions !== undefined ||
      data.shuffle_answers !== undefined ||
      data.show_result_after_submit !== undefined ||
      data.max_attempts !== undefined ||
      (data.questions?.length ?? 0) > 0
    );
  }

  private hasQuestionUpdateFields(data: UpdateExamQuestionDto): boolean {
    return (
      data.content !== undefined ||
      data.explanation !== undefined ||
      data.image_url !== undefined ||
      data.level !== undefined ||
      data.type !== undefined ||
      data.answers !== undefined ||
      data.order_index !== undefined ||
      data.score !== undefined
    );
  }

  private questionTouchesContent(data: UpdateExamQuestionDto): boolean {
    return (
      data.content !== undefined ||
      data.explanation !== undefined ||
      data.image_url !== undefined ||
      data.level !== undefined ||
      data.type !== undefined ||
      data.answers !== undefined
    );
  }

  private assertExamEditableForQuestions(exam: {
    status: exam_status_enum | null;
  }): void {
    if (
      exam.status === exam_status_enum.CLOSED ||
      exam.status === exam_status_enum.ARCHIVED
    ) {
      throw new BadRequestException(
        'Không thể sửa câu hỏi của đề đã đóng hoặc lưu trữ',
      );
    }
  }

  private async assertNoSubmittedAttempts(examId: string): Promise<void> {
    const submittedCount = await this.prisma.attempts.count({
      where: {
        exam_id: examId,
        submitted_at: { not: null },
      },
    });

    if (submittedCount > 0) {
      throw new BadRequestException(
        'Không thể sửa nội dung câu hỏi khi đã có bài làm được nộp',
      );
    }
  }

  private async findExamQuestionLink(
    authUser: AuthUser,
    examId: string,
    questionId: string,
    exam?: {
      subject_id: string;
      created_by_id: string;
    },
  ) {
    const examRecord =
      exam ?? (await this.findAccessibleExam(authUser, examId));

    const examQuestion = await this.prisma.exam_questions.findUnique({
      where: {
        exam_id_question_id: {
          exam_id: examId,
          question_id: questionId,
        },
      },
    });

    if (!examQuestion) {
      throw new NotFoundException('Câu hỏi không thuộc đề thi này');
    }

    const question = await this.prisma.questions.findUnique({
      where: { id: questionId },
      include: {
        answers: {
          orderBy: { created_at: 'asc' },
        },
      },
    });

    if (!question) {
      throw new NotFoundException('Không tìm thấy câu hỏi');
    }

    if (question.subject_id !== examRecord.subject_id) {
      throw new BadRequestException('Câu hỏi không cùng môn với đề thi');
    }

    if (
      authUser.role !== 'ADMIN' &&
      question.created_by_id !== authUser.id
    ) {
      throw new ForbiddenException('Chỉ được sửa câu hỏi do bạn tạo');
    }

    return { exam: examRecord, examQuestion, question };
  }

  private async batchUpdateQuestionsInTransaction(
    authUser: AuthUser,
    tx: Prisma.TransactionClient,
    examId: string,
    exam: { subject_id: string; created_by_id: string },
    items: UpdateExamQuestionItemDto[],
  ) {
    const questionIds = items.map((item) => item.question_id);

    if (new Set(questionIds).size !== questionIds.length) {
      throw new BadRequestException(
        'Danh sách câu hỏi không được chứa mã trùng lặp',
      );
    }

    const touchesContent = items.some((item) =>
      this.questionTouchesContent(item),
    );
    if (touchesContent) {
      await this.assertNoSubmittedAttempts(examId);
    }

    for (const item of items) {
      if (!this.hasQuestionUpdateFields(item)) {
        throw new BadRequestException(
          `Câu hỏi ${item.question_id} cần ít nhất một trường để cập nhật`,
        );
      }

      const { examQuestion, question } = await this.findExamQuestionLink(
        authUser,
        examId,
        item.question_id,
        exam,
      );

      await this.applyQuestionUpdateInTransaction(
        tx,
        examId,
        examQuestion,
        question,
        item,
      );
    }
  }

  private async applyQuestionUpdateInTransaction(
    tx: Prisma.TransactionClient,
    examId: string,
    examQuestion: { order_index: number; score: number | null },
    question: {
      id: string;
      type: question_type_enum | null;
      answers: Array<{
        content: string;
        is_correct: boolean | null;
      }>;
    },
    data: UpdateExamQuestionDto,
  ) {
    const type =
      data.type ?? question.type ?? question_type_enum.SINGLE_CHOICE;

    if (data.answers !== undefined) {
      validateQuestionAnswers(type, data.answers);
    } else if (data.type !== undefined && data.type !== question.type) {
      validateQuestionAnswers(
        type,
        question.answers.map((answer) => ({
          content: answer.content,
          is_correct: answer.is_correct ?? false,
        })),
      );
    }

    const questionUpdate: Prisma.questionsUpdateInput = {};

    if (data.content !== undefined) {
      questionUpdate.content = data.content.trim();
    }

    if (data.explanation !== undefined) {
      questionUpdate.explanation = data.explanation.trim() || null;
    }

    if (data.image_url !== undefined) {
      questionUpdate.image_url = data.image_url?.trim() || null;
    }

    if (data.level !== undefined) {
      questionUpdate.level = data.level;
    }

    if (data.type !== undefined) {
      questionUpdate.type = data.type;
    }

    if (Object.keys(questionUpdate).length > 0) {
      await tx.questions.update({
        where: { id: question.id },
        data: questionUpdate,
      });
    }

    if (data.answers !== undefined) {
      await tx.answers.deleteMany({ where: { question_id: question.id } });

      await Promise.all(
        data.answers.map((answer) =>
          tx.answers.create({
            data: {
              content: answer.content.trim(),
              is_correct: answer.is_correct ?? false,
              question_id: question.id,
            },
          }),
        ),
      );
    }

    const examQuestionUpdate: Prisma.exam_questionsUpdateInput = {};

    if (data.order_index !== undefined) {
      examQuestionUpdate.order_index = data.order_index;
    }

    if (data.score !== undefined) {
      examQuestionUpdate.score = data.score;
    }

    if (Object.keys(examQuestionUpdate).length > 0) {
      await tx.exam_questions.update({
        where: {
          exam_id_question_id: {
            exam_id: examId,
            question_id: question.id,
          },
        },
        data: examQuestionUpdate,
      });
    }
  }

  private async fetchExamQuestionRow(examId: string, questionId: string) {
    return this.prisma.exam_questions.findUniqueOrThrow({
      where: {
        exam_id_question_id: {
          exam_id: examId,
          question_id: questionId,
        },
      },
      include: {
        questions: {
          select: {
            id: true,
            content: true,
            explanation: true,
            image_url: true,
            level: true,
            type: true,
            answers: {
              orderBy: { created_at: 'asc' },
              select: {
                id: true,
                content: true,
                is_correct: true,
              },
            },
          },
        },
      },
    });
  }

  private mapExamQuestionRow(row: {
    order_index: number;
    score: number | null;
    questions: {
      id: string;
      content: string;
      explanation: string | null;
      image_url: string | null;
      level: number | null;
      type: question_type_enum | null;
      answers: Array<{
        id: string;
        content: string;
        is_correct: boolean | null;
      }>;
    };
  }) {
    return {
      order_index: row.order_index,
      score: row.score,
      question: row.questions,
    };
  }

  private async findAccessibleExam(authUser: AuthUser, examId: string) {
    const exam = await this.prisma.exams.findUnique({
      where: { id: examId },
    });

    if (!exam) {
      throw new NotFoundException('Không tìm thấy đề thi');
    }

    if (authUser.role !== 'ADMIN' && exam.created_by_id !== authUser.id) {
      throw new ForbiddenException('Bạn không có quyền sửa đề thi này');
    }

    return exam;
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
          'Chỉ có thể tạo đề cho tài khoản giáo viên hoặc admin',
        );
      }

      if (!creator.email_verified || creator.is_active === false) {
        throw new BadRequestException('Giáo viên được chọn chưa sẵn sàng');
      }

      return creator.id;
    }

    if (creatorIdFromBody && creatorIdFromBody !== authUser.id) {
      throw new ForbiddenException('Giáo viên chỉ có thể tạo đề cho chính mình');
    }

    return authUser.id;
  }
}
