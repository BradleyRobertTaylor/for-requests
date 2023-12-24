import axios from 'axios';
import { Bin, Event } from '../types';

export const fetchBins = async () => {
  const { data } = await axios.get<Bin[]>('/api/bins');
  return data;
};

export const createBin = async () => {
  const { data } = await axios.post<Bin>('/api/bins');
  return data;
};

export const fetchBinsEvents = async (selectedBin: string) => {
  const { data } = await axios.get<{ events: Event[] }>(
    `/api/bins/${selectedBin}`,
  );
  return data.events;
};

export const deleteBin = async (binPath: string) => {
  const { data } = await axios.delete<{ message: string }>(
    `/api/bins/${binPath}`,
  );
  return data;
};

export const sendTestEvent = async (binPath: string) => {
  const { data } = await axios.post<{ message: string }>(
    `http://localhost:3000/api/${binPath}/test`,
    {
      test: 'This was a generated test request.',
      info: 'You can send your own requests to this endpoint.',
    },
  );
  return data;
};

export const deleteAllEvents = async (binPath: string) => {
  const { data } = await axios.delete<{ message: string }>(
    `/api/bins/${binPath}/events`,
  );
  return data;
};

export const deleteEvent = async (binPath: string, publicId: string) => {
  const { data } = await axios.delete<{ message: string }>(
    `/api/bins/${binPath}/events/${publicId}`,
  );
  return data;
};

export const fetchEvent = async (binPath: string, publicId: string) => {
  const { data } = await axios.get<Event>(
    `/api/bins/${binPath}/events/${publicId}`,
  );
  return data;
};
