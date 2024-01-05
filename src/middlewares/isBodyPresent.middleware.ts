import type { Request, Response } from 'express';
import UTIL from '../utils';

export function isBodyPresent(
  request: Request,
  response: Response,
  next: (request: Request, response: Response) => void,
) {
  if (!request.body) {
    return response.status(400).json({
      ...UTIL.ERRORS.BB_06,
      errors: [
        {
          msg: 'Missing POST request body',
          param: 'body',
          location: 'body',
        },
      ],
    });
  }
  next(request, response);
}
