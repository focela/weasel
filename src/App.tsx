// PROJECT IMPORT
import Locales from '~/components/Locales';
import RTLLayout from '~/components/RTLLayout';
import ScrollTop from '~/components/ScrollTop';
import ThemeCustomization from '~/themes';

export default function App() {
  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <ScrollTop>
            <h1>This is App.tsx!</h1>;
          </ScrollTop>
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
}
