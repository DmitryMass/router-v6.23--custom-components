import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter, defer } from 'react-router-dom';
import RootLayout from '../components/layouts/RootLayout';
import PageError from '../components/ui/PageError';
import AuthPage from '../pages/auth/AuthPage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import TasksPage from '../pages/tasks/TasksPage';
import { DashboardLoadedData } from '../types/requestTypes';
import { PATH } from './path';
import { fakeRequest } from './fakeRequest';

export const queryClient = new QueryClient();
export const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
        errorElement: <PageError />,
        loader: async () =>
          defer({
            dashboardLoadedData: (async (): Promise<DashboardLoadedData[]> => {
              return (
                queryClient.getQueryData(['fakeQueryKey']) ??
                (await queryClient.fetchQuery({
                  queryKey: ['fakeQueryKey'],
                  queryFn: () => fakeRequest(),
                }))
              );
            })(),
          }),
      },
      { path: PATH.tasks, element: <TasksPage /> },
      { path: PATH.members, element: <TasksPage /> },
    ],
  },
  { path: PATH.authorization, element: <AuthPage /> },
  //   {
  //     path: '/',
  //     element: <RootLayout />,
  //     errorElement: <ErrorComponent />,
  //     children: [
  //       { index: true, element: <HomePage /> },
  //       {
  //         path: '/books',
  //         element: <BooksLayout />,
  //         children: [
  //           {
  //             // MY CLASSIC GET ROUTE EXAMPLE
  //             index: true,
  //             errorElement: <ErrorComponent />,
  //             element: <ClassicBooksPage />,
  //             loader: async ({ request }) => {
  //               // request url for getting queryparams if needed
  //               const data = await axios.get(
  //                 `https://jsonplaceholder.typicode.com/albums/${
  //                   useGetQueryParams(new URL(request.url)) === 'yes' ? 1 : 2
  //                 }`
  //               );
  //               return data.data;
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         path: '/fiction',
  //         element: <BooksLayout />,
  //         children: [
  //           {
  //             //SUSPENSE + AWAIT REQUEST GET ROUTE EXAMPLE
  //             index: true,
  //             errorElement: <ErrorComponent />,
  //             element: <FictionBooksPage />,
  //             loader: async () =>
  //               defer({
  //                 data: getFictionBooks(),
  //               }),
  //           },
  //         ],
  //       },
  //     ],
  //   },
]);
