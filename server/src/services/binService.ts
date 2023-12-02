import { PGDataSource } from '../db/data-source';
import { Bin } from '../models/Bin';

export const getAllBins = async () => {
  const bins = await PGDataSource.getRepository(Bin)
    .createQueryBuilder('bin')
    .select(['bin.binPath', 'bin.createdAt'])
    .getMany();
  return bins;
};

export const getBinWithRequests = async (binPath: string) => {
  const bin = await PGDataSource.getRepository(Bin)
    .createQueryBuilder('bin')
    .leftJoinAndSelect('bin.requests', 'http_request')
    .where('bin.binPath = :binPath', { binPath })
    .getOne();
  return bin;
};

export const getBin = async (binPath: string) => {
  const bin = await PGDataSource.getRepository(Bin)
    .createQueryBuilder('bin')
    .where('bin.binPath = :binPath', { binPath })
    .getOne();
  return bin;
};

export const createBin = async () => {
  let bin = new Bin();
  await PGDataSource.getRepository(Bin).save(bin);
  return bin;
};

export const deleteBin = async (binPath: string) => {
  const binRepository = PGDataSource.getRepository(Bin);
  let bin = await binRepository.findOneBy({ binPath });

  if (bin) {
    bin = await binRepository.remove(bin);
    return bin;
  }
};
