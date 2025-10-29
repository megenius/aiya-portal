import React, { createContext, useContext, useEffect, useState } from "react";
import liff from "@line/liff";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useIdentify } from "~/hooks/auth/useIdentify";

// Types
interface UserProfile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  email?: string;
  statusMessage?: string;
}

interface LineLiffContextType {
  liff: typeof liff | null;
  isLoggedIn: boolean;
  isInitialized: boolean;
  isInClient: boolean;
  profileQuery: UseQueryResult<UserProfile, Error>;
  language: string;
  error: Error | null;
  logout: () => Promise<void>;
  initializeError: Error | null;
}

const LineLiffContext = createContext<LineLiffContextType | null>(null);

interface LineLiffProviderProps {
  liffId?: string; // Make liffId optional
  children: React.ReactNode;
}

export const LineLiffProvider: React.FC<LineLiffProviderProps> = ({
  liffId,
  children,
}) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInClient, setIsInClient] = useState(false);
  const [language, setLanguage] = useState<string>("en");
  const [error, setError] = useState<Error | null>(null);
  const [initializeError, setInitializeError] = useState<Error | null>(null);
  const identify = useIdentify();

  // Initialize LIFF
  useEffect(() => {
    // Skip LIFF initialization if liffId is not provided
    if (!liffId) {
      console.log("Skipping LIFF initialization: no liffId provided");
      return;
    }

    const initializeLiff = async () => {
      try {
        await liff.init({
          liffId,
          withLoginOnExternalBrowser: true, // Enable browser login
        });
        setIsInitialized(true);
        setIsLoggedIn(liff.isLoggedIn());
        setIsInClient(liff.isInClient()); // Detect if in LINE app

        if (!liff.isLoggedIn()) {
          const redirectUri = window.location.href;
          liff.login({ redirectUri });
        } else {
          const IDToken = liff.getIDToken() as string;
          await identify.mutateAsync({
            liffId,
            IDToken,
          });
          await profileQuery.refetch();
        }
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("Failed to initialize LIFF");
        setInitializeError(error);
        console.error("LIFF initialization failed:", error);
      }
    };

    initializeLiff();

    // Cleanup function
    return () => {
      setIsInitialized(false);
      setIsLoggedIn(false);
      setIsInClient(false);
      setError(null);
      setInitializeError(null);
    };
  }, [liffId]);

  // Profile Query
  const profileQuery = useQuery<UserProfile, Error>({
    queryKey: ["lineProfile", isLoggedIn],
    queryFn: async () => {
      try {
        const profile = await liff.getProfile();
        const decodedIdToken = liff.getDecodedIDToken();
        const detectedLang = liff.getAppLanguage();
        console.log("Detected language:", detectedLang);
        setLanguage(detectedLang);
        return {
          userId: profile.userId,
          displayName: profile.displayName,
          pictureUrl: profile.pictureUrl,
          statusMessage: profile.statusMessage,
          email: decodedIdToken?.email,
        };
      } catch (err) {
        throw err instanceof Error ? err : new Error("Failed to fetch profile");
      }
    },
    enabled: isInitialized && isLoggedIn,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error) => {
      // Only retry network-related errors, not auth errors
      if (
        error.message.includes("not logged in") ||
        error.message.includes("not initialized")
      ) {
        return false;
      }
      return failureCount < 3;
    },
  });

  // const login = React.useCallback(async () => {
  //   try {
  //     if (!isInitialized) {
  //       throw new Error("LIFF is not initialized");
  //     }
  //     if (!liff.isLoggedIn()) {
  //       const redirectUri = window.location.href;
  //       liff.login({ redirectUri });
  //       setIsLoggedIn(true);
  //       const IDToken = liff.getIDToken() as string;
  //       await identify.mutateAsync({
  //         liffId,
  //         IDToken,
  //       });
  //       await profileQuery.refetch();
  //     }
  //   } catch (err) {
  //     const error = err instanceof Error ? err : new Error("Failed to login");
  //     setError(error);
  //     throw error;
  //   }
  // }, [isInitialized, setIsLoggedIn, setError, liffId, identify, profileQuery]);

  // useEffect(() => {
  //   console.log("isInitialized:", isInitialized);
  //   console.log("isLoggedIn:", isLoggedIn);
  //   if (isInitialized && !isLoggedIn) {
  //     login();
  //   }
  // }, [isInitialized, isLoggedIn, login]);

  // Profile Query
  // const profileQuery = useQuery<UserProfile, Error>({
  //   queryKey: ["lineProfile", isLoggedIn],
  //   queryFn: async () => {
  //     if (!isInitialized) {
  //       throw new Error("LIFF is not initialized");
  //     }
  //     if (!isLoggedIn) {
  //       throw new Error("User is not logged in");
  //     }

  //     try {
  //       const profile = await liff.getProfile();
  //       const decodedIdToken = liff.getDecodedIDToken();
  //       const detectedLang = liff.getAppLanguage();
  //       console.log("Detected language:", detectedLang);
  //       setLanguage(detectedLang);
  //       return {
  //         userId: profile.userId,
  //         displayName: profile.displayName,
  //         pictureUrl: profile.pictureUrl,
  //         statusMessage: profile.statusMessage,
  //         email: decodedIdToken?.email,
  //       };
  //     } catch (err) {
  //       throw err instanceof Error ? err : new Error("Failed to fetch profile");
  //     }
  //   },
  //   enabled: isInitialized && isLoggedIn,
  //   staleTime: 5 * 60 * 1000, // 5 minutes
  //   retry: (failureCount, error) => {
  //     // Only retry network-related errors, not auth errors
  //     if (
  //       error.message.includes("not logged in") ||
  //       error.message.includes("not initialized")
  //     ) {
  //       return false;
  //     }
  //     return failureCount < 3;
  //   },
  // });

  const logout = async () => {
    try {
      if (!isInitialized) {
        throw new Error("LIFF is not initialized");
      }
      if (liff.isLoggedIn()) {
        liff.logout();
        setIsLoggedIn(false);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Failed to logout");
      setError(error);
      throw error;
    }
  };

  const value: LineLiffContextType = {
    liff,
    isLoggedIn,
    isInitialized,
    isInClient,
    profileQuery,
    language,
    error,
    initializeError,
    logout,
  };

  return (
    <LineLiffContext.Provider value={value}>
      {children}
    </LineLiffContext.Provider>
  );
};

export const useLineLiff = () => {
  const context = useContext(LineLiffContext);
  if (!context) {
    throw new Error("useLineLiff must be used within a LineLiffProvider");
  }
  return context;
};

// Custom hook for profile data
export const useLineProfile = () => {
  const { profileQuery, isInitialized, isLoggedIn } = useLineLiff();

  // If LIFF is not initialized or not logged in, treat as loading
  if (!isInitialized || !isLoggedIn) {
    return {
      isLoading: true,
      profile: undefined,
      error: undefined,
      refetch: profileQuery.refetch,
      isFetching: profileQuery.isFetching,
    };
  }

  return {
    isLoading: profileQuery.isLoading,
    profile: profileQuery.data,
    error: profileQuery.error,
    refetch: profileQuery.refetch,
    isFetching: profileQuery.isFetching,
  };
};

// Custom hook for initialization status
export const useLineLiffInit = () => {
  const { isInitialized, initializeError } = useLineLiff();
  return { isInitialized, initializeError };
};
