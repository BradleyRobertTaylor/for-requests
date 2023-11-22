import { PGDataSource } from '../db/data-source';
import { Bin } from '../models/Bin';
import { HttpRequest } from '../models/HttpRequest';
import { RequestDBData } from '../types';

export const createRequest = async (
  bin: Bin,
  { httpPath, requestData, httpMethod }: RequestDBData,
) => {
  const request = new HttpRequest();
  request.bin = bin;
  request.httpPath = httpPath;
  request.httpMethod = httpMethod;
  request.requestData = JSON.stringify(requestData);

  return await PGDataSource.getRepository(HttpRequest).save(request);
};
