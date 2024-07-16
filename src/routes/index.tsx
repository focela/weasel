import { createBrowserRouter } from 'react-router-dom';

// PROJECT IMPORT
import AuthRoutes from '~/routes/AuthRoutes';
import Error404 from '~/pages/maintenance/404';

const router = createBrowserRouter(
  [
    {
      path: '*',
      element: <Error404 />
    },
    AuthRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
