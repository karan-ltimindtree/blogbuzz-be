import type { Request, Response } from 'express';
import { allowedOrigins } from '../config/cors.config';

export const credentials = (req: Request, res: Response, next: () => void) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  next();
};
