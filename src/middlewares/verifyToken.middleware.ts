import type { Request, Response } from 'express';
import UTIL from '../utils';
import jwt from 'jsonwebtoken';

export default function verifyToken(request: Request, response: Response, next: () => void) {
  const token = request.headers.authorization || request.headers['Authorization'];
  console.log('token', token);
  if (token) {
    try {
      const result = jwt.verify(token as string, process.env.ACCESS_TOKEN_SECRET || 'invalid-secret');
      console.log('result - ', result);
      if (typeof result === 'object') {
        response.locals.user_id = result.user_id;
        next();
      } else {
        return response.status(403).json({ ...UTIL.ERRORS.BB_04, server_message: result });
      }
    } catch (error: any) {
      return response.status(403).json({ ...UTIL.ERRORS.BB_03, server_message: error.message });
    }
  } else {
    return response.status(401).json({ ...UTIL.ERRORS.BB_03, server_message: 'Invalid token format' });
  }
}
