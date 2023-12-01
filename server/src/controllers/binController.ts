import { NextFunction, Request, Response } from 'express';
import * as db from '../services';

export const getAllBins = async (_: Request, res: Response) => {
  const bins = await db.getAllBins();
  res.json(bins);
};

export const getBin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const binPath = req.params.binPath;

  if (!binPath) {
    return res.status(400).json({ message: 'Bin path is required.' });
  }

  try {
    const bin = await db.getBinWithRequests(binPath);
    if (!bin) {
      return res
        .status(400)
        .json({ message: `No bin with path ${binPath} found.` });
    }
    const { id, ...rest } = bin;
    res.status(200).json(rest);
  } catch (err: unknown) {
    res.status(400);
    next(err);
  }
};

export const createBin = async (_: Request, res: Response) => {
  const bin = await db.createBin();
  res.status(200).json(bin);
};

export const deleteBin = async (req: Request, res: Response) => {
  const binPath = req.params.binPath;

  if (!binPath) {
    return res.status(400).json({ message: 'Bin path is required.' });
  }

  await db.deleteBin(binPath);
  res.status(200).json({ message: 'Bin was successfully deleted.' });
};

export const getRequests = async (req: Request, res: Response) => {
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

    const requests = await db.getRequests(bin);
    return res.status(200).json(requests);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    }
  }
};
