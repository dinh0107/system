import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Prisma } from '../../generated/prisma';

import { AuthUser } from '../auth/strategies/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { ListAdminUsersQueryDto } from './dto/list-admin-users-query.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';

@Injectable()
export class AdminUsersService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async list(query: ListAdminUsersQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;
    const search = query.search?.trim();

    const where: Prisma.usersWhereInput = {
      ...(query.role && { role: query.role }),
      ...(query.is_active !== undefined && { is_active: query.is_active }),
      ...(search && {
        OR: [
          { full_name: { contains: search } },
          { email: { contains: search } },
          { phone: { contains: search } },
        ],
      }),
    };

    const [items, total] = await Promise.all([
      this.prisma.users.findMany({
        where,
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
        select: {
          id: true,
          full_name: true,
          email: true,
          phone: true,
          avatar: true,
          role: true,
          is_active: true,
          email_verified: true,
          created_at: true,
          updated_at: true,
        },
      }),
      this.prisma.users.count({ where }),
    ]);

    return {
      data: items,
      meta: {
        page,
        limit,
        total,
        total_pages: Math.ceil(total / limit) || 0,
      },
    };
  }

  async getById(id: string) {
    const user = await this.prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        full_name: true,
        email: true,
        phone: true,
        avatar: true,
        role: true,
        is_active: true,
        email_verified: true,
        created_at: true,
        updated_at: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Không tìm thấy người dùng');
    }

    return {
      message: 'Lấy thông tin người dùng thành công',
      data: user,
    };
  }

  async create(data: CreateAdminUserDto) {
    const email = data.email.trim().toLowerCase();
    const hashedPassword = await bcrypt.hash(data.password.trim(), 10);

    try {
      const user = await this.usersService.create({
        full_name: data.full_name.trim(),
        email,
        phone: data.phone?.trim() || null,
        password: hashedPassword,
        role: data.role,
        email_verified: true,
        is_active: true,
      });

      const { password: _, ...userWithoutPassword } = user;

      return {
        message: 'Tạo người dùng thành công',
        data: userWithoutPassword,
      };
    } catch (error) {
      throw this.toDuplicateAccountException(error);
    }
  }

  async update(authUser: AuthUser, id: string, data: UpdateAdminUserDto) {
    const existing = await this.usersService.findById(id);

    if (!existing) {
      throw new NotFoundException('Không tìm thấy người dùng');
    }

    if (
      authUser.id === id &&
      data.is_active === false
    ) {
      throw new ForbiddenException('Không thể tự khóa tài khoản quản trị');
    }

    const patch: Prisma.usersUpdateInput = {};

    if (data.full_name !== undefined) {
      patch.full_name = data.full_name.trim();
    }

    if (data.phone !== undefined) {
      patch.phone = data.phone?.trim() || null;
    }

    if (data.role !== undefined) {
      patch.role = data.role;
    }

    if (data.is_active !== undefined) {
      patch.is_active = data.is_active;
    }

    if (data.password !== undefined) {
      patch.password = await bcrypt.hash(data.password.trim(), 10);
    }

    try {
      const user = await this.usersService.update(id, patch);
      const { password: _, ...userWithoutPassword } = user;

      return {
        message: 'Cập nhật người dùng thành công',
        data: userWithoutPassword,
      };
    } catch (error) {
      throw this.toDuplicateAccountException(error);
    }
  }

  async deactivate(authUser: AuthUser, id: string) {
    return this.update(authUser, id, { is_active: false });
  }

  private toDuplicateAccountException(error: unknown): BadRequestException {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      const fields = Array.isArray(error.meta?.target)
        ? error.meta.target.join(',')
        : String(error.meta?.target ?? '');

      if (fields.includes('phone')) {
        return new BadRequestException('Số điện thoại đã được sử dụng');
      }

      return new BadRequestException('Email đã được sử dụng');
    }

    throw error;
  }
}
