import { NextFunction, Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { HttpError } from '../models/HttpError';

export const validateBinPath = asyncHandler(
  async (req: Request, _res: Response, next: NextFunction) => {
    const binPath = req.params.binPath;

    if (binPath === undefined) {
      throw new HttpError('Bin path is required');
    }

    next();
  }
);
