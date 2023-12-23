import { useGetRequest } from '../hooks/useGetRequest';
import { HttpRequest } from '../types';
import { formatTimestamp } from '../utils/formatDateTime';
import JSONData from './JSONData';

type RequestDataDisplayProps = {
  binPath: string;
  requestId: string;
};

const isEmptyJSON = (query: Record<string, unknown>) => {
  return Object.keys(query).length === 0;
};

const RequestData = ({
  requestData,
  httpPath,
  httpMethod,
  receivedAt,
}: HttpRequest) => {
  const { query, body, headers } = requestData;
  return (
    <>
      <div className="flex gap-4">
        <div>{httpMethod}</div>
        <div>{httpPath}</div>
        {formatTimestamp(receivedAt).map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
      <JSONData json={headers} rootLabel="Headers" />
      {!isEmptyJSON(query) && (
        <JSONData json={query} rootLabel="Query Parameters" />
      )}
      <JSONData json={body} rootLabel="Body" />
    </>
  );
};

const RequestDataDisplay = ({
  binPath,
  requestId,
}: RequestDataDisplayProps) => {
  const { data: request } = useGetRequest(binPath, requestId);
  return <div>{request && <RequestData {...request} />}</div>;
};

export default RequestDataDisplay;
