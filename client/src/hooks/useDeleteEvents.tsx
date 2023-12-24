import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAllEvents } from '../services/binService';

export const useDeleteEvents = (binPath: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['events', binPath],
    mutationFn: () => deleteAllEvents(binPath),
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ['events', binPath],
        exact: true,
      });
    },
  });
};
