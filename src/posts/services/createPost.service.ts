import { db } from '../../config/db.server';
import { Post } from '../types/Post.type';

export function createPost(payload: Post) {
  return db.post.create({
    data: {
      title: payload.title,
      content: payload.content,
      category: payload.category,
      created_at: payload.created_at,
      created_by: payload.created_by,
    },
  });
}
