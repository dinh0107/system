import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

function assertMysqlDatabaseUrl(): string {
  const url = process.env.DATABASE_URL?.trim();

  if (!url) {
    throw new Error(
      'Chưa cấu hình DATABASE_URL trên server (Render → Environment)',
    );
  }

  if (!url.startsWith('mysql://')) {
    throw new Error(
      'DATABASE_URL phải bắt đầu bằng mysql:// (schema Prisma đang dùng MySQL). ' +
        'Trên Render, đừng dùng postgresql:// (Neon). Dùng MySQL cloud hoặc Railway/Aiven MySQL.',
    );
  }

  return url;
}

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    assertMysqlDatabaseUrl();
    super();
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
