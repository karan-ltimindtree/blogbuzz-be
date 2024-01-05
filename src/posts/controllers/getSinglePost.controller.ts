import type { Request, Response } from 'express';
import UTIL from '../../utils';
import PostService from '../services';

export async function getSinglePost(request: Request, response: Response) {
  try {
    const id = request.params.id;
    const post = await PostService.getSinglePost(id);
    if (post) {
      return response.status(200).json({ data: post });
    }
    return response.status(200).json({ ...UTIL.ERRORS.BB_10, data: { id } });
  } catch (error: any) {
    return response.status(500).json({ ...UTIL.ERRORS.BB_04, server_message: 'Invalid id provided' });
  }
}
