import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import {
  createBin,
  deleteAllBinsEvents,
  deleteBinByPath,
  readBinByPath,
  readBinWithEventsByPath,
  readBins,
} from '../db/binDB';
import { HttpError } from '../models/HttpError';
import { removeBinId, removeEventId } from '../utils/helpers';
import {
  deleteEventByPublicId,
  readEventByPublicId,
  readEvents,
} from '../db/eventDB';

export const getBins = asyncHandler(async (_req: Request, res: Response) => {
  const bins = await readBins();
  res.json(bins);
});

export const getBin = asyncHandler(async (req: Request, res: Response) => {
  const binPath = req.params.binPath!;

  const bin = removeBinId(await readBinWithEventsByPath(binPath));
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

export const getEvents = asyncHandler(async (req: Request, res: Response) => {
  const binPath = req.params.binPath!;
  const bin = await readBinByPath(binPath);

  if (!bin) {
    res.status(400);
    throw new HttpError(`No bin with path ${binPath} found.`);
  }

  const events = removeEventId(await readEvents(bin));
  res.status(200).json(events);
});

export const getEvent = asyncHandler(async (req: Request, res: Response) => {
  const publicId = req.params.eventId!;
  const event = await readEventByPublicId(publicId);

  if (!event) {
    res.status(400);
    throw new HttpError(`No event with id ${publicId} found.`);
  }

  res.status(200).json(event);
});

export const deleteEvent = asyncHandler(async (req: Request, res: Response) => {
  const publicId = req.params.eventId!;
  const event = await deleteEventByPublicId(publicId);

  if (!event) {
    res.status(400);
    throw new HttpError(`No event with id ${publicId} found.`);
  }

  res.status(200).json({ message: 'Event successfully deleted.' });
});

export const deleteEvents = asyncHandler(
  async (req: Request, res: Response) => {
    const binPath = req.params.binPath!;
    const bin = await readBinByPath(binPath);

    if (!bin) {
      res.status(400);
      throw new HttpError(`No bin with path ${binPath} found.`);
    }

    await deleteAllBinsEvents(bin.id);
    res.status(200).json({ message: 'Events successfully deleted' });
  },
);
