import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationTR from 'src/common/locales/tr/translation.json';
import translationEN from 'src/common/locales/en/translation.json';

const storageLanguage = localStorage.getItem('language');
const storageLanguageStatus = storageLanguage === 'tr' || storageLanguage === 'en';

const resources = {
  tr: {
    translation: translationTR
  },
  en: {
    translation: translationEN
  }
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: storageLanguageStatus ? storageLanguage : 'en',
  debug: false,

  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  }
});

export default i18n;
