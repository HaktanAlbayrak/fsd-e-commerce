import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const supportedLngs = ["en", "tr"] as const;

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translationNS: {} },
  },
});

export default i18n;
