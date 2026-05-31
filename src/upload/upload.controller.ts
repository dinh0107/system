import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiServiceUnavailableResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { UploadService } from './upload.service';
import { imageUploadPipe } from './upload.validation';

@ApiTags('Upload ảnh')
@ApiBearerAuth('access-token')
@Controller('upload')
@UseGuards(JwtAuthGuard)
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary: 'Upload ảnh lên ImgBB',
    description:
      'Trả về URL ảnh — dùng url đó cho avatar (PATCH /auth/profile) hoặc image_url câu hỏi.',
  })
  @ApiBody({
    schema: {
      type: 'object',
      required: ['file'],
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'Ảnh JPEG, PNG, GIF hoặc WebP (tối đa 5 MB)',
        },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'File không hợp lệ / chưa cấu hình IMGBB_API_KEY',
  })
  @ApiUnauthorizedResponse({ description: 'Chưa đăng nhập' })
  @ApiServiceUnavailableResponse({ description: 'ImgBB không phản hồi' })
  uploadImage(@UploadedFile(imageUploadPipe) file: Express.Multer.File) {
    return this.uploadService.uploadImage(file);
  }
}
