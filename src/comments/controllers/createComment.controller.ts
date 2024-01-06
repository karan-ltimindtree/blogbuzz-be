import type { Request, Response } from 'express';
import UTIL from '../../utils';
import CommentService from '../services';
import { Comment } from '../types/Comment.types';

export async function createComment(request: Request, response: Response) {
  try {
    let commentPayload: Comment = {
      ...request.body,
      timestamp: new Date(),
      created_by: response.locals.user_id,
    };

    const commentCreated = await CommentService.createComment(commentPayload);

    if (commentCreated) {
      return response.status(201).json({ success: true, message: 'Comment created successfully.' });
    }

    return response
      .status(500)
      .json({ ...UTIL.ERRORS.BB_04, server_message: 'Cannot create DB entry', detailed_message: commentCreated });
  } catch (error: any) {
    console.log('error - ', error);
    return response.status(500).json({ ...UTIL.ERRORS.BB_04, server_message: error.message });
  }
}
