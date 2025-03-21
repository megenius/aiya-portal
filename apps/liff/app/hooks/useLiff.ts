import { useState, useEffect } from "react";
import liff from "@line/liff";

interface UseLiffProps {
  liffId: string;
}

export const useLiff = ({ liffId }: UseLiffProps) => {
  const [language, setLanguage] = useState<string>("en");
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initializeLiff = async () => {
      try {
        console.log("LIFF loading", liffId);
        await liff.init({ liffId: liffId as string });
        console.log("LIFF initialized", liffId);
        setIsInitialized(true);
        setIsLoggedIn(liff.isLoggedIn());

        if (!liff.isLoggedIn()) {
          // const redirectUri = `${window.location.origin}${window.location.pathname}`;
          const redirectUri = window.location.href;
          liff.login({ redirectUri });
        } else {
          const detectedLang = liff.getAppLanguage();
          
          setLanguage(detectedLang);
          console.log("Detected language:", detectedLang);
        }
      } catch (error) {
        console.error("LIFF initialization failed:", error);
      }
    };

    if (liffId) {
      initializeLiff();
    }
  }, [liffId]);

  return { language, isInitialized, isLoggedIn };
};
