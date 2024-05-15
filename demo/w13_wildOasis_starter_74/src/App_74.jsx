import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';

import GlobalStyles from './styles/GlobalStyles';

import {
  Account_74,
  Bookings_74,
  Cabins_74,
  Dashboard_74,
  Login_74,
  PageNotFound_74,
  Settings_74,
  NewUsers_74,
} from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard_74 />,
      },
      {
        path: 'dashboard',
        element: <Dashboard_74 />,
      },
      {
        path: 'bookings',
        element: <Bookings_74 />,
      },
      {
        path: 'bookings/:bookingId',
        element: <Bookings_74 />,
      },
      {
        path: 'cabins',
        element: <Cabins_74 />,
      },
      {
        path: 'users',
        element: <NewUsers_74 />,
      },
      {
        path: 'settings',
        element: <Settings_74 />,
      },
      {
        path: 'account',
        element: <Account_74 />,
      },
    ],
  },
]);

const App_74 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          styles: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-70)',
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App_74;
