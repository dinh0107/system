import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MailModule } from './mail/mail.module';
import { ExamsModule } from './exams/exams.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ClassesModule } from './classes/classes.module';
import { QuestionsModule } from './questions/questions.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    MailModule,
    ExamsModule,
    SubjectsModule,
    ClassesModule,
    QuestionsModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
