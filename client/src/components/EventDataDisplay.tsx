import { useGetEvent } from '../hooks/useGetEvent';
import { Event } from '../types';
import { formatTimestamp } from '../utils/formatDateTime';
import { JSONData } from './JSONData';

type EventDataDisplayProps = {
  binPath: string;
  eventId: string;
};

const isEmptyJSON = (query: Record<string, unknown>) => {
  return Object.keys(query).length === 0;
};

const EventData = ({ eventData, httpPath, httpMethod, receivedAt }: Event) => {
  const { query, body, headers } = eventData;
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

export function EventDataDisplay({ binPath, eventId }: EventDataDisplayProps) {
  const { data: event } = useGetEvent(binPath, eventId);
  return <div>{event && <EventData {...event} />}</div>;
}
