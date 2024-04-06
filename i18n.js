import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslations from './locales/en.json';
import svTranslations from './locales/sv.json';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      sv: { translation: svTranslations },
    },
    lng: 'sv', // Default language
    fallbackLng: 'sv',
    interpolation: {
      escapeValue: false, // React already sanitizes output
    },
  });

export default i18n;
