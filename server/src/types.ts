import { IncomingHttpHeaders } from 'http';

// Need to type query
export type RequestDBData = {
  httpMethod: string;
  httpPath: string;
  requestData: {
    path: string;
    headers: IncomingHttpHeaders;
    method: string;
    body: Record<string, string>;
    query: any;
  };
};
