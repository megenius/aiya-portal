// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false, // Set to true to see debug info
    lng: "th",
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
  })
  .then(() => {
    console.log('i18next initialized successfully');
  })
  .catch((error) => {
    console.error('Error initializing i18next:', error);
  });

// Handling language change errors
// i18n.on('languageChanging', (lng) => {
//   console.log(`Changing language to: ${lng}`);
// });

// i18n.on('languageChanged', (lng) => {
//   console.log(`Language changed to: ${lng}`);
// });

// i18n.on('failedLoading', (lng, ns, msg) => {
//   console.error(`Failed to load ${ns} namespace in ${lng} language: ${msg}`);
// });

// // Verify translations are loaded
// i18n.loadNamespaces(['common', 'profile'])
//   .then(() => {
//     console.log('Namespaces loaded successfully');
//   })
//   .catch((error) => {
//     console.error('Error loading namespaces:', error);
//   });

export default i18n;