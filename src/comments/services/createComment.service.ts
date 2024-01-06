import { db } from '../../config/db.server';
import { Comment } from '../types/Comment.types';

export function createComment(payload: Comment) {
  return db.comment.create({
    data: {
      post_id: payload.post_id,
      content: payload.content,
      timestamp: payload.timestamp,
      created_by: payload.created_by,
    },
  });
}
