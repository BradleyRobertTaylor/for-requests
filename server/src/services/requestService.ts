import { PGDataSource } from '../db/data-source';
import { Bin } from '../models/Bin';
import { HttpRequest } from '../models/HttpRequest';
import { RequestInputData } from '../types';
import * as db from '../services';

export const createRequest = async (
  binPath: string,
  { httpPath, requestData, httpMethod }: RequestInputData,
) => {
  const currentBin = await db.getBin(binPath);
  if (!currentBin) {
    return;
  }

  let request = new HttpRequest();
  request.bin = currentBin;
  request.httpPath = httpPath;
  request.httpMethod = httpMethod;
  request.requestData = requestData;

  request = await PGDataSource.getRepository(HttpRequest).save(request);
  const { id, bin, ...data } = request;
  return data;
};

export const getRequests = async (bin: Bin) => {
  const requests: HttpRequest[] = await PGDataSource.createQueryBuilder()
    .relation(Bin, 'binsRequests')
    .of(bin)
    .loadMany();

  return requests.map(({ id, ...rest }) => rest);
};
