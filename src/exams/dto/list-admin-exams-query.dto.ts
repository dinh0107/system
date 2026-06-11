import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

import { ListExamsQueryDto } from './list-exams-query.dto';

export class ListAdminExamsQueryDto extends ListExamsQueryDto {
  @ApiPropertyOptional({ description: 'Lọc theo giáo viên tạo đề' })
  @IsOptional()
  @IsUUID('4', { message: 'Mã giáo viên không hợp lệ' })
  created_by_id?: string;
}
