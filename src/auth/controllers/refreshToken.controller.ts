import type { Request, Response } from 'express';
import UTIL from '../../utils';
import AuthService from '../services';
import jwt from 'jsonwebtoken';

export async function refreshToken(request: Request, response: Response) {
  try {
    const cookies = request.cookies;
    if (!cookies.jwt) {
      return response.sendStatus(401);
    }

    const refreshToken = cookies.jwt;
    const userFound = await AuthService.getUserByRefreshToken(refreshToken);
    if (!userFound) return response.sendStatus(401);

    // check jwt
    const result = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET || 'invalid-secret');
    if (!result) return response.sendStatus(401);

    const accessToken = jwt.sign({ user_id: userFound.id }, process.env.ACCESS_TOKEN_SECRET || 'secret', {
      expiresIn: '1m', // TODO: change this value later
    });

    return response.status(200).json({ accessToken });
  } catch (error: any) {
    return response.status(500).json({ ...UTIL.ERRORS.BB_04, server_message: error.message });
  }
}
