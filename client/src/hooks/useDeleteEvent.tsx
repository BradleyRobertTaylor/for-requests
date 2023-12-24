import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteEvent } from '../services/binService';

export const useDeleteEvent = (binPath: string, publicId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['events', binPath],
    mutationFn: () => deleteEvent(binPath, publicId),
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ['events', binPath],
        exact: true,
      });
    },
  });
};
