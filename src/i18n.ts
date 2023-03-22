import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import plCommon from './translations/pl/common.json';
import enCommon from './translations/en/common.json';

const resources = {
  pl: {
    translation: plCommon,
  },
  en: {
    translation: enCommon,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
