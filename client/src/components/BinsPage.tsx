import { TrashIcon } from '@heroicons/react/24/outline';
import EndpointHome from './EndpointHome';
import MainSectionCard from './ui/MainSectionCard';
import RequestData from './RequestData';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bin, HttpRequest } from '../types';
import { useSearchParams } from 'react-router-dom';

type BinsPageProps = {
  bins: Bin[];
  setBins?: React.Dispatch<React.SetStateAction<Bin[]>>;
};

function BinsPage({ bins, setBins }: BinsPageProps) {
  const [requests, setRequests] = useState<HttpRequest[]>([]);
  const [searchParams] = useSearchParams();
  const selectedBin = searchParams.get('bin');
  useEffect(() => {
    if (!selectedBin) return;
    const fetchRequests = async () => {
      const { data } = await axios.get<{ requests: HttpRequest[] }>(
        `/api/bins/${selectedBin}`,
      );
      setRequests(data.requests);
    };
    fetchRequests();
  }, [selectedBin]);

  return (
    <main className="flex flex-grow">
      <div className="mt-4 w-[400px]">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Type to search"
            className="block w-full bg-neutral-100 dark:bg-[#171212] rounded-full border-0 px-4 py-1.5 text-neutral-800 dark:text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-400 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-neutral-400 dark:focus:ring-neutral-600 sm:text-sm sm:leading-6"
          />
          <button className="whitespace-nowrap bg-[#5D3163] hover:bg-[#46244A] px-4 py-1 text-neutral-50 dark:text-neutral-300 text-sm font-medium rounded-full transition-colors">
            Clear All
          </button>
        </div>
        <div className="h-[80dvh] overflow-hidden overflow-y-auto">
          <ul role="list" className="flex flex-col space-y-3">
            {requests.map(({ httpPath, httpMethod, receivedAt }) => (
              <li
                key={httpPath}
                className="flex gap-3 overflow-hidden text-neutral-800 dark:text-neutral-300 bg-neutral-100 dark:bg-[#110D0D] px-4 py-4 shadow sm:rounded-md sm:px-6 hover:bg-white dark:hover:bg-[#3B3636] cursor-pointer"
              >
                <div className="w-1/8">{receivedAt}</div>
                <div className="w-1/8 text-[#538A42]">{httpMethod}</div>
                <div className="flex-1 overflow-ellipsis overflow-hidden">
                  {httpPath}
                </div>
                <div>
                  <TrashIcon className="w-5 hover:text-red-400" />
                </div>
              </li>
            ))}
            {requests.map(({ httpPath, httpMethod, receivedAt }) => (
              <li
                key={httpPath}
                className="flex gap-3 overflow-hidden text-neutral-800 dark:text-neutral-300 bg-neutral-100 dark:bg-[#110D0D] px-4 py-4 shadow sm:rounded-md sm:px-6 hover:bg-white dark:hover:bg-[#3B3636] cursor-pointer"
              >
                <div className="w-1/8">{receivedAt}</div>
                <div className="w-1/8 text-[#538A42]">{httpMethod}</div>
                <div className="flex-1 overflow-ellipsis overflow-hidden">
                  {httpPath}
                </div>
                <div>
                  <TrashIcon className="w-5 hover:text-red-400" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 overflow-hidden overflow-y-scroll">
        <MainSectionCard>
          {selectedBin ? <RequestData /> : <EndpointHome />}
        </MainSectionCard>
      </div>
    </main>
  );
}

export default BinsPage;
