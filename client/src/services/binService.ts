import axios from 'axios';
import { Bin, HttpRequest } from '../types';

export const getBins = async () => {
  const { data } = await axios.get<Bin[]>('/api/bins');
  return data;
};

export const getBinsRequests = async (selectedBin: string) => {
  const { data } = await axios.get<{ requests: HttpRequest[] }>(
    `/api/bins/${selectedBin}`,
  );
  return data.requests;
};
