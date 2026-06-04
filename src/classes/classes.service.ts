import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../../generated/prisma';

import { AuthUser } from '../auth/strategies/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClassDto } from './dto/create-class.dto';
import { ListClassAttemptsQueryDto } from './dto/list-class-attempts-query.dto';
import { ListClassStudentsQueryDto } from './dto/list-class-students-query.dto';
import { ListClassesQueryDto } from './dto/list-classes-query.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  async create(authUser: AuthUser, data: CreateClassDto) {
    const teacherId = await this.resolveTeacherId(authUser, data.teacher_id);
    const code = data.code?.trim() || null;

    if (code) {
      const existingCode = await this.prisma.classes.findFirst({
        where: { teacher_id: teacherId, code },
      });
      if (existingCode) {
        throw new BadRequestException(
          'Mã lớp đã tồn tại trong danh sách lớp của bạn',
        );
      }
    }

    try {
      const created = await this.prisma.classes.create({
        data: {
          name: data.name.trim(),
          code,
          description: data.description?.trim() || null,
          school_year: data.school_year?.trim() || null,
          teacher_id: teacherId,
        },
        include: {
          teacher: {
            select: { id: true, full_name: true, email: true },
          },
          _count: {
            select: { class_students: true },
          },
        },
      });

      return {
        message: 'Tạo lớp học thành công',
        data: {
          id: created.id,
          name: created.name,
          code: created.code,
          description: created.description,
          school_year: created.school_year,
          student_count: created._count.class_students,
          teacher: created.teacher,
          created_at: created.created_at,
          updated_at: created.updated_at,
        },
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException(
          'Mã lớp đã tồn tại trong danh sách lớp của bạn',
        );
      }
      throw error;
    }
  }

  async listForTeacher(authUser: AuthUser, query: ListClassesQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;
    const search = query.search?.trim();

    const where: Prisma.classesWhereInput = {
      ...(authUser.role !== 'ADMIN' && { teacher_id: authUser.id }),
      ...(query.school_year?.trim() && {
        school_year: query.school_year.trim(),
      }),
      ...(search && {
        OR: [{ name: { contains: search } }, { code: { contains: search } }],
      }),
    };

    const [items, total] = await Promise.all([
      this.prisma.classes.findMany({
        where,
        skip,
        take: limit,
        orderBy: { updated_at: 'desc' },
        include: {
          teacher: {
            select: { id: true, full_name: true, email: true },
          },
          _count: {
            select: { class_students: true },
          },
        },
      }),
      this.prisma.classes.count({ where }),
    ]);

    return {
      data: items.map((item) => ({
        id: item.id,
        name: item.name,
        code: item.code,
        description: item.description,
        school_year: item.school_year,
        student_count: item._count.class_students,
        teacher: item.teacher,
        created_at: item.created_at,
        updated_at: item.updated_at,
      })),
      meta: {
        page,
        limit,
        total,
        total_pages: Math.ceil(total / limit) || 0,
      },
    };
  }

  async update(authUser: AuthUser, classId: string, data: UpdateClassDto) {
    const classRoom = await this.findAccessibleClass(authUser, classId, 'sửa');

    if (!this.hasUpdateFields(data)) {
      throw new BadRequestException('Cần gửi ít nhất một trường để cập nhật');
    }

    let code: string | null | undefined;
    if (data.code !== undefined) {
      code = data.code?.trim() || null;

      if (code) {
        const existingCode = await this.prisma.classes.findFirst({
          where: {
            teacher_id: classRoom.teacher_id,
            code,
            id: { not: classId },
          },
        });

        if (existingCode) {
          throw new BadRequestException(
            'Mã lớp đã tồn tại trong danh sách lớp của bạn',
          );
        }
      }
    }

    try {
      const updated = await this.prisma.classes.update({
        where: { id: classId },
        data: {
          ...(data.name !== undefined && { name: data.name.trim() }),
          ...(data.code !== undefined && { code }),
          ...(data.description !== undefined && {
            description: data.description?.trim() || null,
          }),
          ...(data.school_year !== undefined && {
            school_year: data.school_year?.trim() || null,
          }),
        },
        include: {
          teacher: {
            select: { id: true, full_name: true, email: true },
          },
          _count: {
            select: { class_students: true },
          },
        },
      });

      return {
        message: 'Cập nhật lớp học thành công',
        data: this.mapClass(updated),
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException(
          'Mã lớp đã tồn tại trong danh sách lớp của bạn',
        );
      }
      throw error;
    }
  }

  async remove(authUser: AuthUser, classId: string) {
    const classRoom = await this.findAccessibleClass(authUser, classId, 'xóa');

    await this.prisma.classes.delete({
      where: { id: classRoom.id },
    });

    return {
      message: 'Xóa lớp học thành công',
      data: {
        id: classRoom.id,
        name: classRoom.name,
      },
    };
  }

  async listAttemptsInClass(
    authUser: AuthUser,
    classId: string,
    query: ListClassAttemptsQueryDto,
  ) {
    const classRoom = await this.findAccessibleClass(authUser, classId);

    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;
    const search = query.search?.trim();

    const studentInClass: Prisma.usersWhereInput = {
      class_memberships: {
        some: { class_id: classRoom.id },
      },
      role: 'STUDENT',
      ...(search && {
        OR: [
          { full_name: { contains: search } },
          { email: { contains: search } },
        ],
      }),
    };

    const where: Prisma.attemptsWhereInput = {
      users: studentInClass,
      ...(query.exam_id && { exam_id: query.exam_id }),
      ...(query.status && { status: query.status }),
    };

    const [items, total] = await Promise.all([
      this.prisma.attempts.findMany({
        where,
        skip,
        take: limit,
        orderBy: { started_at: 'desc' },
        include: {
          users: {
            select: {
              id: true,
              full_name: true,
              email: true,
              phone: true,
            },
          },
          exams: {
            select: {
              id: true,
              title: true,
              slug: true,
              duration: true,
              total_score: true,
              status: true,
              start_time: true,
              end_time: true,
            },
          },
        },
      }),
      this.prisma.attempts.count({ where }),
    ]);

    return {
      class: {
        id: classRoom.id,
        name: classRoom.name,
        code: classRoom.code,
        school_year: classRoom.school_year,
      },
      data: items.map((attempt) => ({
        id: attempt.id,
        status: attempt.status,
        score: attempt.score,
        total_correct: attempt.total_correct,
        total_wrong: attempt.total_wrong,
        started_at: attempt.started_at,
        submitted_at: attempt.submitted_at,
        created_at: attempt.created_at,
        student: attempt.users,
        exam: attempt.exams,
      })),
      meta: {
        page,
        limit,
        total,
        total_pages: Math.ceil(total / limit) || 0,
      },
    };
  }

  async listStudentsInClass(
    authUser: AuthUser,
    classId: string,
    query: ListClassStudentsQueryDto,
  ) {
    const classRoom = await this.findAccessibleClass(authUser, classId);

    const page = query.page ?? 1;
    const limit = query.limit ?? 30;
    const skip = (page - 1) * limit;
    const search = query.search?.trim();

    const studentFilter: Prisma.usersWhereInput = {
      role: 'STUDENT',
      ...(search && {
        OR: [
          { full_name: { contains: search } },
          { email: { contains: search } },
          { phone: { contains: search } },
        ],
      }),
    };

    const where: Prisma.class_studentsWhereInput = {
      class_id: classRoom.id,
      users: studentFilter,
    };

    const [memberships, total] = await Promise.all([
      this.prisma.class_students.findMany({
        where,
        skip,
        take: limit,
        orderBy: { joined_at: 'desc' },
        include: {
          users: {
            select: {
              id: true,
              full_name: true,
              email: true,
              phone: true,
              avatar: true,
              is_active: true,
              email_verified: true,
              created_at: true,
            },
          },
        },
      }),
      this.prisma.class_students.count({ where }),
    ]);

    return {
      class: {
        id: classRoom.id,
        name: classRoom.name,
        code: classRoom.code,
        school_year: classRoom.school_year,
      },
      data: memberships.map((row) => ({
        joined_at: row.joined_at,
        student: row.users,
      })),
      meta: {
        page,
        limit,
        total,
        total_pages: Math.ceil(total / limit) || 0,
      },
    };
  }

  private async resolveTeacherId(
    authUser: AuthUser,
    teacherIdFromBody?: string,
  ): Promise<string> {
    if (authUser.role === 'ADMIN' && teacherIdFromBody) {
      const teacher = await this.prisma.users.findUnique({
        where: { id: teacherIdFromBody },
      });

      if (!teacher) {
        throw new BadRequestException('Không tìm thấy giáo viên');
      }

      if (teacher.role !== 'TEACHER' && teacher.role !== 'ADMIN') {
        throw new BadRequestException(
          'Chỉ có thể gán lớp cho tài khoản giáo viên hoặc admin',
        );
      }

      if (!teacher.email_verified || teacher.is_active === false) {
        throw new BadRequestException('Giáo viên được chọn chưa sẵn sàng');
      }

      return teacher.id;
    }

    if (teacherIdFromBody && teacherIdFromBody !== authUser.id) {
      throw new ForbiddenException(
        'Giáo viên chỉ có thể tạo lớp cho chính mình',
      );
    }

    return authUser.id;
  }

  private hasUpdateFields(data: UpdateClassDto): boolean {
    return (
      data.name !== undefined ||
      data.code !== undefined ||
      data.description !== undefined ||
      data.school_year !== undefined
    );
  }

  private mapClass(item: {
    id: string;
    name: string;
    code: string | null;
    description: string | null;
    school_year: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    teacher: { id: string; full_name: string; email: string };
    _count: { class_students: number };
  }) {
    return {
      id: item.id,
      name: item.name,
      code: item.code,
      description: item.description,
      school_year: item.school_year,
      student_count: item._count.class_students,
      teacher: item.teacher,
      created_at: item.created_at,
      updated_at: item.updated_at,
    };
  }

  private async findAccessibleClass(
    authUser: AuthUser,
    classId: string,
    action: 'xem' | 'sửa' | 'xóa' = 'xem',
  ) {
    const classRoom = await this.prisma.classes.findUnique({
      where: { id: classId },
    });

    if (!classRoom) {
      throw new NotFoundException('Không tìm thấy lớp học');
    }

    if (authUser.role !== 'ADMIN' && classRoom.teacher_id !== authUser.id) {
      const verb =
        action === 'sửa' ? 'sửa' : action === 'xóa' ? 'xóa' : 'xem';
      throw new ForbiddenException(`Bạn không có quyền ${verb} lớp học này`);
    }

    return classRoom;
  }
}
