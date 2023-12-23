import { TrashIcon } from '@heroicons/react/24/outline';
import { useDeleteRequest } from '../hooks/useDeleteRequest';
import { useSelectedRequest } from '../hooks/useSelectedRequest';

interface DeleteButtonProps {
  binPath: string;
  publicId: string;
}

const DeleteButton = ({ binPath, publicId }: DeleteButtonProps) => {
  const { setSelectedRequest, selectedRequest } = useSelectedRequest();
  const { mutate: deleteRequest } = useDeleteRequest(binPath, publicId);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        deleteRequest();
        if (publicId === selectedRequest) {
          setSelectedRequest('');
        }
      }}
    >
      <TrashIcon className="w-5 hover:text-red-400" />
    </button>
  );
};

export default DeleteButton;
