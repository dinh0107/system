import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { ExamsModule } from '../exams/exams.module';
import { SubjectsModule } from '../subjects/subjects.module';
import { UsersModule } from '../users/users.module';

import { AdminAuthController } from './admin-auth.controller';
import { AdminExamsController } from './admin-exams.controller';
import { AdminSubjectsController } from './admin-subjects.controller';
import { AdminUsersController } from './admin-users.controller';
import { AdminUsersService } from './admin-users.service';

@Module({
  imports: [AuthModule, UsersModule, SubjectsModule, ExamsModule],
  controllers: [
    AdminAuthController,
    AdminUsersController,
    AdminSubjectsController,
    AdminExamsController,
  ],
  providers: [AdminUsersService],
})
export class AdminModule {}
