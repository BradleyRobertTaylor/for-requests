import MainSectionCard from './ui/MainSectionCard';
import { useParams } from 'react-router-dom';
import RequestList from './RequestList';
import Header from './Header';
import EndpointHome from './EndpointHome';
import { ClearAllRequests } from './ClearAllRequests';
import { useUpdateRequests } from '../hooks/useUpdateRequests';
import { useEffect, useState } from 'react';
import RequestDataDisplay from './RequestDataDisplay';
import { useSelectedRequest } from '../hooks/useSelectedRequest';

const BinsPage = () => {
  const [search, setSearch] = useState('');
  const { binPath: activePath } = useParams();
  const { selectedRequest, setSelectedRequest } = useSelectedRequest();
  useUpdateRequests();

  useEffect(() => {
    setSelectedRequest('');
    setSearch('');
  }, [activePath, setSelectedRequest]);

  return (
    <>
      <Header />
      <main className="flex flex-grow">
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
            {activePath ? (
              <ClearAllRequests binPath={activePath} />
            ) : (
              <button className="whitespace-nowrap bg-[#5D0066] hover:bg-[#750080] dark:bg-[#5D3163] dark:hover:bg-[#46244A] px-4 py-1 text-neutral-50 dark:text-neutral-300 text-sm font-medium rounded-full transition-colors">
                Clear All
              </button>
            )}
          </div>
          <div className="h-[80dvh] overflow-hidden overflow-y-auto">
            {activePath && (
              <RequestList
                search={search}
                setSelectedRequest={setSelectedRequest}
                binPath={activePath}
              />
            )}
          </div>
        </div>
        <div className="flex-1 h-[90dvh] overflow-hidden overflow-y-scroll">
          <MainSectionCard>
            {activePath ? (
              selectedRequest ? (
                <RequestDataDisplay
                  binPath={activePath}
                  requestId={selectedRequest}
                />
              ) : (
                <EndpointHome binPath={activePath} />
              )
            ) : (
              <h1>Select a bin</h1>
            )}
          </MainSectionCard>
        </div>
      </main>
    </>
  );
};

export default BinsPage;
