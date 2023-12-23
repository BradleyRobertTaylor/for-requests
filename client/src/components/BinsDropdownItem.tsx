import { Menu } from '@headlessui/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { classNames } from '../utils/helpers';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useDeleteBin } from '../hooks/useDeleteBin';

interface BinsDropdownItemProps {
  binPath: string;
}

const BinsDropdownItem = ({ binPath }: BinsDropdownItemProps) => {
  const { binPath: activePath } = useParams();
  const { mutate: deleteBin } = useDeleteBin(binPath);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteBin();
    if (binPath === activePath) {
      navigate('/bins');
    }
  };

  return (
    <Menu.Item>
      {({ active }) => (
        <div
          className={classNames(
            active || binPath === activePath
              ? 'bg-white dark:bg-[#3B3636]'
              : 'text-neutral-800 dark:text-neutral-300',
            'flex gap-4 items-center justify-center px-4 py-2 text-sm transition-colors',
          )}
        >
          <Link to={`/bins/${binPath}`} className="w-[300px]">
            /{binPath}
          </Link>
          <button onClick={handleDelete}>
            <TrashIcon className="w-4 hover:text-red-400 transition-colors" />
          </button>
        </div>
      )}
    </Menu.Item>
  );
};

export default BinsDropdownItem;
