import MainSectionCard from './ui/MainSectionCard';
import { useParams } from 'react-router-dom';
import RequestList from './RequestList';
import Header from './Header';
import EndpointHome from './EndpointHome';
import RequestDataDisplay from './RequestDataDisplay';
import { ClearAllRequests } from './ClearAllRequests';
import { useUpdateRequests } from '../hooks/useUpdateRequests';

const BinsPage = () => {
  const { binPath: activePath, requestId } = useParams();
  useUpdateRequests();

  return (
    <>
      <Header />
      <main className="flex flex-grow">
        <div className="mt-4 w-[400px]">
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Type to search"
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
            {activePath && <RequestList binPath={activePath} />}
          </div>
        </div>
        <div className="flex-1 h-[90dvh] overflow-hidden overflow-y-scroll">
          <MainSectionCard>
            {activePath ? (
              requestId ? (
                <RequestDataDisplay
                  requestId={requestId}
                  binPath={activePath}
                />
              ) : (
                <EndpointHome binPath={activePath} />
              )
            ) : null}
          </MainSectionCard>
        </div>
      </main>
    </>
  );
};

export default BinsPage;
