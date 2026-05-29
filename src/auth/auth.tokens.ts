import { createHash, randomBytes } from 'crypto';

import { JwtService } from '@nestjs/jwt';

import { users } from '../generated/prisma/client';

export const ACCESS_TOKEN_EXPIRES_IN =
  process.env.JWT_ACCESS_EXPIRES_IN ?? '15m';

export const REFRESH_TOKEN_TTL_MS = parseRefreshTtlMs(
  process.env.JWT_REFRESH_EXPIRES_IN ?? '7d',
);

function parseRefreshTtlMs(value: string): number {
  const match = /^(\d+)([dhms])$/i.exec(value.trim());
  if (!match) {
    return 7 * 24 * 60 * 60 * 1000;
  }
  const amount = Number(match[1]);
  const unit = match[2].toLowerCase();
  const multipliers: Record<string, number> = {
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
  };
  return amount * multipliers[unit];
}

export function hashRefreshToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}

export function generateRefreshTokenValue(): string {
  return randomBytes(32).toString('hex');
}

export type AccessTokenPayload = {
  sub: string;
  email: string;
  role: string;
};

export async function signAccessToken(
  jwtService: JwtService,
  user: Pick<users, 'id' | 'email' | 'role'>,
): Promise<string> {
  return jwtService.signAsync(
    {
      sub: user.id,
      email: user.email,
      role: user.role,
    } satisfies AccessTokenPayload,
    { expiresIn: ACCESS_TOKEN_EXPIRES_IN as `${number}${'s' | 'm' | 'h' | 'd'}` },
  );
}

export function accessTokenExpiresInSeconds(): number {
  const match = /^(\d+)([dhms])$/i.exec(ACCESS_TOKEN_EXPIRES_IN.trim());
  if (!match) {
    return 15 * 60;
  }
  const amount = Number(match[1]);
  const unit = match[2].toLowerCase();
  const multipliers: Record<string, number> = {
    s: 1,
    m: 60,
    h: 3600,
    d: 86400,
  };
  return amount * multipliers[unit];
}
