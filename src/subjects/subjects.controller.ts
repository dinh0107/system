import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

import { ListSubjectsQueryDto } from './dto/list-subjects-query.dto';
import { SubjectsService } from './subjects.service';

@ApiTags('Giáo viên - Môn học')
@ApiBearerAuth('access-token')
@Controller('teacher/subjects')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('TEACHER', 'ADMIN')
export class SubjectsController {
  constructor(private subjectsService: SubjectsService) {}

  @Get()
  @ApiOperation({ summary: 'Danh sách môn học' })
  @ApiOkResponse({ description: 'Danh sách có phân trang' })
  @ApiUnauthorizedResponse({ description: 'Chưa đăng nhập' })
  @ApiForbiddenResponse({ description: 'Không phải giáo viên hoặc admin' })
  list(@Query() query: ListSubjectsQueryDto) {
    return this.subjectsService.list(query);
  }
}
