import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hệ thống đang hoạt động bình thường';
  }
}
