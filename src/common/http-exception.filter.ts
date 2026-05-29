import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

const ERROR_LABELS: Partial<Record<HttpStatus, string>> = {
  [HttpStatus.BAD_REQUEST]: 'Yêu cầu không hợp lệ',
  [HttpStatus.UNAUTHORIZED]: 'Chưa xác thực',
  [HttpStatus.FORBIDDEN]: 'Không có quyền truy cập',
  [HttpStatus.NOT_FOUND]: 'Không tìm thấy',
  [HttpStatus.CONFLICT]: 'Dữ liệu xung đột',
  [HttpStatus.SERVICE_UNAVAILABLE]: 'Dịch vụ tạm thời không khả dụng',
  [HttpStatus.INTERNAL_SERVER_ERROR]: 'Lỗi máy chủ',
};

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();
    const errorLabel =
      ERROR_LABELS[status as HttpStatus] ?? 'Đã xảy ra lỗi';

    if (typeof exceptionResponse === 'string') {
      response.status(status).json({
        statusCode: status,
        message: exceptionResponse,
        error: errorLabel,
      });
      return;
    }

    if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
      response.status(status).json({
        ...exceptionResponse,
        error: errorLabel,
      });
      return;
    }

    response.status(status).json({
      statusCode: status,
      message: 'Đã xảy ra lỗi',
      error: errorLabel,
    });
  }
}
