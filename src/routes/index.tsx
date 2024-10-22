import { createBrowserRouter } from 'react-router-dom';

// PROJECT IMPORT
import AuthRoutes from '~/routes/AuthRoutes';
import Error404 from '~/pages/maintenance/404';
import MainRoutes from '~/routes/MainRoutes';

const router = createBrowserRouter(
  [
    {
      path: '*',
      element: <Error404 />
    },
    AuthRoutes,
    MainRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
