import { db } from '../../config/db.server';

export function getCommentsByPost(id: string) {
  return db.comment.findMany({
    where: { post_id: id },
    select: {
      id: true,
      content: true,
      post_id: true,
      timestamp: true,
      created_by: true,
      created_by_ref: {
        select: {
          name: true,
        },
      },
    },
  });
}
