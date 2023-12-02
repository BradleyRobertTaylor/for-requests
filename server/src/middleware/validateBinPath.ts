import { NextFunction, Request, Response } from 'express';
import { asyncHandler } from '../../utils/asyncHandler';
import { HttpError } from '../models/HttpError';

export const validateBinPath = asyncHandler(
  async (req: Request, _res: Response, next: NextFunction) => {
    const binPath = req.params.binPath;

    if (binPath === undefined) {
      throw new HttpError('Bin path is required');
    }

    const uuidRegex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

    if (!uuidRegex.test(binPath)) {
      throw new HttpError(`Bin path ${binPath} is not a valid format`);
    }

    next();
  },
);
