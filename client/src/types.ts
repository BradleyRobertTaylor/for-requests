export type Bin = {
  binPath: string;
  createdAt: string;
};

export type HttpRequest = {
  httpMethod: string;
  httpPath: string;
  publicId: string;
  receivedAt: string;
  requestData: {
    headers: Record<string, string>;
    body: Record<string, unknown>;
    query: Record<string, unknown>;
  };
};
