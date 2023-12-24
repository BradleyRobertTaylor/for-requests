import { Bin } from '../models/Bin';
import { Event } from '../models/Event';

export const parsePath = (path: string, binPath: string) => {
  const parsedPath = path.split(`/${binPath}`).join('');
  return parsedPath === '' ? '/' : parsedPath;
};

export const removeEventId = (events: Event[]) =>
  events.map(({ id, ...rest }) => rest);

export const removeBinId = (bin: Bin | null): Omit<Bin, 'id'> | undefined => {
  if (!bin) return;

  const { id, ...rest } = bin;
  return rest;
};
