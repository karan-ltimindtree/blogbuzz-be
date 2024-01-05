import { db } from '../../config/db.server';

export function updateRefreshToken(email: string, refreshToken: string) {
  return db.user.update({ where: { email }, data: { refresh_token: refreshToken } });
}
