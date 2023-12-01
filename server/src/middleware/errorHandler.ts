import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../types';

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction,
) => {
  const statusCode = res.statusCode || 500;
  res.status(statusCode);
  res.json({ error: err.message || 'An unknown error occurred!' });
};
