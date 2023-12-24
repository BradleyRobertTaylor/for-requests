import { TrashIcon } from '@heroicons/react/24/outline';
import { useDeleteEvent } from '../hooks/useDeleteEvent';
import { useSelectedEvent } from '../hooks/useSelectedEvent';
import { DeleteModal } from './ui/DeleteModal';
import { useState } from 'react';

interface DeleteButtonProps {
  binPath: string;
  publicId: string;
}

const DeleteButton = ({ binPath, publicId }: DeleteButtonProps) => {
  const { setSelectedEvent, selectedEvent } = useSelectedEvent();
  const { mutate: deleteEvent } = useDeleteEvent(binPath, publicId);
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deleteEvent();
    if (publicId === selectedEvent) {
      setSelectedEvent('');
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
