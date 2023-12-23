import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from './providers/reactQuery.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App.tsx';
import './index.css';
import { SelectedRequestProvider } from './providers/selectedRequest.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider>
        <SelectedRequestProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </SelectedRequestProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
