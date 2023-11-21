import { PGDataSource } from '../db/data-source';
import { Bin } from '../models/Bin';

export const getAllBins = async () => {
  const bins = await PGDataSource.getRepository(Bin).find();
  return bins;
};

export const getBin = async (binPath: string) => {
  const bin = await PGDataSource.getRepository(Bin).findOneBy({ binPath });
  return bin;
};

export const createBin = async () => {
  const bin = new Bin();
  await PGDataSource.getRepository(Bin).save(bin);
  return bin;
};

export const deleteBin = async (binPath: string) => {
  const binRepository = PGDataSource.getRepository(Bin);
  const bin = await binRepository.findOneBy({ binPath });

  if (bin) {
    await binRepository.remove(bin);
  }
};
