import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
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
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@ApiTags('Xác thực')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Đăng ký — gửi OTP qua email' })
  @ApiCreatedResponse({
    description: 'Đã tạo tài khoản chờ xác minh và gửi mã OTP',
  })
  @ApiBadRequestResponse({
    description:
      'Email/SĐT đã tồn tại, hoặc email đang chờ xác minh (dùng gửi lại OTP)',
  })
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('verify-otp')
  @ApiOperation({ summary: 'Xác minh OTP — chỉ cần email và mã OTP' })
  @ApiCreatedResponse({ description: 'Tài khoản đã được xác minh' })
  @ApiBadRequestResponse({
    description: 'Mã OTP sai hoặc đã hết hạn',
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
    description: 'Email chưa đăng ký / chưa xác minh email / mật khẩu sai',
  })
  @ApiForbiddenResponse({ description: 'Tài khoản đã bị khóa' })
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Post('refresh')
  @ApiOperation({
    summary: 'Làm mới phiên đăng nhập bằng mã làm mới',
  })
  @ApiOkResponse({ description: 'Đã cấp mã truy cập và mã làm mới mới' })
  @ApiUnauthorizedResponse({
    description: 'Mã làm mới phiên không hợp lệ hoặc đã hết hạn',
  })
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

  @Patch('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Cập nhật thông tin tài khoản (họ tên, SĐT, avatar)' })
  @ApiOkResponse({ description: 'Cập nhật thành công' })
  @ApiBadRequestResponse({ description: 'Dữ liệu không hợp lệ / SĐT trùng' })
  @ApiUnauthorizedResponse({ description: 'Chưa đăng nhập' })
  updateProfile(
    @CurrentUser() user: AuthUser,
    @Body() body: UpdateProfileDto,
  ) {
    return this.authService.updateProfile(user, body);
  }

  @Patch('change-password')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Đổi mật khẩu' })
  @ApiOkResponse({ description: 'Đổi mật khẩu thành công' })
  @ApiBadRequestResponse({ description: 'Mật khẩu hiện tại sai' })
  @ApiUnauthorizedResponse({ description: 'Chưa đăng nhập' })
  changePassword(
    @CurrentUser() user: AuthUser,
    @Body() body: ChangePasswordDto,
  ) {
    return this.authService.changePassword(user, body);
  }
}
