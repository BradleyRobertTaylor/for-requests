import { createContext, useState } from 'react';

export const SelectEventContext = createContext<
  | {
      selectedEvent: string;
      setSelectedEvent: React.Dispatch<React.SetStateAction<string>>;
    }
  | undefined
>(undefined);

export const SelectedEventProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedEvent, setSelectedEvent] = useState('');

  return (
    <SelectEventContext.Provider value={{ selectedEvent, setSelectedEvent }}>
      {children}
    </SelectEventContext.Provider>
  );
};
