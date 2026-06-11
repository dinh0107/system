import { ApiPropertyOptional } from '@nestjs/swagger';
import { role_enum } from '../../../generated/prisma';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class ListAdminUsersQueryDto {
  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({ default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 20;

  @ApiPropertyOptional({ enum: role_enum })
  @IsOptional()
  @IsEnum(role_enum, { message: 'Vai trò không hợp lệ' })
  role?: role_enum;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  is_active?: boolean;

  @ApiPropertyOptional({ description: 'Tìm theo tên, email, SĐT' })
  @IsOptional()
  @IsString()
  search?: string;
}
