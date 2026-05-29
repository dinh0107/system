import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated/prisma';

import { PrismaService } from '../prisma/prisma.service';
import { ListSubjectsQueryDto } from './dto/list-subjects-query.dto';

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
}
