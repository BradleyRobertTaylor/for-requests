import { Bin } from '../types';

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const isPathBin = (bins: Bin[] | undefined, activePath: string) => {
  return bins?.map(({ binPath }) => binPath).includes(activePath);
};
