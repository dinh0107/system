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
        subject: 'Mã xác minh OTP',
        html: `
          <div>
            <h2>Mã OTP của bạn</h2>
            <p><b>${otp}</b></p>
            <p>Hết hạn sau 5 phút</p>
          </div>
        `,
      });
    } catch {
      throw new ServiceUnavailableException(
        'Không gửi được email OTP. Kiểm tra cấu hình Gmail (App Password) trên server',
      );
    }
  }
}
