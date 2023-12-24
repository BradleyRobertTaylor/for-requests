import { IncomingHttpHeaders } from 'http';

export type EventInputData = {
  httpMethod: string;
  httpPath: string;
  eventData: {
    headers: IncomingHttpHeaders;
    body: Record<string, unknown>;
    query: Record<string, unknown>;
  };
};

export type ErrorResponse = {
  message: string;
};

export type EventData = EventInputData['eventData'];

export type Optional<T extends object, TParams extends keyof T> = Partial<
  Pick<T, TParams>
> &
  Omit<T, TParams>;
