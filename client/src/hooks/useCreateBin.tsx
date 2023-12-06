import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBin } from '../services/binService';

export const useCreateBin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['bins'],
    mutationFn: createBin,
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ['bins'] });
    },
  });
};
