import type { Request, Response } from 'express';
import UTIL from '../../utils';
import AuthService from '../services';

export async function getUserDetails(request: Request, response: Response) {
  try {
    const id = response.locals.user_id;
    const user = await AuthService.getUserById(id);
    if (user) {
      return response.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    }
    return response.status(403).json({ message: 'User not found' });
  } catch (error: any) {
    return response.status(500).json({ ...UTIL.ERRORS.BB_04, server_message: error.message });
  }
}
