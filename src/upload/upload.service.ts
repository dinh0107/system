import { BadRequestException, Injectable } from '@nestjs/common';

import { ImgbbService } from './imgbb.service';

const ALLOWED_MIME_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
]);

@Injectable()
export class UploadService {
  constructor(private imgbbService: ImgbbService) {}

  async uploadImage(file: Express.Multer.File) {
    if (!ALLOWED_MIME_TYPES.has(file.mimetype)) {
      throw new BadRequestException(
        'Chỉ chấp nhận ảnh JPEG, PNG, GIF hoặc WebP',
      );
    }

    const uploaded = await this.imgbbService.uploadImage(file);

    return {
      message: 'Upload ảnh thành công',
      data: {
        url: uploaded.url,
        display_url: uploaded.display_url,
        delete_url: uploaded.delete_url,
        id: uploaded.id,
        width: uploaded.width,
        height: uploaded.height,
        size: uploaded.size,
      },
    };
  }
}
