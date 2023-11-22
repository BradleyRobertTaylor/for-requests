import { Request, Response } from 'express';
import * as db from '../services';

export const getAllBins = async (_: Request, res: Response) => {
  const bins = await db.getAllBins();
  res.json(bins);
};

export const createBin = async (_: Request, res: Response) => {
  const bin = await db.createBin();
  res.json(bin);
};

export const deleteBin = async (req: Request, res: Response) => {
  const binPath = req.params.binPath;

  if (!binPath) {
    return res.status(400).json({ message: 'Bin path is required.' });
  }

  await db.deleteBin(binPath);
  res.status(200).json({ message: 'Bin was successfully deleted.' });
};
