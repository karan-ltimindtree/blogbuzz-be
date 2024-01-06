import type { Request, Response } from 'express';
import UTIL from '../../utils';
import { db } from '../../config/db.server';
import CommentsService from '../services';

export async function getCommentsByPost(request: Request, response: Response) {
  try {
    const id = request.params.post_id;
    const comments = await CommentsService.getCommentsByPost(id);
    return response.status(200).json({ data: comments });
  } catch (error: any) {
    return response.status(500).json({ ...UTIL.ERRORS.BB_04, server_message: error.message });
  }
}
