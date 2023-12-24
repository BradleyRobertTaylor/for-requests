import { PGDataSource } from '../db/data-source';
import { Bin } from '../models/Bin';
import { Event } from '../models/Event';

export const readBins = async () => {
  const bins = await PGDataSource.getRepository(Bin)
    .createQueryBuilder('bin')
    .select(['bin.binPath', 'bin.createdAt'])
    .getMany();
  return bins;
};

export const readBinWithEventsByPath = async (binPath: string) => {
  const bin = await PGDataSource.getRepository(Bin)
    .createQueryBuilder('bin')
    .leftJoinAndSelect('bin.events', 'events')
    .where('bin.binPath = :binPath', { binPath })
    .getOne();
  return bin;
};

export const deleteAllBinsEvents = async (binId: number) => {
  const repository = PGDataSource.getRepository(Event);
  const data = await repository.find({
    where: {
      bin: {
        id: binId,
      },
    },
  });
  repository.remove(data);
};

export const readBinByPath = async (binPath: string) => {
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

export const deleteBinByPath = async (binPath: string) => {
  const binRepository = PGDataSource.getRepository(Bin);
  let bin = await binRepository.findOneBy({ binPath });

  if (bin) {
    bin = await binRepository.remove(bin);
    return bin;
  }
};
