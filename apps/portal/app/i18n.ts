import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Initialize i18next for client-side only
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: false, // Set to true to see debug info
      fallbackLng: "en",
      supportedLngs: ["en", "th"],
      ns: ["common", "profile"],
      defaultNS: "common",
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
      interpolation: {
        escapeValue: false,
      },
    });

    
export default i18n;
