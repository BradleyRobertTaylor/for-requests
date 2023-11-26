import { IncomingHttpHeaders } from 'http';
import { Bin } from './models/Bin';

export type RequestInputData = {
  httpMethod: string;
  httpPath: string;
  requestData: {
    headers: IncomingHttpHeaders;
    body: Record<string, unknown>;
    query: Record<string, unknown>;
  };
};

export type RequestData = RequestInputData['requestData'];

export type BinNoID = Omit<Bin, 'id' | 'binsRequests'>;

export type Optional<T extends object, TParams extends keyof T> = Partial<
  Pick<T, TParams>
> &
  Omit<T, TParams>;
