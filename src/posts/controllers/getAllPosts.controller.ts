import type { Request, Response } from 'express';
import UTIL from '../../utils';
import { db } from '../../config/db.server';
import PostService from '../services';

export async function getAllPosts(request: Request, response: Response) {
  try {
    const posts = await PostService.getAllPosts(response.locals.user_id);
    console.log(posts);
    return response.status(200).json({ data: posts });
  } catch (error: any) {
    return response.status(500).json({ ...UTIL.ERRORS.BB_04, server_message: error.message });
  }
}
