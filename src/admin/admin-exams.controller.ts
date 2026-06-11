import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthUser } from '../auth/strategies/jwt.strategy';
import { UpdateExamDto } from '../exams/dto/update-exam.dto';
import { ExamsService } from '../exams/exams.service';
import { ListAdminExamsQueryDto } from '../exams/dto/list-admin-exams-query.dto';

@ApiTags('Quản trị - Đề thi')
@ApiBearerAuth('access-token')
@Controller('admin/exams')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class AdminExamsController {
  constructor(private examsService: ExamsService) {}

  @Get()
  @ApiOperation({ summary: 'Danh sách tất cả đề thi' })
  @ApiOkResponse({ description: 'Danh sách có phân trang và lọc theo giáo viên' })
  list(@Query() query: ListAdminExamsQueryDto) {
    return this.examsService.listForAdmin(query);
  }

  @Get(':examId')
  @ApiOperation({ summary: 'Chi tiết đề thi' })
  @ApiParam({ name: 'examId', description: 'Mã đề thi (UUID)' })
  @ApiOkResponse({ description: 'Chi tiết đề thi' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy đề thi' })
  getById(
    @CurrentUser() user: AuthUser,
    @Param('examId', ParseUUIDPipe) examId: string,
  ) {
    return this.examsService.getById(user, examId);
  }

  @Patch(':examId')
  @ApiOperation({ summary: 'Cập nhật đề thi' })
  @ApiParam({ name: 'examId', description: 'Mã đề thi (UUID)' })
  @ApiOkResponse({ description: 'Cập nhật thành công' })
  @ApiBadRequestResponse({ description: 'Dữ liệu không hợp lệ' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy đề thi' })
  update(
    @CurrentUser() user: AuthUser,
    @Param('examId', ParseUUIDPipe) examId: string,
    @Body() body: UpdateExamDto,
  ) {
    return this.examsService.update(user, examId, body);
  }

  @Delete(':examId')
  @ApiOperation({ summary: 'Xóa đề thi' })
  @ApiParam({ name: 'examId', description: 'Mã đề thi (UUID)' })
  @ApiOkResponse({ description: 'Xóa thành công' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy đề thi' })
  remove(
    @CurrentUser() user: AuthUser,
    @Param('examId', ParseUUIDPipe) examId: string,
  ) {
    return this.examsService.removeExam(user, examId);
  }
}
