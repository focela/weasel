// THIRD-PARTY IMPORT
import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

i18next
  .use(resourcesToBackend(async (language: string, namespace: string) => await import(`./locales/${language}/${namespace}.json`)))
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
