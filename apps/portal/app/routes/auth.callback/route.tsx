import { useSearchParams } from '@remix-run/react';
import { Loading } from '@repo/preline';
import React, { useEffect, useRef, useCallback } from 'react';
import { useLogin } from '~/hooks/useLogin';

interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  console.log('[SSO] Auth callback component mounted');

  const login = useLogin();
  const [searchParams] = useSearchParams();
  const hasAttemptedLogin = useRef(false);

  console.log('[SSO] searchParams:', {
    q: searchParams.get('q'),
    redirect: searchParams.get('redirect')
  });

  const handleLogin = useCallback(async () => {
    console.log('[SSO] handleLogin called, hasAttemptedLogin:', hasAttemptedLogin.current);
    if (hasAttemptedLogin.current) return;

    const q = searchParams.get("q");
    const redirect = searchParams.get("redirect"); // Get redirect parameter from SSO
    if (!q) return;

    try {
      const userInfo = JSON.parse(atob(q));

      if (userInfo.external_identifier) {
        hasAttemptedLogin.current = true;

        // Store redirect path and set navigation flag IMMEDIATELY
        // This prevents layout routes from redirecting before we can handle SSO
        if (redirect) {
          sessionStorage.setItem('sso_redirect', redirect);
          sessionStorage.setItem('sso_navigating', 'true');
          console.log('[SSO] Stored redirect path and set sso_navigating flag:', redirect);
        }

        // Trigger login - redirect will be handled in useLogin hook after auth state is ready
        await login.mutateAsync({
          email: userInfo.email,
          first_name: userInfo.first_name,
          last_name: userInfo.last_name || "",
          avatar: userInfo.avatar,
          external_identifier: userInfo.external_identifier,
        });

        // Navigation will be handled by useLogin hook after Redux state updates
      }
    } catch (error) {
      console.error('Login error:', error);
      hasAttemptedLogin.current = false; // Reset flag in case retry is needed
      sessionStorage.removeItem('sso_redirect'); // Clean up on error
      sessionStorage.removeItem('sso_navigating');
    }
  }, [searchParams, login]);

  useEffect(() => {
    handleLogin();
  }, [handleLogin]);

  return <Loading />;
};

export default MainContent;