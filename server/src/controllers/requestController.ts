import { Request, Response } from 'express';
import * as db from '../services';
import { parsePath } from '../../utils/helpers';
import { RequestInputData } from '../types';

export const createRequest = async (req: Request, res: Response) => {
  const binPath = req.params.binPath;

  if (!binPath) {
    return res.status(400).json({ message: 'Bin path is required.' });
  }

  try {
    const bin = await db.getBin(binPath);

    if (!bin) {
      return res
        .status(400)
        .json({ message: `No bin with path ${binPath} found.` });
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

    const request = await db.createRequest(binPath, data);
    res.status(200).json(request);
  } catch (err: unknown) {
    res.status(400).json({ message: 'That route does not exist.' });
  }
};
