import axios from 'axios';
import { Bin, HttpRequest } from '../types';

export const fetchBins = async () => {
  const { data } = await axios.get<Bin[]>('/api/bins');
  return data;
};

export const createBin = async () => {
  const { data } = await axios.post<Bin>('/api/bins');
  return data;
};

export const fetchBinsRequests = async (selectedBin: string) => {
  const { data } = await axios.get<{ requests: HttpRequest[] }>(
    `/api/bins/${selectedBin}`
  );
  return data.requests;
};

export const deleteBin = async (binPath: string) => {
  const { data } = await axios.delete<{ message: string }>(
    `/api/bins/${binPath}`
  );
  return data;
};
