import { useDeleteRequests } from '../hooks/useDeleteRequests';

export const ClearAllRequests = ({ binPath }: { binPath: string }) => {
  const { mutate: deleteAllRequests } = useDeleteRequests(binPath);

  return (
    <button
      onClick={() => deleteAllRequests()}
      className="whitespace-nowrap bg-[#5D0066] hover:bg-[#750080] dark:bg-[#5D3163] dark:hover:bg-[#46244A] px-4 py-1 text-neutral-50 dark:text-neutral-300 text-sm font-medium rounded-full transition-colors"
    >
      Clear All
    </button>
  );
};
