import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  email_otps: any;
  async onModuleInit() {
    await this.$connect();
  }
}
