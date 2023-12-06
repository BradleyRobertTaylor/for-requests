import { useGetRequests } from '../hooks/useGetRequests';
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
        .map(({ publicId, requestData, ...rest }) => {
          const { body, headers, query } = requestData;
          return (
            <div onClick={() => console.log(query)} key={publicId}>
              <JSONData json={headers} rootLabel="Headers" />
              {!isEmptyJSON(query) && (
                <JSONData json={query} rootLabel="Query Parameters" />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default RequestDataDisplay;
