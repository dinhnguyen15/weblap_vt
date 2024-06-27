import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
   .use(Backend)
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      fallbackLng: 'en', // Đảm bảo tiếng Anh là ngôn ngữ mặc định
      supportedLngs: ['en', 'vi'],
      load: 'languageOnly', // Chỉ tải ngôn ngữ không kèm theo vùng miền (e.g., 'en' thay vì 'en-US')
      debug: true,
      interpolation: {
         escapeValue: false, // Not needed for react as it escapes by default
      },
      backend: {
         loadPath: '/locales/{{lng}}.json',
      },
      detection: {
         order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
         caches: ['cookie', 'localStorage'],
      },
   });

export default i18n;
