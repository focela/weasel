import { lazy } from 'react';

// PROJECT IMPORT
import AuthLayout from '~/layout/Auth';
import Loadable from '~/components/Loadable';

// RENDER - AUTH
const AuthLogin = Loadable(lazy(() => import('~/pages/auth/login')));

const AuthRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <AuthLayout />,
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
