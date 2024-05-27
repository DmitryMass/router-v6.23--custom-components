import { createBrowserRouter, defer } from 'react-router-dom';
import RootLayout from '../components/layouts/RootLayout';
import PageError from '../components/ui/PageError';
import AuthPage from '../pages/auth/AuthPage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import TasksPage from '../pages/tasks/TasksPage';
import { PATH } from './path';
import { dashboardLoadedData } from './requests';

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
