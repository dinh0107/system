import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

const FIELD_LABELS: Record<string, string> = {
  full_name: 'Họ và tên',
  email: 'Email',
  phone: 'Số điện thoại',
  password: 'Mật khẩu',
  otp: 'Mã OTP',
  refresh_token: 'Mã làm mới phiên đăng nhập',
  current_password: 'Mật khẩu hiện tại',
  new_password: 'Mật khẩu mới',
  avatar: 'Ảnh đại diện',
  role: 'Vai trò',
};

function fieldLabel(path: string): string {
  const key = path.split('.').pop() ?? path;
  return FIELD_LABELS[key] ?? key;
}

function translateConstraintMessage(message: string, path: string): string {
  if (/[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i.test(message)) {
    return message;
  }

  const label = fieldLabel(path);
  const lower = message.toLowerCase();

  if (lower.includes('should not exist')) {
    return `Trường "${label}" không được phép`;
  }
  if (lower.includes('must be an email')) {
    return 'Email không hợp lệ';
  }
  if (lower.includes('must be a string')) {
    return `${label} phải là chuỗi ký tự`;
  }
  if (lower.includes('must be longer than or equal to')) {
    const match = /equal to (\d+)/.exec(lower);
    const min = match?.[1] ?? '';
    return `${label} phải có ít nhất ${min} ký tự`;
  }
  if (lower.includes('must be shorter than or equal to')) {
    const match = /equal to (\d+)/.exec(lower);
    const max = match?.[1] ?? '';
    return `${label} không được vượt quá ${max} ký tự`;
  }
  if (lower.includes('must be equal to')) {
    return `${label} không đúng định dạng yêu cầu`;
  }
  if (lower.includes('must be a valid url') || lower.includes('must be an url')) {
    return 'Ảnh đại diện phải là đường dẫn URL hợp lệ';
  }
  if (lower.includes('must be one of the following values')) {
    return `${label} không hợp lệ`;
  }
  if (lower.includes('should not be empty') || lower.includes('must not be empty')) {
    return `${label} không được để trống`;
  }
  if (lower.includes('nested property') && lower.includes('must be either object or array')) {
    return 'Thông tin đăng ký tạm không hợp lệ';
  }

  return message;
}

function collectValidationMessages(
  errors: ValidationError[],
  parentPath = '',
): string[] {
  const messages: string[] = [];

  for (const error of errors) {
    const path = parentPath ? `${parentPath}.${error.property}` : error.property;

    if (error.constraints) {
      for (const msg of Object.values(error.constraints)) {
        messages.push(translateConstraintMessage(msg, path));
      }
    }

    if (error.children?.length) {
      messages.push(...collectValidationMessages(error.children, path));
    }
  }

  return messages;
}

export function validationExceptionFactory(errors: ValidationError[]) {
  const messages = collectValidationMessages(errors);

  return new BadRequestException(
    messages.length > 0 ? messages : ['Dữ liệu gửi lên không hợp lệ'],
  );
}
