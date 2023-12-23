import { TrashIcon } from '@heroicons/react/24/outline';
import { useDeleteRequest } from '../hooks/useDeleteRequest';
import { useSelectedRequest } from '../hooks/useSelectedRequest';
import { DeleteModal } from './ui/DeleteModal';
import { useState } from 'react';

interface DeleteButtonProps {
  binPath: string;
  publicId: string;
}

const DeleteButton = ({ binPath, publicId }: DeleteButtonProps) => {
  const { setSelectedRequest, selectedRequest } = useSelectedRequest();
  const { mutate: deleteRequest } = useDeleteRequest(binPath, publicId);
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deleteRequest();
    if (publicId === selectedRequest) {
      setSelectedRequest('');
    }
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <TrashIcon className="w-5 hover:text-red-400" />
      </button>
      <DeleteModal
        open={open}
        setOpen={setOpen}
        title="Delete event"
        message="Are you sure you want to delete this event?"
        onDelete={handleDelete}
      />
    </>
  );
};

export default DeleteButton;
