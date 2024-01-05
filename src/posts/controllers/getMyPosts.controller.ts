import type { Request, Response } from 'express';
import UTIL from '../../utils';
import { db } from '../../config/db.server';
import PostService from '../services';

export async function getMyPosts(request: Request, response: Response) {
  try {
    const posts = await PostService.getMyPosts(response.locals.user_id);
    return response.status(200).json({ data: posts });
  } catch (error: any) {
    return response.status(500).json({ ...UTIL.ERRORS.BB_04, server_message: error.message });
  }
}
