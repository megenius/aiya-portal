import React, { useCallback, useEffect } from "react";
import { refreshTokenApi } from "~/services/auth";
import { useAppDispatch, useAppSelector } from "~/store";

const useRefreshAuthToken = () => {
  const dispatch = useAppDispatch();
  const { expiresAt, isAuthenticated, refreshToken } = useAppSelector(
    (state) => state.auth
  );

  const handleRefreshToken = useCallback(async () => {
    const response = await refreshTokenApi(refreshToken as string);
    // dispatch(setCredentials(response));
  }, [refreshToken, dispatch]);

  useEffect(() => {
    if (isAuthenticated && expiresAt) {
      const currentTime = Date.now();
      const timeout = expiresAt - currentTime - 120000; // refresh 2 minute before expiration
      if (timeout > 0) {
        const timer = setTimeout(handleRefreshToken, timeout);
        return () => clearTimeout(timer);
      } else {
        handleRefreshToken();
      }
    }
  }, [expiresAt]);

  return;
};

export default useRefreshAuthToken;
