import type { Request, Response } from 'express';
import UTIL from '../../utils';
import AuthService from '../services';

export async function logout(request: Request, response: Response) {
  try {
    const cookies = request.cookies;
    if (!cookies.jwt) {
      return response.sendStatus(204);
    }

    const refreshToken = cookies.jwt;
    const userFound = await AuthService.getUserByRefreshToken(refreshToken);
    if (!userFound) {
      response.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true, maxAge: 24 * 60 * 60 * 1000 });
      return response.sendStatus(204);
    }

    await AuthService.logout(refreshToken);
    response.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true, maxAge: 24 * 60 * 60 * 1000 });
    return response.sendStatus(204);
  } catch (error: any) {
    return response.status(500).json({ ...UTIL.ERRORS.BB_04, server_message: error.message });
  }
}
