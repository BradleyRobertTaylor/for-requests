import { useQuery } from '@tanstack/react-query';
import { fetchBins } from '../services/binService';

export const useFetchBins = () => {
  return useQuery({ queryKey: ['bins'], queryFn: fetchBins });
};
