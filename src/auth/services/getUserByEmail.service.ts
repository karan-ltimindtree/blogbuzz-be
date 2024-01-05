import { db } from '../../config/db.server';

export function getUserByEmail(email: string) {
  return db.user.findUnique({ where: { email } });
}
