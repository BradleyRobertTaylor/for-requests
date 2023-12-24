import { Request, Response } from 'express';
import { parsePath } from '../utils/helpers';
import { EventInputData } from '../types';
import { asyncHandler } from '../utils/asyncHandler';
import { HttpError } from '../models/HttpError';
import { readBinByPath } from '../db/binDB';
import { createEvent } from '../db/eventDB';
import { pushEventToAllClients } from './sseController';

export const captureAllEvents = asyncHandler(
  async (req: Request, res: Response) => {
    const binPath = req.params.binPath!;

    const bin = await readBinByPath(binPath);

    if (!bin) {
      res.status(400);
      throw new HttpError(`No bin with path ${binPath} found.`);
    }

    const { ip, headers, method: httpMethod, body, query, path } = req;
    const httpPath = parsePath(path, binPath);

    const data: EventInputData = {
      httpMethod,
      httpPath,
      eventData: {
        headers,
        body,
        query,
      },
    };

    const request = await createEvent(bin, data);
    pushEventToAllClients({ binPath: bin.binPath });
    res.status(200).json({ message: 'OK.' });
  },
);
