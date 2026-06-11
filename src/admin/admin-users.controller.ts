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

import { AdminUsersService } from './admin-users.service';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { ListAdminUsersQueryDto } from './dto/list-admin-users-query.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';

@ApiTags('Quản trị - Người dùng')
@ApiBearerAuth('access-token')
@Controller('admin/users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class AdminUsersController {
  constructor(private adminUsersService: AdminUsersService) {}

  @Get()
  @ApiOperation({ summary: 'Danh sách người dùng' })
  @ApiOkResponse({ description: 'Danh sách có phân trang và lọc' })
  list(@Query() query: ListAdminUsersQueryDto) {
    return this.adminUsersService.list(query);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Chi tiết người dùng' })
  @ApiParam({ name: 'userId', description: 'Mã người dùng (UUID)' })
  @ApiOkResponse({ description: 'Thông tin người dùng' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy người dùng' })
  getById(@Param('userId', ParseUUIDPipe) userId: string) {
    return this.adminUsersService.getById(userId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Tạo người dùng (giáo viên / học sinh / admin)' })
  @ApiCreatedResponse({ description: 'Tạo thành công' })
  @ApiBadRequestResponse({ description: 'Email hoặc SĐT đã tồn tại' })
  create(@Body() body: CreateAdminUserDto) {
    return this.adminUsersService.create(body);
  }

  @Patch(':userId')
  @ApiOperation({ summary: 'Cập nhật người dùng' })
  @ApiParam({ name: 'userId', description: 'Mã người dùng (UUID)' })
  @ApiOkResponse({ description: 'Cập nhật thành công' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy người dùng' })
  @ApiForbiddenResponse({ description: 'Không thể tự khóa tài khoản' })
  update(
    @CurrentUser() user: AuthUser,
    @Param('userId', ParseUUIDPipe) userId: string,
    @Body() body: UpdateAdminUserDto,
  ) {
    return this.adminUsersService.update(user, userId, body);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Khóa người dùng (đặt is_active = false)' })
  @ApiParam({ name: 'userId', description: 'Mã người dùng (UUID)' })
  @ApiOkResponse({ description: 'Khóa thành công' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy người dùng' })
  @ApiForbiddenResponse({ description: 'Không thể tự khóa tài khoản' })
  deactivate(
    @CurrentUser() user: AuthUser,
    @Param('userId', ParseUUIDPipe) userId: string,
  ) {
    return this.adminUsersService.deactivate(user, userId);
  }
}
