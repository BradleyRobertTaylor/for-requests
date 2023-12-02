import { useEffect, useState } from 'react';
import { Bin } from '../types';
import axios from 'axios';

export const useBins = () => {
  const [bins, setBins] = useState<Bin[]>([]);

  useEffect(() => {
    const fetchBins = async () => {
      const { data } = await axios.get<Bin[]>('/api/bins');
      console.log(data);
      setBins(data);
    };
    fetchBins();
  }, []);

  return [bins, setBins] as const;
};
