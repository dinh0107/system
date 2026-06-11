import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthService } from '../auth/auth.service';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { LoginDto } from '../auth/dto/login.dto';
import { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('Quản trị - Xác thực')
@Controller('admin/auth')
export class AdminAuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Đăng nhập quản trị viên' })
  @ApiOkResponse({ description: 'Đăng nhập thành công (chỉ tài khoản ADMIN)' })
  @ApiBadRequestResponse({ description: 'Email hoặc mật khẩu không đúng' })
  @ApiForbiddenResponse({ description: 'Tài khoản không có quyền quản trị' })
  login(@Body() body: LoginDto) {
    return this.authService.loginAdmin(body);
  }

  @Get('me')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Thông tin quản trị viên đang đăng nhập' })
  @ApiOkResponse({ description: 'Thông tin tài khoản' })
  @ApiUnauthorizedResponse({ description: 'Chưa đăng nhập' })
  @ApiForbiddenResponse({ description: 'Không phải quản trị viên' })
  me(@CurrentUser() user: AuthUser) {
    return this.authService.getMe(user);
  }
}
