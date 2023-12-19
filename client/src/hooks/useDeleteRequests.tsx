import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAllRequests } from '../services/binService';

export const useDeleteRequests = (binPath: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['requests', binPath],
    mutationFn: () => deleteAllRequests(binPath),
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ['requests', binPath],
        exact: true,
      });
    },
  });
};
