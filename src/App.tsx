// PROJECTS IMPORT
import Locales from '~/components/Locales';
import RTLLayout from '~/components/RTLLayout';
import ThemeCustomization from '~/themes';

export default function App() {
  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <h1>This is App.tsx!</h1>;
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
}
