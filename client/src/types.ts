export type Bin = {
  binPath: string;
  createdAt: string;
};

export type Event = {
  httpMethod: string;
  httpPath: string;
  publicId: string;
  receivedAt: string;
  eventData: {
    headers: Record<string, string>;
    body: Record<string, unknown>;
    query: Record<string, unknown>;
  };
};
