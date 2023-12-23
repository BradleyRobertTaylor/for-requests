import { useEffect, useState } from 'react';
import ClearAllRequests from './ClearAllRequests';
import RequestList from './RequestList';
import { useGetRequests } from '../hooks/useGetRequests';
import { Navigate } from 'react-router-dom';

interface EventColumnProps {
  activePath: string;
  setSelectedRequest: React.Dispatch<React.SetStateAction<string>>;
}

const EventColumn = ({ activePath, setSelectedRequest }: EventColumnProps) => {
  const [search, setSearch] = useState('');
  const { data: requests, error: invalidPathErr } = useGetRequests(activePath);

  useEffect(() => {
    setSelectedRequest('');
    setSearch('');
  }, [activePath, setSelectedRequest]);

  if (invalidPathErr) {
    return <Navigate to="/bins" replace />;
  }

  return (
    <div className="mt-4 w-[400px]">
      <div className="flex gap-2 mb-4">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Type to search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="block w-full bg-neutral-100 dark:bg-[#171212] rounded-full border-0 px-4 py-1.5 text-neutral-800 dark:text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-400 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-neutral-400 dark:focus:ring-neutral-600 sm:text-sm sm:leading-6"
        />
        {requests?.length !== 0 && <ClearAllRequests binPath={activePath} />}
      </div>
      <div className="h-[80dvh] overflow-hidden overflow-y-auto">
        <RequestList
          search={search}
          setSelectedRequest={setSelectedRequest}
          binPath={activePath}
        />
      </div>
    </div>
  );
};

export default EventColumn;
