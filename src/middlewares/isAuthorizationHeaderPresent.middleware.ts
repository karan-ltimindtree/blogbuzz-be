import type { Request, Response } from 'express';
import UTIL from '../utils';

export function isAuthorizationHeaderPresent(
  request: Request,
  response: Response,
  next: (request: Request, response: Response) => void,
) {
  if (!Object.prototype.hasOwnProperty.call(request.headers, 'authorization')) {
    return response.status(401).json({
      ...UTIL.ERRORS.BB_06,
      errors: [
        {
          msg: 'Missing JWT token',
          param: 'authorization',
          location: 'headers',
        },
      ],
    });
  }
  next(request, response);
}
