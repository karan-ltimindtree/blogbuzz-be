import { db } from '../../config/db.server';

export function getSinglePost(id: string) {
  return db.post.findUnique({ where: { id } });
}
