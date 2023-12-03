import axios from 'axios';
import { Bin } from '../types';

export const getBins = async () => {
  const { data } = await axios.get<Bin[]>('/api/bins');
  console.log(data);
  return data;
};
