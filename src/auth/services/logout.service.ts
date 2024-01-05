import { db } from '../../config/db.server';

export function logout(refreshToken: string) {
  return db.user.updateMany({ where: { refresh_token: refreshToken }, data: { refresh_token: '' } });
}
