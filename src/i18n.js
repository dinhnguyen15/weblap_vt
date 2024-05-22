import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
   .use(Backend)
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      fallbackLng: 'en',
      debug: true,
      interpolation: {
         escapeValue: false, // not needed for react as it escapes by default
      },
      backend: {
         loadPath: '/web-lab-vt/locales/{{lng}}.json', // Chỉnh lại đường dẫn tới tệp JSON
      },
      detection: {
         order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
         caches: ['localStorage', 'cookie'],
         lookupLocalStorage: 'i18nextLng',
         lookupCookie: 'i18nextLng',
         cookieMinutes: 10,
         cookieDomain: 'myDomain',
         htmlTag: document.documentElement,
         checkWhitelist: true,
      },
      whitelist: ['en', 'vi'],
   });

export default i18n;
