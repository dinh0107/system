import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

function normalizeDatabaseUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const sslmode = parsed.searchParams.get('sslmode');
    if (sslmode === 'require') {
      parsed.searchParams.set('sslmode', 'verify-full');
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL is not set');
    }

    super({
      adapter: new PrismaPg({
        connectionString: normalizeDatabaseUrl(connectionString),
      }),
    });
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
