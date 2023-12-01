import { NextFunction, Request, RequestHandler, Response } from 'express';
// import { HttpError } from '../models/httpError';

export const notFound: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(404);
  next(new Error('404 Not found.'));
};
