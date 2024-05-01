import React from 'react';
import ReactDOM from 'react-dom/client';
import App_74 from './App_74.jsx';

import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer postion='top-center' autoClose={1500} />
    <App_74 />
  </React.StrictMode>
);
