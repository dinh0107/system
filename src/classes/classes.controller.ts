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
  ApiForbiddenResponse,
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
import { AuthUser } from '../auth/strategies/jwt.strategy';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { ListClassAttemptsQueryDto } from './dto/list-class-attempts-query.dto';
import { ListClassStudentsQueryDto } from './dto/list-class-students-query.dto';
import { ListClassesQueryDto } from './dto/list-classes-query.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@ApiTags('Giáo viên - Lớp học')
@ApiBearerAuth('access-token')
@Controller('teacher/classes')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('TEACHER', 'ADMIN')
export class ClassesController {
  constructor(private classesService: ClassesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Tạo lớp học mới' })
  @ApiCreatedResponse({ description: 'Tạo lớp thành công' })
  @ApiBadRequestResponse({
    description: 'Dữ liệu không hợp lệ / mã lớp trùng trong lớp của giáo viên',
  })
  @ApiUnauthorizedResponse({ description: 'Chưa đăng nhập' })
  @ApiForbiddenResponse({ description: 'Không có quyền' })
  create(@CurrentUser() user: AuthUser, @Body() body: CreateClassDto) {
    return this.classesService.create(user, body);
  }

  @Get()
  @ApiOperation({ summary: 'Danh sách lớp của giáo viên' })
  @ApiOkResponse({ description: 'Danh sách có phân trang' })
  @ApiUnauthorizedResponse({ description: 'Chưa đăng nhập' })
  @ApiForbiddenResponse({ description: 'Không phải giáo viên hoặc admin' })
  list(
    @CurrentUser() user: AuthUser,
    @Query() query: ListClassesQueryDto,
  ) {
    return this.classesService.listForTeacher(user, query);
  }

  @Patch(':classId')
  @ApiOperation({ summary: 'Cập nhật lớp học' })
  @ApiParam({ name: 'classId', description: 'Mã lớp (UUID)' })
  @ApiOkResponse({ description: 'Cập nhật lớp thành công' })
  @ApiBadRequestResponse({
    description: 'Dữ liệu không hợp lệ / mã lớp trùng',
  })
  @ApiNotFoundResponse({ description: 'Không tìm thấy lớp' })
  @ApiForbiddenResponse({ description: 'Không có quyền sửa lớp' })
  update(
    @CurrentUser() user: AuthUser,
    @Param('classId', ParseUUIDPipe) classId: string,
    @Body() body: UpdateClassDto,
  ) {
    return this.classesService.update(user, classId, body);
  }

  @Delete(':classId')
  @ApiOperation({ summary: 'Xóa lớp học' })
  @ApiParam({ name: 'classId', description: 'Mã lớp (UUID)' })
  @ApiOkResponse({ description: 'Xóa lớp thành công' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy lớp' })
  @ApiForbiddenResponse({ description: 'Không có quyền xóa lớp' })
  remove(
    @CurrentUser() user: AuthUser,
    @Param('classId', ParseUUIDPipe) classId: string,
  ) {
    return this.classesService.remove(user, classId);
  }

  @Get(':classId/attempts')
  @ApiOperation({ summary: 'Danh sách các đợt làm bài của lớp' })
  @ApiParam({ name: 'classId', description: 'Mã lớp (UUID)' })
  @ApiOkResponse({ description: 'Danh sách đợt làm bài có phân trang' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy lớp' })
  @ApiForbiddenResponse({ description: 'Không có quyền xem lớp này' })
  listAttempts(
    @CurrentUser() user: AuthUser,
    @Param('classId', ParseUUIDPipe) classId: string,
    @Query() query: ListClassAttemptsQueryDto,
  ) {
    return this.classesService.listAttemptsInClass(user, classId, query);
  }

  @Get(':classId/students')
  @ApiOperation({ summary: 'Danh sách học sinh trong lớp' })
  @ApiParam({ name: 'classId', description: 'Mã lớp (UUID)' })
  @ApiOkResponse({ description: 'Danh sách học sinh có phân trang' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy lớp' })
  @ApiForbiddenResponse({ description: 'Không có quyền xem lớp này' })
  listStudents(
    @CurrentUser() user: AuthUser,
    @Param('classId', ParseUUIDPipe) classId: string,
    @Query() query: ListClassStudentsQueryDto,
  ) {
    return this.classesService.listStudentsInClass(user, classId, query);
  }
}
