import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  ValidateIf,
} from 'class-validator';

function pickFormString(
  obj: Record<string, unknown>,
  ...keys: string[]
): string | undefined {
  for (const key of keys) {
    const value = obj[key];
    if (value === undefined || value === null) {
      continue;
    }
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
  }
  return undefined;
}

export class UpdateProfileDto {
  @ApiPropertyOptional({ example: 'Dương Văn Định' })
  @IsOptional()
  @Transform(({ obj, value }) =>
    pickFormString(obj as Record<string, unknown>, 'full_name', 'fullName') ??
    (typeof value === 'string' ? value : undefined),
  )
  @IsString({ message: 'Họ và tên phải là chuỗi ký tự' })
  @MaxLength(255, { message: 'Họ và tên không được vượt quá 255 ký tự' })
  full_name?: string;

  @ApiPropertyOptional({ example: '0912345678' })
  @IsOptional()
  @Transform(({ obj, value }) =>
    pickFormString(
      obj as Record<string, unknown>,
      'phone',
      'phoneNumber',
    ) ?? (typeof value === 'string' ? value : undefined),
  )
  @IsString({ message: 'Số điện thoại phải là chuỗi ký tự' })
  @MaxLength(20, { message: 'Số điện thoại không được vượt quá 20 ký tự' })
  phone?: string;

  @ApiPropertyOptional({
    example: 'https://i.ibb.co/xxxxx/avatar.jpg',
    description:
      'URL avatar (text). Upload file qua field file/avatar/image/photo. Chuỗi rỗng = xóa avatar.',
  })
  @IsOptional()
  @Transform(({ obj, value }) =>
    pickFormString(
      obj as Record<string, unknown>,
      'avatar',
      'avatarUrl',
    ) ?? (typeof value === 'string' ? value : undefined),
  )
  @ValidateIf((_, value) => value !== undefined && value !== '')
  @IsUrl({}, { message: 'Ảnh đại diện phải là đường dẫn URL hợp lệ' })
  avatar?: string;
}
