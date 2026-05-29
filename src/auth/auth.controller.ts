import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthUser } from './strategies/jwt.strategy';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Đăng ký — gửi OTP qua email' })
  @ApiCreatedResponse({ description: 'OTP đã gửi, trả về temp_user' })
  @ApiBadRequestResponse({ description: 'Email đã tồn tại' })
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('verify-otp')
  @ApiOperation({ summary: 'Xác minh OTP và tạo tài khoản' })
  @ApiCreatedResponse({ description: 'Tài khoản đã được kích hoạt' })
  @ApiBadRequestResponse({
    description: 'OTP sai / hết hạn — dùng resend-otp',
  })
  verifyOtp(@Body() body: VerifyOtpDto) {
    return this.authService.verifyOtp(body);
  }

  @Post('resend-otp')
  @ApiOperation({ summary: 'Gửi lại OTP khi hết hạn' })
  @ApiCreatedResponse({ description: 'OTP mới đã gửi' })
  @ApiBadRequestResponse({
    description: 'Email đã đăng ký hoặc OTP còn hiệu lực',
  })
  resendOtp(@Body() body: RegisterDto) {
    return this.authService.resendOtp(body);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Đăng nhập — nhận access_token + refresh_token',
  })
  @ApiOkResponse({
    description:
      'access_token (ngắn hạn), refresh_token (dài hạn), expires_in (giây)',
  })
  @ApiBadRequestResponse({
    description:
      'Email chưa đăng ký / chưa verify OTP / OTP hết hạn / mật khẩu sai',
  })
  @ApiForbiddenResponse({ description: 'Tài khoản đã bị khóa' })
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Post('refresh')
  @ApiOperation({
    summary: 'Làm mới access token bằng refresh token (rotate refresh)',
  })
  @ApiOkResponse({ description: 'Cặp token mới' })
  @ApiUnauthorizedResponse({ description: 'Refresh token không hợp lệ' })
  @ApiForbiddenResponse({ description: 'Tài khoản bị khóa' })
  refresh(@Body() body: RefreshTokenDto) {
    return this.authService.refresh(body);
  }

  @Post('logout')
  @ApiOperation({ summary: 'Thu hồi refresh token' })
  @ApiOkResponse({ description: 'Đăng xuất thành công' })
  logout(@Body() body: RefreshTokenDto) {
    return this.authService.logout(body);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Kiểm tra đã đăng nhập — lấy thông tin user hiện tại' })
  @ApiOkResponse({ description: 'Đã đăng nhập' })
  @ApiUnauthorizedResponse({ description: 'Chưa đăng nhập hoặc token hết hạn' })
  me(@CurrentUser() user: AuthUser) {
    return this.authService.getMe(user);
  }
}
