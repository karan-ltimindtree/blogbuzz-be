import type { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { ERRORS } from './errors';

export function errorHandler(request: Request, response: Response) {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(400).json({ ...ERRORS.BB_03, errors: errors.array() });
  }
  return null;
}
