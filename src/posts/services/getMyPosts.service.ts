import { db } from '../../config/db.server';

export function getMyPosts(self: string) {
  return db.post.findMany({
    // don't return self created posts
    where: { created_by: self },
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
  });
}
