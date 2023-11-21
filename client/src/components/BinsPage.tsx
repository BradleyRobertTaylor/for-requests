import { TrashIcon } from '@heroicons/react/24/outline';

const requests = [
  {
    id: 1,
    time: '11:30',
    method: 'GET',
    path: '/jkdlafda/fdsafdjofjdkalfjdaskfjdkasljfkda;fjdsao;ficdafjdcalkcfjdafjafj',
  },
  { id: 2, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 3, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 4, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 5, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'GET', path: '/jkdlafda/fdsafdjo' },
  { id: 6, time: '11:30', method: 'LAST', path: '/jkdlafda/fdsafdjo' },
];

function BinsPage() {
  return (
    <main className="flex mt-4">
      <div className="w-1/3">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Type to search"
            className="block w-full bg-[#171212] rounded-full border-0 px-6 text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6"
            // className="w-full"
          />
          <button className="whitespace-nowrap bg-[#5D3163] hover:bg-[#46244A] px-4 py-1 text-neutral-300 text-sm font-medium rounded-full transition-colors">
            Clear All
          </button>
        </div>
        <div className="custom-height overflow-hidden overflow-y-scroll">
          <ul role="list" className="flex flex-col space-y-3">
            {requests.map(({ id, path, method, time }) => (
              <li
                key={id}
                className="flex gap-3 overflow-hidden text-neutral-300 bg-[#110D0D] px-4 py-4 shadow sm:rounded-md sm:px-6 hover:bg-[#3B3636] cursor-pointer"
              >
                <div className="w-1/8">{time}</div>
                <div className="w-1/8 text-[#538A42]">{method}</div>
                <div className="flex-1 overflow-ellipsis overflow-hidden">
                  {path}
                </div>
                <div>
                  <TrashIcon className="w-5 hover:text-red-400" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grow"></div>
    </main>
  );
}

export default BinsPage;
