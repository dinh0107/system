import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';

export type ImgbbUploadResult = {
  id: string;
  url: string;
  display_url: string;
  delete_url: string | null;
  width: number;
  height: number;
  size: number;
};

type ImgbbApiResponse = {
  success?: boolean;
  status?: number;
  data?: {
    id: string;
    title: string;
    url: string;
    display_url: string;
    delete_url: string | null;
    size: number;
    width: number;
    height: number;
  };
  error?: {
    message?: string;
    code?: number;
  };
};

@Injectable()
export class ImgbbService {
  private getApiKey(): string {
    const key = process.env.IMGBB_API_KEY?.trim();

    if (!key) {
      throw new BadRequestException(
        'Chưa cấu hình IMGBB_API_KEY trên server. Lấy key tại https://api.imgbb.com/',
      );
    }

    return key;
  }

  async uploadImage(file: Express.Multer.File): Promise<ImgbbUploadResult> {
    const apiKey = this.getApiKey();
    const url = new URL('https://api.imgbb.com/1/upload');
    url.searchParams.set('key', apiKey);

    const expiration = process.env.IMGBB_EXPIRATION?.trim();
    if (expiration) {
      url.searchParams.set('expiration', expiration);
    }

    const formData = new FormData();
    formData.append('image', file.buffer.toString('base64'));
    if (file.originalname) {
      formData.append('name', file.originalname);
    }

    let response: Response;

    try {
      response = await fetch(url.toString(), {
        method: 'POST',
        body: formData,
      });
    } catch {
      throw new ServiceUnavailableException(
        'Không kết nối được ImgBB. Vui lòng thử lại sau',
      );
    }

    let payload: ImgbbApiResponse;

    try {
      payload = (await response.json()) as ImgbbApiResponse;
    } catch {
      throw new ServiceUnavailableException(
        'ImgBB trả về phản hồi không hợp lệ',
      );
    }

    if (!payload.success || !payload.data?.url) {
      throw new BadRequestException(
        payload.error?.message ?? 'Không upload được ảnh lên ImgBB',
      );
    }

    return {
      id: payload.data.id,
      url: payload.data.url,
      display_url: payload.data.display_url,
      delete_url: payload.data.delete_url,
      width: payload.data.width,
      height: payload.data.height,
      size: payload.data.size,
    };
  }
}
