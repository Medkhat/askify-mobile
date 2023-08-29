import LocalizedStrings from 'react-native-localization';

const locales = new LocalizedStrings({
  en: {
    home: 'Home',
    settings: 'Settings',
    chats: 'Chats',
    language: 'Language',
  },
  ru: {
    home: 'Главная',
    settings: 'Настройки',
    chats: 'Чаты',
    language: 'Язык',
  },
  kk: {
    home: 'Басты',
    settings: 'Параметрлер',
    chats: 'Чаттар',
    language: 'Тіл',
  },
});

export default locales;
