import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ArchiveBoxIcon } from '@heroicons/react/24/outline';
import { classNames } from '../utils/helpers';
import { Bin } from '../types';
import BinsDropdownItem from './BinsDropdownItem';
import { useCreateBin } from '../hooks/useCreateBin';
import { useNavigate } from 'react-router-dom';

const BinsDropdown = ({ bins }: { bins?: Bin[] }) => {
  const { mutateAsync: createBin } = useCreateBin();
  const navigate = useNavigate();
  const handleCreateBin = async () => {
    const { binPath } = await createBin();
    navigate(`/bins/${binPath}`);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-[#171212] px-3 py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 transition-colors">
          Bins
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-neutral-800 dark:text-neutral-300"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-[380px] origin-top-right rounded-md bg-neutral-100 dark:bg-[#110D0D] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {bins?.map(({ binPath }) => (
              <BinsDropdownItem key={binPath} binPath={binPath} />
            ))}
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleCreateBin}
                  className={classNames(
                    active
                      ? 'bg-white dark:bg-[#3B3636]'
                      : 'text-neutral-800 dark:text-neutral-300',
                    'w-full flex gap-4 justify-center items-center px-4 py-2 text-sm transition-colors'
                  )}
                >
                  New Bin
                  <ArchiveBoxIcon className="w-4" />
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default BinsDropdown;
