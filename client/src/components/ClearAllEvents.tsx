import { useState } from 'react';
import { useDeleteEvents } from '../hooks/useDeleteEvents';
import { DeleteModal } from './ui/DeleteModal';

const ClearAllEvents = ({ binPath }: { binPath: string }) => {
  const { mutate: deleteAllEvents } = useDeleteEvents(binPath);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="whitespace-nowrap bg-[#5D0066] hover:bg-[#750080] dark:bg-[#5D3163] dark:hover:bg-[#46244A] px-4 py-1 text-neutral-50 dark:text-neutral-300 text-sm font-medium rounded-full transition-colors"
      >
        Clear All
      </button>
      <DeleteModal
        onDelete={deleteAllEvents}
        setOpen={setOpen}
        open={open}
        title="Delete all events"
        message="Are you sure you want to delete all events?"
      />
    </>
  );
};

export default ClearAllEvents;
