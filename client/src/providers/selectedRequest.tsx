import { createContext, useState } from 'react';

export const SelectRequestContext = createContext<
  | {
      selectedRequest: string;
      setSelectedRequest: React.Dispatch<React.SetStateAction<string>>;
    }
  | undefined
>(undefined);

export const SelectedRequestProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedRequest, setSelectedRequest] = useState('');

  return (
    <SelectRequestContext.Provider
      value={{ selectedRequest, setSelectedRequest }}
    >
      {children}
    </SelectRequestContext.Provider>
  );
};
