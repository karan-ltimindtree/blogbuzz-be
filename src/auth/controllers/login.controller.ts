import type { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import UTIL from '../../utils';
import { AuthLogin } from '../types/Auth.types';
import AuthService from '../services';
import jwt from 'jsonwebtoken';

export async function login(request: Request, response: Response) {
  try {
    let authPayload: AuthLogin = {
      ...request.body,
    };

    // get user by email
    const userFound = await AuthService.getUserByEmail(authPayload.email);
    if (!userFound || !(await bcrypt.compare(authPayload.password, userFound.password))) {
      return response.status(401).json({ ...UTIL.ERRORS.BB_01 });
    }

    // sign the token
    const accessToken = jwt.sign({ user_id: userFound.id }, process.env.ACCESS_TOKEN_SECRET || 'secret', {
      expiresIn: '10m', // TODO: change this value later
    });

    const refreshToken = jwt.sign({ user_id: userFound.id }, process.env.REFRESH_TOKEN_SECRET || 'secret', {
      expiresIn: '1d', // TODO: change this value later
    });

    // TODO: save refresh token in DB
    await AuthService.updateRefreshToken(authPayload.email, refreshToken);
    response.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    return response.status(200).json({
      success: true,
      message: 'Login Successful',
      accessToken,
      data: {
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
      },
    });
  } catch (error: any) {
    return response.status(500).json({ ...UTIL.ERRORS.BB_04, server_message: error.message });
  }
}
