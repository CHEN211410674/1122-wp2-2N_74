import React from 'react';
import ReactDOM from 'react-dom/client';
import App_74 from './App_74';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App_74 />
  </QueryClientProvider>
);
