import { useState, useEffect } from "react";
import liff from "@line/liff";
import { useLogin } from "./auth/useLogin";
import { generateProfileId } from "~/services/profiles";

interface UseLiffProps {
  liffId: string;
}

export const useLiff = ({ liffId }: UseLiffProps) => {
  const [language, setLanguage] = useState<string>("en");
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useLogin();

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
          console.log("LIFF redirectUri", redirectUri);
          
          liff.login({ redirectUri });
        } else {
          const detectedLang = liff.getAppLanguage();
          const decodedIDToken = liff.getDecodedIDToken();
          const id = await generateProfileId(liffId, decodedIDToken?.sub as string);
          await login.mutateAsync({
            id,
          });
          
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
