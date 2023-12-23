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
    `/api/bins/${selectedBin}`,
  );
  return data.requests;
};

export const deleteBin = async (binPath: string) => {
  const { data } = await axios.delete<{ message: string }>(
    `/api/bins/${binPath}`,
  );
  return data;
};

export const sendTestRequest = async (binPath: string) => {
  const { data } = await axios.post<{ message: string }>(
    `http://localhost:3000/api/${binPath}/test`,
    {
      test: 'This was a generated test request.',
      info: 'You can send your own requests to this endpoint.',
    },
  );
  return data;
};

export const deleteAllRequests = async (binPath: string) => {
  const { data } = await axios.delete<{ message: string }>(
    `/api/bins/${binPath}/requests`,
  );
  return data;
};

export const deleteRequest = async (binPath: string, publicId: string) => {
  const { data } = await axios.delete<{ message: string }>(
    `/api/bins/${binPath}/requests/${publicId}`,
  );
  return data;
};

export const fetchRequest = async (binPath: string, publicId: string) => {
  const { data } = await axios.get<HttpRequest>(
    `/api/bins/${binPath}/requests/${publicId}`,
  );
  return data;
};
