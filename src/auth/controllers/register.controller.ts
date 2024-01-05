import type { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import UTIL from '../../utils';
import { AuthRegister } from '../types/Auth.types';
import AuthService from '../services';

const SALT_LENGTH = 12;

export async function register(request: Request, response: Response) {
  try {
    let authPayload: AuthRegister = {
      ...request.body,
    };

    // check if user with same email already present
    const userFound = await AuthService.getUserByEmail(authPayload.email);
    if (userFound) {
      return response.status(200).json({
        ...UTIL.ERRORS.BB_09,
        data: {
          email: authPayload.email,
        },
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(authPayload.password, SALT_LENGTH);
    authPayload = { ...authPayload, password: hashedPassword };

    // create user
    const userCreated = await AuthService.register(authPayload);
    if (userCreated) {
      return response.status(201).json({ success: true, message: 'User registered successfully.' });
    }

    return response
      .status(500)
      .json({ ...UTIL.ERRORS.BB_04, server_message: 'Cannot create DB entry', detailed_message: userCreated });
  } catch (error: any) {
    return response.status(500).json({ ...UTIL.ERRORS.BB_04, server_message: error.message });
  }
}
