import { useQuery } from '@tanstack/react-query';
import { getBins } from '../services/binService';

export const useGetBins = () => {
  return useQuery({ queryKey: ['bins'], queryFn: getBins });
};
