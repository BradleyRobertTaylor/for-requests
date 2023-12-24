import { useGetEvents } from '../hooks/useGetEvents';
import { formatTimestamp } from '../utils/formatDateTime';
import DeleteButton from './DeleteButton';

interface EventListProps {
  binPath: string;
  setSelectedEvent: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

const EventList = ({ binPath, setSelectedEvent, search }: EventListProps) => {
  const { data: events, error } = useGetEvents(binPath);

  if (error) {
    return null;
  }

  return (
    <ul role="list" className="flex flex-col space-y-3">
      {events
        ?.filter(({ httpMethod, httpPath }) => {
          return (
            httpMethod.toLowerCase().includes(search) ||
            httpPath.toLowerCase().includes(search)
          );
        })
        .map(({ publicId, httpPath, httpMethod, receivedAt }) => (
          <li
            key={publicId}
            onClick={() => setSelectedEvent(publicId)}
            className="flex items-center gap-3 overflow-hidden text-neutral-800 dark:text-neutral-300 bg-neutral-100 dark:bg-[#110D0D] px-4 py-4 shadow sm:rounded-md sm:px-6 hover:bg-white dark:hover:bg-[#3B3636] cursor-pointer"
          >
            <div className="text-sm w-1/5">
              {formatTimestamp(receivedAt).map((dateTime, idx) => (
                <div key={idx}>{dateTime}</div>
              ))}
            </div>
            <div className="w-1/6 text-[#538A42]">{httpMethod}</div>
            <div className="flex-grow overflow-ellipsis overflow-hidden">
              {httpPath}
            </div>
            <DeleteButton binPath={binPath} publicId={publicId} />
          </li>
        ))}
    </ul>
  );
};

export default EventList;
