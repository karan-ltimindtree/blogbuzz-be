import { db } from '../../config/db.server';

export function getRecentPosts() {
  return db.post.findMany({
    select: {
      id: true,
      title: true,
      category: true,
      content: true,
      created_at: true,
      created_by: true,
      created_by_ref: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
    take: 3,
  });
}
