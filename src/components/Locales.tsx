import { ReactNode, useEffect } from 'react';

// THIRD-PARTY IMPORT
import { I18nextProvider, useTranslation } from 'react-i18next';

// PROJECT IMPORT
import useConfig from '~/hooks/useConfig';
import i18next from '~/utils/i18next';

interface Props {
  children: ReactNode;
}

export default function Locales({ children }: Props) {
  const config = useConfig();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(config.i18n);
  }, [config, i18n]);

  return (
    <>
      <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
    </>
  );
}
