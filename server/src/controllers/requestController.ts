import { Request, Response } from 'express';
import * as db from '../services';
import { Bin } from '../models/Bin';
import { parsePath } from '../../utils/helpers';
import { RequestDBData } from '../types';

export const createRequest = async (req: Request, res: Response) => {
  const binPath = req.params.binPath;

  if (!binPath) {
    return res.status(400).json({ message: 'Bin path is required.' });
  }

  let bin: Bin | null;
  try {
    bin = await db.getBin(binPath);

    if (!bin) {
      return res
        .status(400)
        .json({ message: `No bin with path ${binPath} found.` });
    }

    const { ip, headers, method, body, query } = req;
    let { path } = req;
    path = parsePath(path, binPath);

    const data: RequestDBData = {
      httpMethod: method,
      httpPath: path,
      requestData: {
        path,
        headers,
        method,
        body,
        query,
      },
    };

    const request = await db.createRequest(bin, data);
    res.status(200).json(request);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    }
  }
};
