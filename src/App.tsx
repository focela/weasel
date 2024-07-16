// PROJECT IMPORT
import Locales from '~/components/Locales';
import RTLLayout from '~/components/RTLLayout';
import ScrollTop from '~/components/ScrollTop';
import Snackbar from '~/components/third-party/Snackbar';
import ThemeCustomization from '~/themes';
import { JWTProvider as AuthProvider } from '~/contexts/JWTContext';

export default function App() {
  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <ScrollTop>
            <AuthProvider>
              <>
                <Snackbar>
                  <h1>This is App.tsx!</h1>;
                </Snackbar>
              </>
            </AuthProvider>
          </ScrollTop>
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
}
