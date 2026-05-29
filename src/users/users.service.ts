import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { Prisma } from '../generated/prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findById(id: string) {
    return this.prisma.users.findUnique({
      where: { id },
    });
  }

  findByEmail(email: string) {
    return this.prisma.users.findUnique({
      where: {
        email,
      },
    });
  }

  findByPhone(phone: string) {
    return this.prisma.users.findUnique({
      where: {
        phone,
      },
    });
  }

  create(data: Prisma.usersCreateInput) {
    return this.prisma.users.create({
      data,
    });
  }
}
