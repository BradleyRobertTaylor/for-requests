import { useQuery } from '@tanstack/react-query';
import { fetchEvent } from '../services/binService';

export const useGetEvent = (binPath: string, publicId: string) => {
  return useQuery({
    queryKey: ['events', binPath, publicId],
    queryFn: () => fetchEvent(binPath, publicId),
  });
};
