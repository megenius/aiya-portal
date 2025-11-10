import { useSearchParams } from '@remix-run/react';
import { Loading } from '@repo/preline';
import React, { useEffect, useRef, useCallback } from 'react';
import { useLogin } from '~/hooks/useLogin';
import { useAppSelector } from '~/store';

interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  console.log('[SSO] Auth callback component mounted');

  const login = useLogin();
  const [searchParams] = useSearchParams();
  const hasAttemptedLogin = useRef(false);
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  console.log('[SSO] searchParams:', {
    q: searchParams.get('q'),
    redirect: searchParams.get('redirect'),
    isAuthenticated
  });

  const handleLogin = useCallback(async () => {
    console.log('[SSO] handleLogin called, hasAttemptedLogin:', hasAttemptedLogin.current);
    if (hasAttemptedLogin.current) return;

    const q = searchParams.get("q");
    const redirect = searchParams.get("redirect");
    if (!q) return;

    try {
      const userInfo = JSON.parse(atob(q));

      if (userInfo.external_identifier) {
        hasAttemptedLogin.current = true;

        // Store redirect path and set navigation flag
        if (redirect) {
          sessionStorage.setItem('sso_redirect', redirect);
          sessionStorage.setItem('sso_navigating', 'true');
          console.log('[SSO] Stored redirect path:', redirect);
        }

        // If already authenticated, redirect immediately (skip login API call)
        if (isAuthenticated) {
          console.log('[SSO] Already authenticated, redirecting immediately');
          if (redirect) {
            sessionStorage.removeItem('sso_redirect');
            sessionStorage.removeItem('sso_navigating');
            window.location.replace(redirect);
          }
          return;
        }

        // Not authenticated - trigger login
        console.log('[SSO] Not authenticated, calling login API');
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
      hasAttemptedLogin.current = false;
      sessionStorage.removeItem('sso_redirect');
      sessionStorage.removeItem('sso_navigating');
    }
  }, [searchParams, login, isAuthenticated]);

  useEffect(() => {
    handleLogin();
  }, [handleLogin]);

  return <Loading />;
};

export default MainContent;