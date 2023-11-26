import { PGDataSource } from '../db/data-source';
import { Bin } from '../models/Bin';
import { HttpRequest } from '../models/HttpRequest';
import { Optional, RequestInputData } from '../types';
import * as db from '../services';

export const createRequest = async (
  binPath: string,
  { httpPath, requestData, httpMethod }: RequestInputData,
) => {
  const bin = await db.getBin(binPath);
  let request: Optional<HttpRequest, 'id' | 'bin'> = new HttpRequest();
  request.bin = bin!;
  request.httpPath = httpPath;
  request.httpMethod = httpMethod;
  request.requestData = requestData;

  request = await PGDataSource.getRepository(HttpRequest).save(request);
  delete request.id;
  delete request.bin;
  return request;
};

export const getRequests = async (bin: Bin) => {
  let requests: Optional<HttpRequest, 'id'>[] =
    await PGDataSource.createQueryBuilder()
      .relation(Bin, 'binsRequests')
      .of(bin)
      .loadMany();

  requests = requests.map((request) => {
    delete request.id;
    return request;
  });

  return requests;
};
