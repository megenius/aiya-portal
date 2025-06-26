import { Link, useNavigate, useSearchParams } from '@remix-run/react';
import { Loading } from '@repo/preline';
import React, { useEffect, useRef, useCallback } from 'react';
import { useLogin } from '~/hooks/useLogin';

interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  const login = useLogin();
  const [searchParams] = useSearchParams();
  const hasAttemptedLogin = useRef(false);

  const handleLogin = useCallback(async () => {
    if (hasAttemptedLogin.current) return;

    const q = searchParams.get("q");
    if (!q) return;

    try {
      const userInfo = JSON.parse(atob(q));
      
      if (userInfo.external_identifier) {
        hasAttemptedLogin.current = true;
        await login.mutateAsync({
          email: userInfo.email,
          first_name: userInfo.first_name,
          last_name: userInfo.last_name || "",
          avatar: userInfo.avatar,
          external_identifier: userInfo.external_identifier,
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      hasAttemptedLogin.current = false; // Reset flag in case retry is needed
    }
  }, [searchParams, login]);

  useEffect(() => {
    handleLogin();
  }, [handleLogin]);

  return <Loading />;
};

export default MainContent;