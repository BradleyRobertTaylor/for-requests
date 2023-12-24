import { useQuery } from '@tanstack/react-query';
import { fetchBinsEvents } from '../services/binService';

export const useGetEvents = (binPath: string) => {
  return useQuery({
    queryKey: ['events', binPath],
    queryFn: () => fetchBinsEvents(binPath),
    retry: false,
  });
};
