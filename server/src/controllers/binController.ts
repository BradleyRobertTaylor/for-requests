import { Request, Response } from 'express';
import * as PG from '../services/binService';

export const getAllBins = async (_: Request, res: Response) => {
  const bins = await PG.getAllBins();
  res.json(bins);
};

export const createBin = async (_: Request, res: Response) => {
  const bin = await PG.createBin();
  res.json(bin);
};

export const deleteBin = async (req: Request, res: Response) => {
  const binPath = req.params.binPath;

  if (!binPath) {
    return res.status(400).json({ message: 'Bin path is required.' });
  }

  await PG.deleteBin(binPath);
  res.status(200).json({ message: 'Bin was successfully deleted.' });
};
