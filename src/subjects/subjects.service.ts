import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../../generated/prisma';

import { slugifyTitle } from '../exams/exam-slug.util';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { ListSubjectsQueryDto } from './dto/list-subjects-query.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectsService {
  constructor(private prisma: PrismaService) {}

  async list(query: ListSubjectsQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 50;
    const skip = (page - 1) * limit;
    const search = query.search?.trim();

    const where: Prisma.subjectsWhereInput = search
      ? {
          OR: [
            { name: { contains: search } },
            { slug: { contains: search } },
          ],
        }
      : {};

    const [items, total] = await Promise.all([
      this.prisma.subjects.findMany({
        where,
        skip,
        take: limit,
        orderBy: { name: 'asc' },
        include: {
          _count: {
            select: {
              exams: true,
              questions: true,
            },
          },
        },
      }),
      this.prisma.subjects.count({ where }),
    ]);

    return {
      data: items.map((subject) => ({
        id: subject.id,
        name: subject.name,
        slug: subject.slug,
        description: subject.description,
        exam_count: subject._count.exams,
        question_count: subject._count.questions,
        created_at: subject.created_at,
      })),
      meta: {
        page,
        limit,
        total,
        total_pages: Math.ceil(total / limit) || 0,
      },
    };
  }

  async getById(id: string) {
    const subject = await this.prisma.subjects.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            exams: true,
            questions: true,
          },
        },
      },
    });

    if (!subject) {
      throw new NotFoundException('Không tìm thấy môn học');
    }

    return {
      message: 'Lấy chi tiết môn học thành công',
      data: this.mapSubject(subject),
    };
  }

  async create(data: CreateSubjectDto) {
    const name = data.name.trim();
    const slug = (data.slug?.trim() || slugifyTitle(name)).toLowerCase();

    try {
      const subject = await this.prisma.subjects.create({
        data: {
          name,
          slug,
          description: data.description?.trim() || null,
        },
        include: {
          _count: {
            select: {
              exams: true,
              questions: true,
            },
          },
        },
      });

      return {
        message: 'Tạo môn học thành công',
        data: this.mapSubject(subject),
      };
    } catch (error) {
      throw this.toDuplicateSlugException(error);
    }
  }

  async update(id: string, data: UpdateSubjectDto) {
    await this.ensureExists(id);

    const patch: Prisma.subjectsUpdateInput = {};

    if (data.name !== undefined) {
      patch.name = data.name.trim();
    }

    if (data.slug !== undefined) {
      patch.slug = data.slug.trim().toLowerCase();
    }

    if (data.description !== undefined) {
      patch.description = data.description?.trim() || null;
    }

    try {
      const subject = await this.prisma.subjects.update({
        where: { id },
        data: patch,
        include: {
          _count: {
            select: {
              exams: true,
              questions: true,
            },
          },
        },
      });

      return {
        message: 'Cập nhật môn học thành công',
        data: this.mapSubject(subject),
      };
    } catch (error) {
      throw this.toDuplicateSlugException(error);
    }
  }

  async remove(id: string) {
    const subject = await this.prisma.subjects.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            exams: true,
            questions: true,
          },
        },
      },
    });

    if (!subject) {
      throw new NotFoundException('Không tìm thấy môn học');
    }

    if (subject._count.exams > 0 || subject._count.questions > 0) {
      throw new BadRequestException(
        'Không thể xóa môn học đang có đề thi hoặc câu hỏi',
      );
    }

    await this.prisma.subjects.delete({ where: { id } });

    return { message: 'Xóa môn học thành công' };
  }

  private async ensureExists(id: string) {
    const subject = await this.prisma.subjects.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!subject) {
      throw new NotFoundException('Không tìm thấy môn học');
    }
  }

  private mapSubject(subject: {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    created_at: Date | null;
    _count: { exams: number; questions: number };
  }) {
    return {
      id: subject.id,
      name: subject.name,
      slug: subject.slug,
      description: subject.description,
      exam_count: subject._count.exams,
      question_count: subject._count.questions,
      created_at: subject.created_at,
    };
  }

  private toDuplicateSlugException(error: unknown): BadRequestException {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      return new BadRequestException('Slug môn học đã được sử dụng');
    }

    throw error;
  }
}
