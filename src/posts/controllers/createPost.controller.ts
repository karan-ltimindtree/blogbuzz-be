import type { Request, Response } from 'express';
import UTIL from '../../utils';
import { Post } from '../types/Post.type';
import PostService from '../services';
import AuthService from '../../auth/services';

export async function createPost(request: Request, response: Response) {
  try {
    let postPayload: Post = {
      ...request.body,
      created_at: new Date(),
      created_by: response.locals.user_id,
    };

    const postCreated = await PostService.createPost(postPayload);
    console.log('user_id - ', response.locals.user_id);

    if (postCreated) {
      return response.status(201).json({ success: true, message: 'Post created successfully.' });
    }

    return response
      .status(500)
      .json({ ...UTIL.ERRORS.BB_04, server_message: 'Cannot create DB entry', detailed_message: postCreated });
  } catch (error: any) {
    console.log('error - ', error);
    return response.status(500).json({ ...UTIL.ERRORS.BB_04, server_message: error.message });
  }
}
