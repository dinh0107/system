import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateAnswerDto {
  @ApiProperty({ example: 'Đáp án A' })
  @IsString({ message: 'Nội dung đáp án phải là chuỗi ký tự' })
  @IsNotEmpty({ message: 'Nội dung đáp án không được để trống' })
  @MaxLength(1000, { message: 'Nội dung đáp án tối đa 1000 ký tự' })
  content!: string;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean({ message: 'is_correct phải là true hoặc false' })
  is_correct?: boolean;
}
