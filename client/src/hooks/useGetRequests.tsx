import { useQuery } from '@tanstack/react-query';
import { getBinsRequests } from '../services/binService';

export const useGetRequests = (binPath: string) => {
  return useQuery({
    queryKey: ['requests', binPath],
    queryFn: () => getBinsRequests(binPath),
  });
};
