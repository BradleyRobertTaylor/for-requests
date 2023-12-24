import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from './providers/reactQuery.tsx';

import App from './App.tsx';
import './index.css';
import { SelectedEventProvider } from './providers/selectedEvent.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider>
        <SelectedEventProvider>
          <App />
        </SelectedEventProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
