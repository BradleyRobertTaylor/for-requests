import { PGDataSource } from '../db/data-source';
import { Bin } from '../models/Bin';
import { HttpRequest } from '../models/HttpRequest';
import { RequestInputData } from '../types';

export const createRequest = async (
  bin: Bin,
  { httpPath, requestData, httpMethod }: RequestInputData,
) => {
  const request = new HttpRequest();
  request.bin = bin;
  request.httpPath = httpPath;
  request.httpMethod = httpMethod;
  request.requestData = JSON.stringify(requestData);

  return await PGDataSource.getRepository(HttpRequest).save(request);
};
