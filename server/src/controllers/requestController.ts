import { Request, Response } from 'express';
import * as PG from '../services/binService';
import { Bin } from '../models/Bin';

export const createRequest = async (req: Request, res: Response) => {
  const binPath = req.params.binPath;

  if (!binPath) {
    return res.status(400).json({ message: 'Bin path is required.' });
  }

  let bin: Bin | null;
  try {
    bin = await PG.getBin(binPath);

    if (!bin) {
      return res
        .status(400)
        .json({ message: `No bin with path ${binPath} found.` });
    }

    // Bin found so we can save the request data
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    }
  }

  res.status(200).json({ success: true });
};
