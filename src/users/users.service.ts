import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.users.findUnique({
      where: {
        email,
      },
    });
  }

  create(data: Prisma.usersCreateInput) {
    return this.prisma.users.create({
      data,
    });
  }
}
