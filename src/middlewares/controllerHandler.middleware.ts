import type { Request, Response } from 'express';
import UTIL from '../utils';

export function controllerHandler(next: (request: Request, response: Response) => void) {
  return function (request: Request, response: Response) {
    const errors = UTIL.errorHandler(request, response);
    if (errors) return errors;

    return next(request, response);
  };
}
