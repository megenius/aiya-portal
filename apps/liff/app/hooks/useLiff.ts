import { useState, useEffect } from "react";
import liff from "@line/liff";

interface UseLiffProps {
  liffId: string;
  destTH: string;
  destEN: string;
}

export const useLiff = ({ liffId }: UseLiffProps) => {
  const [language, setLanguage] = useState<string>("en");
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initializeLiff = async () => {
      try {
        await liff.init({ liffId });
        console.log("LIFF initialized", liffId);
        setIsInitialized(true);
        setIsLoggedIn(liff.isLoggedIn());

        if (!liff.isLoggedIn()) {
          // const redirectUri = `${window.location.origin}${window.location.pathname}`;
          const redirectUri = window.location.href;
          liff.login({ redirectUri });
        } else {
          const detectedLang = liff.getLanguage();
          setLanguage(detectedLang);
          console.log("Detected language:", detectedLang);
        }
      } catch (error) {
        console.error("LIFF initialization failed:", error);
      }
    };

    initializeLiff();
  }, [liffId]);

  return { language, isInitialized, isLoggedIn };
};
