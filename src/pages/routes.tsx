import { createBrowserRouter, defer } from 'react-router-dom';

import AuthPage from './auth/AuthPage';
import DashboardPage from './dashboard/DashboardPage';
import TasksPage from './tasks/TasksPage';

import RootLayout from '@components/layouts/RootLayout';
import PageError from '@components/ui/PageError';

import { PATH } from '@utils/path';
import { dashboardLoadedData } from '@utils/requests';

export const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
        errorElement: <PageError />,
        loader: async () => defer({ dashboardLoadedData }),
      },
      { path: PATH.tasks, element: <TasksPage /> },
      { path: PATH.members, element: <TasksPage /> },
    ],
  },
  { path: PATH.authorization, element: <AuthPage /> },
]);
