import { Request, Response } from 'express';
import * as db from '../services';
import { asyncHandler } from '../../utils/asyncHandler';
import { HttpError } from '../models/HttpError';
import { removeBinId, removeRequestID } from '../../utils/helpers';

export const getAllBins = asyncHandler(async (_: Request, res: Response) => {
  const bins = await db.getAllBins();
  res.json(bins);
});

export const getBin = asyncHandler(async (req: Request, res: Response) => {
  const binPath = req.params.binPath!;

  const bin = removeBinId(await db.getBinWithRequests(binPath));
  if (!bin) {
    res.status(400);
    throw new HttpError(`No bin with path ${binPath} found.`);
  }

  res.status(200).json(bin);
});

export const createBin = asyncHandler(async (_: Request, res: Response) => {
  const bin = await db.createBin();
  res.status(200).json(bin);
});

export const deleteBin = asyncHandler(async (req: Request, res: Response) => {
  const binPath = req.params.binPath!;

  const bin = await db.deleteBin(binPath);
  if (!bin) {
    res.status(400);
    throw new HttpError(`No bin with path ${binPath} found.`);
  }

  res.status(200).json({ message: 'Bin was successfully deleted.' });
});

export const getRequests = asyncHandler(async (req: Request, res: Response) => {
  const binPath = req.params.binPath!;
  const bin = await db.getBin(binPath);

  if (!bin) {
    res.status(400);
    throw new HttpError(`No bin with path ${binPath} found.`);
  }

  const requests = removeRequestID(await db.getRequests(bin));
  res.status(200).json(requests);
});
