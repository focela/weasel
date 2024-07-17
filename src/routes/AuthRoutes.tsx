import { lazy } from 'react';

// PROJECT IMPORT
import AuthLayout from '~/layout/AuthLayout';
import Loadable from '~/components/Loadable';

// RENDER - AUTH
const AuthLogin = Loadable(lazy(() => import('~/pages/auth/login')));

const AuthRoutes = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: '/',
      element: <AuthLogin />,
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        }
      ]
    }
  ]
};

export default AuthRoutes;
