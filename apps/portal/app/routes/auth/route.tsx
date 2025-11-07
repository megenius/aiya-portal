import { Outlet, useNavigate, useLocation } from "@remix-run/react"
import { SideBar } from "./_components/SideBar"
import { useEffect } from "react";
import { useAppSelector } from "~/store";

const Route = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Check if this is an SSO callback with redirect parameter
  const isSSOCallback = location.pathname === '/auth/callback' &&
                        new URLSearchParams(location.search).has('redirect');

  useEffect(() => {
    // Don't redirect if SSO callback is in progress
    if (isSSOCallback) {
      console.log('[Auth Route] SSO callback detected, allowing callback to handle redirect');
      return;
    }

    // Don't redirect if SSO navigation is in progress
    // Check BOTH flags to ensure we don't interfere with SSO flow
    const ssoNavigating = sessionStorage.getItem('sso_navigating');
    const ssoRedirect = sessionStorage.getItem('sso_redirect');

    if (ssoNavigating || ssoRedirect) {
      console.log('[Auth Route] SSO flow in progress, skipping redirect');
      // Don't remove flags - let the navigation complete first
      return;
    }

    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, isSSOCallback]);

  // Allow SSO callback to render even when authenticated
  if (isAuthenticated && !isSSOCallback) {
    return <div></div>
  }

  return (
    <>
      <main className="flex min-h-full">
        <SideBar />
        <Outlet />
      </main>
    </>
  )
}

export default Route


