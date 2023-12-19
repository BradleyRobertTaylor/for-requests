import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import {
  createBin,
  deleteAllBinsRequests,
  deleteBinByPath,
  readBinByPath,
  readBinWithRequestsByPath,
  readBins,
} from '../db/binDB';
import { HttpError } from '../models/HttpError';
import { removeBinId, removeRequestID } from '../utils/helpers';
import { readRequests } from '../db/requestDB';

export const getBins = asyncHandler(async (_req: Request, res: Response) => {
  const bins = await readBins();
  res.json(bins);
});

export const getBin = asyncHandler(async (req: Request, res: Response) => {
  const binPath = req.params.binPath!;

  const bin = removeBinId(await readBinWithRequestsByPath(binPath));
  if (!bin) {
    res.status(400);
    throw new HttpError(`No bin with path ${binPath} found.`);
  }

  res.status(200).json(bin);
});

export const postBin = asyncHandler(async (_req: Request, res: Response) => {
  const bin = removeBinId(await createBin());
  res.status(200).json(bin);
});

export const deleteBin = asyncHandler(async (req: Request, res: Response) => {
  const binPath = req.params.binPath!;

  const bin = await deleteBinByPath(binPath);
  if (!bin) {
    res.status(400);
    throw new HttpError(`No bin with path ${binPath} found.`);
  }

  res.status(200).json({ message: 'Bin was successfully deleted.' });
});

export const getRequests = asyncHandler(async (req: Request, res: Response) => {
  const binPath = req.params.binPath!;
  const bin = await readBinByPath(binPath);

  if (!bin) {
    res.status(400);
    throw new HttpError(`No bin with path ${binPath} found.`);
  }

  const requests = removeRequestID(await readRequests(bin));
  res.status(200).json(requests);
});

export const deleteRequests = asyncHandler(
  async (req: Request, res: Response) => {
    const binPath = req.params.binPath!;
    const bin = await readBinByPath(binPath);

    if (!bin) {
      res.status(400);
      throw new HttpError(`No bin with path ${binPath} found.`);
    }

    await deleteAllBinsRequests(bin.id);
    res.status(200).json({ message: 'Requests successfully deleted' });
  },
);
