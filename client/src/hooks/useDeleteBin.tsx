import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBin } from '../services/binService';

export const useDeleteBin = (binPath: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['bins'],
    mutationFn: () => deleteBin(binPath),
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ['bins'] });
    },
  });
};
