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

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthUser } from '../auth/strategies/jwt.strategy';

import { AssignExamQuestionsDto } from './dto/assign-exam-questions.dto';
import { CreateExamDto } from './dto/create-exam.dto';
import { CreateExamQuestionItemDto } from './dto/create-exam-question-item.dto';
import { ExamsService } from './exams.service';
import { ListExamsQueryDto } from './dto/list-exams-query.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { UpdateExamQuestionDto } from './dto/update-exam-question.dto';

@ApiTags('Giáo viên - Đề trắc nghiệm')
@ApiBearerAuth('access-token')
@Controller('teacher/exams')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('TEACHER', 'ADMIN')
export class ExamsController {
  constructor(private examsService: ExamsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary:
      'Tạo đề trắc nghiệm hoàn chỉnh trong một lần (đề + câu hỏi + đáp án)',
  })
  @ApiCreatedResponse({ description: 'Tạo đề và câu hỏi thành công' })
  @ApiBadRequestResponse({ description: 'Dữ liệu không hợp lệ' })
  @ApiUnauthorizedResponse({ description: 'Chưa đăng nhập' })
  @ApiForbiddenResponse({ description: 'Không có quyền' })
  create(@CurrentUser() user: AuthUser, @Body() body: CreateExamDto) {
    return this.examsService.create(user, body);
  }

  @Get()
  @ApiOperation({ summary: 'Danh sách đề trắc nghiệm của giáo viên' })
  @ApiOkResponse({ description: 'Danh sách có phân trang' })
  @ApiUnauthorizedResponse({ description: 'Chưa đăng nhập' })
  @ApiForbiddenResponse({ description: 'Không phải giáo viên hoặc admin' })
  list(@CurrentUser() user: AuthUser, @Query() query: ListExamsQueryDto) {
    return this.examsService.listForTeacher(user, query);
  }

  @Patch(':examId')
  @ApiOperation({
    summary: 'Cập nhật đề trắc nghiệm (metadata và/hoặc nhiều câu hỏi)',
  })
  @ApiParam({ name: 'examId', description: 'Mã đề thi (UUID)' })
  @ApiOkResponse({ description: 'Cập nhật đề thi thành công' })
  @ApiBadRequestResponse({ description: 'Dữ liệu không hợp lệ' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy đề thi' })
  @ApiForbiddenResponse({ description: 'Không có quyền sửa đề' })
  update(
    @CurrentUser() user: AuthUser,
    @Param('examId', ParseUUIDPipe) examId: string,
    @Body() body: UpdateExamDto,
  ) {
    return this.examsService.update(user, examId, body);
  }

  @Post(':examId/questions/new')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Thêm câu hỏi mới vào đề thi' })
  @ApiParam({ name: 'examId', description: 'Mã đề thi (UUID)' })
  @ApiCreatedResponse({ description: 'Thêm câu hỏi thành công' })
  @ApiBadRequestResponse({ description: 'Dữ liệu không hợp lệ' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy đề thi' })
  @ApiForbiddenResponse({ description: 'Không có quyền sửa đề' })
  createQuestion(
    @CurrentUser() user: AuthUser,
    @Param('examId', ParseUUIDPipe) examId: string,
    @Body() body: CreateExamQuestionItemDto,
  ) {
    return this.examsService.createQuestionInExam(user, examId, body);
  }

  @Patch(':examId/questions/:questionId')
  @ApiOperation({ summary: 'Sửa một câu hỏi trong đề thi' })
  @ApiParam({ name: 'examId', description: 'Mã đề thi (UUID)' })
  @ApiParam({ name: 'questionId', description: 'Mã câu hỏi (UUID)' })
  @ApiOkResponse({ description: 'Cập nhật câu hỏi thành công' })
  @ApiBadRequestResponse({ description: 'Dữ liệu không hợp lệ' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy đề hoặc câu hỏi' })
  @ApiForbiddenResponse({ description: 'Không có quyền sửa đề' })
  updateQuestion(
    @CurrentUser() user: AuthUser,
    @Param('examId', ParseUUIDPipe) examId: string,
    @Param('questionId', ParseUUIDPipe) questionId: string,
    @Body() body: UpdateExamQuestionDto,
  ) {
    return this.examsService.updateQuestion(user, examId, questionId, body);
  }

  @Delete(':examId/questions/:questionId')
  @ApiOperation({ summary: 'Xóa câu hỏi khỏi đề thi' })
  @ApiParam({ name: 'examId', description: 'Mã đề thi (UUID)' })
  @ApiParam({ name: 'questionId', description: 'Mã câu hỏi (UUID)' })
  @ApiOkResponse({ description: 'Xóa câu hỏi thành công' })
  @ApiBadRequestResponse({ description: 'Không thể xóa câu hỏi cuối cùng' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy đề hoặc câu hỏi' })
  @ApiForbiddenResponse({ description: 'Không có quyền sửa đề' })
  removeQuestion(
    @CurrentUser() user: AuthUser,
    @Param('examId', ParseUUIDPipe) examId: string,
    @Param('questionId', ParseUUIDPipe) questionId: string,
  ) {
    return this.examsService.removeQuestionFromExam(user, examId, questionId);
  }

  @Post(':examId/questions')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Gán câu hỏi vào đề thi' })
  @ApiParam({ name: 'examId', description: 'Mã đề thi (UUID)' })
  @ApiCreatedResponse({ description: 'Gán câu hỏi thành công' })
  @ApiBadRequestResponse({
    description: 'Câu hỏi không hợp lệ / đã có trong đề / khác môn',
  })
  @ApiNotFoundResponse({ description: 'Không tìm thấy đề thi' })
  @ApiForbiddenResponse({ description: 'Không có quyền sửa đề' })
  assignQuestions(
    @CurrentUser() user: AuthUser,
    @Param('examId', ParseUUIDPipe) examId: string,
    @Body() body: AssignExamQuestionsDto,
  ) {
    return this.examsService.assignQuestions(user, examId, body);
  }
}
