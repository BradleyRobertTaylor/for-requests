import { PGDataSource } from '../db/data-source';
import { Bin } from '../models/Bin';
import { HttpRequest } from '../models/HttpRequest';
import { RequestInputData } from '../types';

export const createRequest = async (
  bin: Bin,
  { httpPath, requestData, httpMethod }: RequestInputData,
) => {
  let request = new HttpRequest();
  request.bin = bin;
  request.httpPath = httpPath;
  request.httpMethod = httpMethod;
  request.requestData = requestData;

  request = await PGDataSource.getRepository(HttpRequest).save(request);
  const { id, bin: _, ...data } = request;
  return data;
};

export const readRequestByPublicId = async (publicId: string) => {
  const requestRepository = PGDataSource.getRepository(HttpRequest);
  const request = await requestRepository.findOneBy({ publicId });

  return request;
};

export const readRequests = async (bin: Bin) => {
  const requests: HttpRequest[] = await PGDataSource.createQueryBuilder()
    .relation(Bin, 'requests')
    .of(bin)
    .loadMany();

  return requests;
};

export const deleteRequestByPublicId = async (publicId: string) => {
  const requestRepository = PGDataSource.getRepository(HttpRequest);
  let request = await requestRepository.findOneBy({ publicId });

  if (request) {
    request = await requestRepository.remove(request);
    return request;
  }
};
