import { NextFunction, Request, RequestHandler, Response } from 'express';
import { HttpError } from '../models/HttpError';

export const notFound: RequestHandler = (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(404);
  next(new HttpError('404 Not found.'));
};
