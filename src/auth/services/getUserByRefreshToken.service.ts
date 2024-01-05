import { db } from '../../config/db.server';

export function getUserByRefreshToken(refreshToken: string) {
  return db.user.findFirst({ where: { refresh_token: refreshToken } });
}
