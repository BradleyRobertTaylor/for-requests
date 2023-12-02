import { Request, Response } from 'express';
import * as db from '../services';
import { parsePath } from '../../utils/helpers';
import { RequestInputData } from '../types';
import { asyncHandler } from '../../utils/asyncHandler';
import { HttpError } from '../models/HttpError';

export const createRequest = asyncHandler(
  async (req: Request, res: Response) => {
    const binPath = req.params.binPath!;

    const bin = await db.getBin(binPath);

    if (!bin) {
      res.status(400);
      throw new HttpError(`No bin with path ${binPath} found.`);
    }

    const { ip, headers, method: httpMethod, body, query, path } = req;
    const httpPath = parsePath(path, binPath);

    const data: RequestInputData = {
      httpMethod,
      httpPath,
      requestData: {
        headers,
        body,
        query,
      },
    };

    const request = await db.createRequest(bin, data);
    res.status(200).json(request);
  },
);
