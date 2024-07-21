import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

// PROJECT IMPORT
import Loader from '~/components/Loader';
import Locales from '~/components/Locales';
import MuiSnackbar from '~/components/extended/Snackbar';
import router from '~/routes';
import RTLLayout from '~/components/RTLLayout';
import ScrollTop from '~/components/ScrollTop';
import Snackbar from '~/components/third-party/Snackbar';
import ThemeCustomization from '~/themes';
import { JWTProvider as AuthProvider } from '~/contexts/JWTContext';

export default function App() {
  return (
    <ThemeCustomization>
      <RTLLayout>
        <Suspense fallback={<Loader />}>
          <Locales>
            <ScrollTop>
              <AuthProvider>
                <>
                  <Snackbar>
                    <RouterProvider router={router} />
                    <MuiSnackbar />
                  </Snackbar>
                </>
              </AuthProvider>
            </ScrollTop>
          </Locales>
        </Suspense>
      </RTLLayout>
    </ThemeCustomization>
  );
}
