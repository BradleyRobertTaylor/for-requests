import { useQuery } from '@tanstack/react-query';
import { fetchRequest } from '../services/binService';

export const useGetRequest = (binPath: string, publicId: string) => {
  return useQuery({
    queryKey: ['requests', binPath, publicId],
    queryFn: () => fetchRequest(binPath, publicId),
  });
};
