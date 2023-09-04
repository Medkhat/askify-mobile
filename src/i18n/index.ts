import {initReactI18next} from 'react-i18next';

import i18n from 'i18next';

import en from './en/translation.json';
import kk from './kk/translation.json';
import ru from './ru/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    kk: {
      translation: kk,
    },
    ru: {
      translation: ru,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  supportedLngs: ['en', 'kk', 'ru'],
  compatibilityJSON: 'v3',
  defaultNS: 'translation',
  ns: ['translation'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
