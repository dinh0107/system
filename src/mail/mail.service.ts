// src/mail/mail.service.ts
import { Injectable } from '@nestjs/common';
import nodemailer, { Transporter } from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER as string,
        pass: process.env.MAIL_PASS as string,
      },
    }) as Transporter;
  }

  async sendOtp(email: string, otp: string): Promise<void> {
    await this.transporter.sendMail({
      from: process.env.MAIL_USER as string,
      to: email,
      subject: 'OTP Verification',
      html: `
        <div>
          <h2>Your OTP Code</h2>
          <p><b>${otp}</b></p>
          <p>Expires in 5 minutes</p>
        </div>
      `,
    });
  }
}