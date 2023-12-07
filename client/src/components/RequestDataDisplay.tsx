import { useGetRequests } from '../hooks/useGetRequests';
import { formatTimestamp } from '../utils/formatDateTime';
import JSONData from './JSONData';

type RequestDataDisplayProps = {
  binPath: string;
  requestId: string;
};

const isEmptyJSON = (query: Record<string, unknown>) => {
  return Object.keys(query).length === 0;
};

const RequestDataDisplay = ({
  binPath,
  requestId,
}: RequestDataDisplayProps) => {
  const { data: requests } = useGetRequests(binPath);
  return (
    <div>
      {requests
        ?.filter(({ publicId }) => publicId === requestId)
        .map(({ publicId, requestData, httpMethod, httpPath, receivedAt }) => {
          const { body, headers, query } = requestData;
          return (
            <div key={publicId}>
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
            </div>
          );
        })}
    </div>
  );
};

export default RequestDataDisplay;
