import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { HomeLayout_74, HomePage_74 } from './pages';

import SupaGetBlog_74 from './pages/demo_74/SupaGetBlog_74';

import Mid1SupaBlog_74 from './pages/mid1_74/Mid1SupaBlog_74';
import Mid2NodeBlog_74 from './pages/mid1_74/Mid2NodeBlog_74';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, //5minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout_74 />,
    children: [
      {
        index: true,
        element: <HomePage_74 />,
      },
      {
        path: 'mid1Blog_74',
        element: <Mid1SupaBlog_74 />,
      },
      {
        path: 'mid2Blog_74',
        element: <Mid2NodeBlog_74 />,
      },
      {
        path: 'demoGetBlog_74',
        element: <SupaGetBlog_74 />,
      },
    ],
  },
]);

const App_74 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App_74;
