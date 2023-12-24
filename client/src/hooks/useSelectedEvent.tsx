import { useContext } from 'react';
import { SelectEventContext } from '../providers/selectedEvent';

export const useSelectedEvent = () => {
  const context = useContext(SelectEventContext);

  if (!context) {
    throw new Error('Context used out of scope of provider.');
  }

  return context;
};
