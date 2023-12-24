import { useParams } from 'react-router-dom';

import { useUpdateEvents } from '../hooks/useUpdateEvents';
import { useSelectedEvent } from '../hooks/useSelectedEvent';

import MainSectionCard from './ui/MainSectionCard';
import Header from './Header';
import EndpointHome from './EndpointHome';
import EventDataDisplay from './EventDataDisplay';
import EventColumn from './EventColumn';

const BinsPage = () => {
  const { binPath: activePath } = useParams();
  const { selectedEvent, setSelectedEvent } = useSelectedEvent();
  useUpdateEvents();

  return (
    <>
      <Header />
      <main className="flex flex-grow">
        {activePath ? (
          <EventColumn
            activePath={activePath}
            setSelectedEvent={setSelectedEvent}
          />
        ) : (
          <div className="mt-4 w-[400px]">
            <div className="flex gap-2 mb-4">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                id="search"
                type="text"
                placeholder="Type to search"
                className="block w-full bg-neutral-100 dark:bg-[#171212] rounded-full border-0 px-4 py-1.5 text-neutral-800 dark:text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-400 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-neutral-400 dark:focus:ring-neutral-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        )}
        <div className="flex-1 h-[90dvh] overflow-hidden overflow-y-scroll">
          <MainSectionCard>
            {activePath ? (
              selectedEvent ? (
                <EventDataDisplay
                  binPath={activePath}
                  eventId={selectedEvent}
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
