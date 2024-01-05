import { db } from '../../config/db.server';

export function getUserById(id: string) {
  return db.user.findUnique({ where: { id } });
}
