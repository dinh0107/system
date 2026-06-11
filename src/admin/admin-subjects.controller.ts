import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateSubjectDto } from '../subjects/dto/create-subject.dto';
import { ListSubjectsQueryDto } from '../subjects/dto/list-subjects-query.dto';
import { UpdateSubjectDto } from '../subjects/dto/update-subject.dto';
import { SubjectsService } from '../subjects/subjects.service';

@ApiTags('Quản trị - Môn học')
@ApiBearerAuth('access-token')
@Controller('admin/subjects')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class AdminSubjectsController {
  constructor(private subjectsService: SubjectsService) {}

  @Get()
  @ApiOperation({ summary: 'Danh sách môn học' })
  @ApiOkResponse({ description: 'Danh sách có phân trang' })
  list(@Query() query: ListSubjectsQueryDto) {
    return this.subjectsService.list(query);
  }

  @Get(':subjectId')
  @ApiOperation({ summary: 'Chi tiết môn học' })
  @ApiParam({ name: 'subjectId', description: 'Mã môn học (UUID)' })
  @ApiOkResponse({ description: 'Chi tiết môn học' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy môn học' })
  getById(@Param('subjectId', ParseUUIDPipe) subjectId: string) {
    return this.subjectsService.getById(subjectId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Tạo môn học' })
  @ApiCreatedResponse({ description: 'Tạo thành công' })
  @ApiBadRequestResponse({ description: 'Slug đã tồn tại' })
  create(@Body() body: CreateSubjectDto) {
    return this.subjectsService.create(body);
  }

  @Patch(':subjectId')
  @ApiOperation({ summary: 'Cập nhật môn học' })
  @ApiParam({ name: 'subjectId', description: 'Mã môn học (UUID)' })
  @ApiOkResponse({ description: 'Cập nhật thành công' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy môn học' })
  @ApiBadRequestResponse({ description: 'Slug đã tồn tại' })
  update(
    @Param('subjectId', ParseUUIDPipe) subjectId: string,
    @Body() body: UpdateSubjectDto,
  ) {
    return this.subjectsService.update(subjectId, body);
  }

  @Delete(':subjectId')
  @ApiOperation({ summary: 'Xóa môn học' })
  @ApiParam({ name: 'subjectId', description: 'Mã môn học (UUID)' })
  @ApiOkResponse({ description: 'Xóa thành công' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy môn học' })
  @ApiBadRequestResponse({
    description: 'Môn học đang có đề thi hoặc câu hỏi',
  })
  remove(@Param('subjectId', ParseUUIDPipe) subjectId: string) {
    return this.subjectsService.remove(subjectId);
  }
}
