import { useQuery } from '@tanstack/react-query';
import { fetchBinsRequests } from '../services/binService';

export const useGetRequests = (binPath: string) => {
  return useQuery({
    queryKey: ['requests', binPath],
    queryFn: () => fetchBinsRequests(binPath),
  });
};
