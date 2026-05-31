import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';

import { ImgbbModule } from './imgbb.module';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
  imports: [AuthModule, ImgbbModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
