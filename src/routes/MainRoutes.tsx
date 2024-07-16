import { lazy } from 'react';

// PROJECT IMPORT
import Loadable from '~/components/Loadable';
import MainLayout from '~/layout/MainLayout';

// RENDER - DASHBOARD
const Dashboard = Loadable(lazy(() => import('~/pages/dashboard')));

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />
        }
      ]
    }
  ]
};

export default MainRoutes;
