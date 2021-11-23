import { createI18n } from 'vue-i18n';
import { UserModule } from '~/types';

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const messages = Object.fromEntries(
   Object.entries(import.meta.globEager('../../locales/*.y(a)?ml')).map(([key, value]) => {
      const yaml = key.endsWith('.yaml');
      return [key.slice(14, yaml ? -5 : -4), value.default];
   })
);

export const install: UserModule = ({ app }) => {
   const langs = Object.keys(messages);

   const isNavigatorLanguageTranslated = langs
      .map((lang) => lang.includes(navigator.language.split('-')[0]))
      .find((result) => result === true);

   const i18n = createI18n({
      legacy: false,
      fallbackLocale: {
         zh: ['zh-CN'],
         default: ['en'],
      },
      locale: navigator.language.split('-')[0],
      messages,
   });

   document
      .getElementsByTagName('HTML')[0]
      .setAttribute('lang', isNavigatorLanguageTranslated ? navigator.language : 'fr');

   app.use(i18n);
};
