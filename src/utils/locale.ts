import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
         home_welcome: "Welcome To",
         home_title: "Revolutionize your education with 237 Virtual Academy."
        }
      },

      fr: {
        translation: {
            home_welcome: "Bienvenue à",
            home_title: "Nous avons deux filles et un garçon. Nous avons deux filles et un garçon. une petite fille une petite fille."
        }
      },
    }
  });

export default i18n;