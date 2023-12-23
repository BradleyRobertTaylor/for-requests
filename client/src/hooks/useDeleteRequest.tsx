import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteRequest } from '../services/binService';

export const useDeleteRequest = (binPath: string, publicId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['requests', binPath],
    mutationFn: () => deleteRequest(binPath, publicId),
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ['requests', binPath],
        exact: true,
      });
    },
  });
};
