import { TrashIcon } from '@heroicons/react/24/outline';
import { useGetRequests } from '../hooks/useGetRequests';
import { Link } from 'react-router-dom';

function RequestList({ binPath }: { binPath: string }) {
  const { data: requests } = useGetRequests(binPath);

  return (
    <ul role="list" className="flex flex-col space-y-3">
      {requests?.map(({ publicId, httpPath, httpMethod, receivedAt }) => (
        <Link key={publicId} to={`/bins/${binPath}/requests/${publicId}`}>
          <li className="flex items-center gap-3 overflow-hidden text-neutral-800 dark:text-neutral-300 bg-neutral-100 dark:bg-[#110D0D] px-4 py-4 shadow sm:rounded-md sm:px-6 hover:bg-white dark:hover:bg-[#3B3636] cursor-pointer">
            <div className="text-sm w-1/5">
              <div>11-26</div>
              <div>3:00 AM</div>
            </div>
            <div className="w-1/6 text-[#538A42]">{httpMethod}</div>
            <div className="flex-grow overflow-ellipsis overflow-hidden">
              {httpPath}
            </div>
            <div>
              <TrashIcon className="w-5 hover:text-red-400" />
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default RequestList;
