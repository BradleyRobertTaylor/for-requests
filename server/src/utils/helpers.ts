import { Bin } from '../models/Bin';
import { Event } from '../models/Event';

export function parsePath(path: string, binPath: string) {
  const parsedPath = path.split(`/${binPath}`).join('');
  return parsedPath === '' ? '/' : parsedPath;
}

export function removeEventId(events: Event[]) {
  return events.map(({ id, ...rest }) => rest);
}

export function removeBinId(bin: Bin | null): Omit<Bin, 'id'> | undefined {
  if (!bin) return;

  const { id, ...rest } = bin;
  return rest;
}
