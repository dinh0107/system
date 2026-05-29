import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthUser } from '../auth/strategies/jwt.strategy';

import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionsService } from './questions.service';

@ApiTags('Giáo viên - Câu hỏi')
@ApiBearerAuth('access-token')
@Controller('teacher/questions')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('TEACHER', 'ADMIN')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Tạo câu hỏi trắc nghiệm kèm đáp án' })
  @ApiCreatedResponse({ description: 'Tạo câu hỏi thành công' })
  @ApiBadRequestResponse({ description: 'Dữ liệu không hợp lệ' })
  @ApiUnauthorizedResponse({ description: 'Chưa đăng nhập' })
  @ApiForbiddenResponse({ description: 'Không có quyền' })
  create(@CurrentUser() user: AuthUser, @Body() body: CreateQuestionDto) {
    return this.questionsService.create(user, body);
  }
}
