import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Injectable()
export class MailService {
  private transporter: Transporter | null = null;

  private getTransporter(): Transporter {
    if (this.transporter) {
      return this.transporter;
    }

    const user = process.env.MAIL_USER?.trim();
    const pass = process.env.MAIL_PASS?.replace(/\s/g, '');

    if (!user || !pass) {
      throw new BadRequestException(
        'Chưa cấu hình MAIL_USER hoặc MAIL_PASS trên server',
      );
    }

    const smtpOptions: SMTPTransport.Options = {
      host: process.env.MAIL_HOST?.trim() || 'smtp.gmail.com',
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false,
      requireTLS: true,
      auth: { user, pass },
    };
    this.transporter = nodemailer.createTransport(smtpOptions);

    return this.transporter;
  }

  async sendOtp(email: string, otp: string): Promise<void> {
    const user = process.env.MAIL_USER?.trim();
    if (!user) {
      throw new BadRequestException('Chưa cấu hình MAIL_USER trên server');
    }

    try {
      await this.getTransporter().sendMail({
        from: user,
        to: email,
        subject: 'Mã xác minh đăng ký tài khoản',
        html: `
          <div>
            <h2>Mã xác minh của bạn</h2>
            <p>Mã OTP: <strong>${otp}</strong></p>
            <p>Mã có hiệu lực trong 5 phút. Không chia sẻ mã này với bất kỳ ai.</p>
          </div>
        `,
      });
    } catch {
      throw new ServiceUnavailableException(
        'Không gửi được email chứa mã OTP. Vui lòng kiểm tra cấu hình email trên máy chủ',
      );
    }
  }
}
