import { QueryClient, QueryClientProvider as QCP } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return <QCP client={queryClient}>{children}</QCP>;
};
