import {
  BadRequestException,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
} from '@nestjs/common';

const MAX_IMAGE_SIZE_BYTES =
  Number(process.env.UPLOAD_MAX_SIZE_MB ?? 5) * 1024 * 1024;

const maxSizeValidator = new MaxFileSizeValidator({
  maxSize: MAX_IMAGE_SIZE_BYTES,
  message: `Kích thước ảnh tối đa ${process.env.UPLOAD_MAX_SIZE_MB ?? 5} MB`,
});

const fileTypeValidator = new FileTypeValidator({
  fileType: /^image\/(jpeg|png|gif|webp)$/,
});

export function validateOptionalImageFile(file?: Express.Multer.File): void {
  if (!file) {
    return;
  }

  if (!maxSizeValidator.isValid(file)) {
    throw new BadRequestException(maxSizeValidator.buildErrorMessage(file));
  }

  if (!fileTypeValidator.isValid(file)) {
    throw new BadRequestException(
      'Chỉ chấp nhận ảnh JPEG, PNG, GIF hoặc WebP',
    );
  }
}

export function pickAnyUploadFile(
  files?: Express.Multer.File[],
): Express.Multer.File | undefined {
  return files?.find((file) => file.size > 0);
}

export function pickProfileUploadFile(uploads?: {
  file?: Express.Multer.File[];
  avatar?: Express.Multer.File[];
  image?: Express.Multer.File[];
  photo?: Express.Multer.File[];
  avatarFile?: Express.Multer.File[];
}): Express.Multer.File | undefined {
  const candidates = [
    ...(uploads?.file ?? []),
    ...(uploads?.avatar ?? []),
    ...(uploads?.image ?? []),
    ...(uploads?.photo ?? []),
    ...(uploads?.avatarFile ?? []),
  ];

  return candidates.find((file) => file.size > 0);
}

export const imageUploadPipe = new ParseFilePipe({
  validators: [maxSizeValidator, fileTypeValidator],
});

export const optionalImageUploadPipe = new ParseFilePipe({
  fileIsRequired: false,
  validators: [maxSizeValidator, fileTypeValidator],
});
