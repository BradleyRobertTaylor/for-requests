import { useContext } from 'react';
import { SelectRequestContext } from '../providers/selectedRequest';

export const useSelectedRequest = () => {
  const context = useContext(SelectRequestContext);

  if (!context) {
    throw new Error('Context used out of scope of provider.');
  }

  return context;
};
