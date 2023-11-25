import { IncomingHttpHeaders } from 'http';

export type RequestInputData = {
  httpMethod: string;
  httpPath: string;
  requestData: {
    path: string;
    headers: IncomingHttpHeaders;
    method: string;
    body: Record<string, unknown>;
    query: Record<string, unknown>;
  };
};
