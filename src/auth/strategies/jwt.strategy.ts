import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UsersService } from '../../users/users.service';
import { AccessTokenPayload } from '../auth.tokens';

export type AuthUser = {
  id: string;
  email: string;
  role: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'dev-secret',
    });
  }

  async validate(payload: AccessTokenPayload): Promise<AuthUser> {
    const user = await this.usersService.findByEmail(payload.email);

    if (!user || user.is_active === false || !user.email_verified) {
      throw new UnauthorizedException('Phiên đăng nhập không hợp lệ');
    }

    return {
      id: user.id,
      email: user.email,
      role: user.role,
    };
  }
}
