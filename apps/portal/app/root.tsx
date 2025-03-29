import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import PrelineScript from "./PrelineScript";
import { LinksFunction } from "@remix-run/node";

import 'react-toastify/dist/ReactToastify.css';
import tailwindCss from "@/styles/tailwind.css?url";
import globalCss from "@/styles/global.css?url";
// import prosemirrorCss from "@/styles/prosemirror.css?url";
import prelineCss from "@repo/preline/preline.css?url";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store, persistor } from './store';
import { Suspense, useCallback, useEffect, useState } from "react";
import { renewToken } from "./store/slices/authSlice";
import { ToastContainer, Slide } from 'react-toastify';
import 'apexcharts/dist/apexcharts.css';
import "yet-another-react-lightbox/styles.css";

import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { Loader2 } from "lucide-react";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindCss },
  { rel: "stylesheet", href: prelineCss },
  // { rel: "stylesheet", href: prosemirrorCss },
  { rel: "stylesheet", href: globalCss },
];


export function Layout({ children }: { children: React.ReactNode }) {
  const language = store.getState().user.language;
  i18n.changeLanguage(language); // โหลดภาษาเริ่มต้นจาก Redux

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-50 dark:bg-neutral-900">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default function App() {
  useEffect(() => {
    const state = store.getState().auth;
    const { refreshToken, expiresAt } = state;
    
    if (!refreshToken || !expiresAt) return;
    
    // Calculate time until token expires (in milliseconds)
    const expiresAtDate = new Date(expiresAt);
    const now = new Date();
    const timeUntilExpiry = expiresAtDate.getTime() - now.getTime();
    
    // If token is expired or will expire soon, renew immediately
    if (timeUntilExpiry < 5 * 60 * 1000) {
      console.log("Token expired or expiring soon, renewing now");
      store.dispatch(renewToken());
      return;
    }
    
    // Set up token renewal before expiration
    console.log(`Token will be renewed in ${Math.floor((timeUntilExpiry - 5 * 60 * 1000) / 60000)} minutes`);
    const renewalTimer = setTimeout(() => {
      console.log("Renewing token before expiration");
      store.dispatch(renewToken());
    }, timeUntilExpiry - 5 * 60 * 1000); // Renew 5 minutes before expiry
    
    return () => {
      console.log("Clearing token renewal timer");
      clearTimeout(renewalTimer);
    };
  }, []);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <PrelineScript />
      <Provider store={store}>
        <PersistGate loading={<LoadingFallback />} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <QueryClientProvider client={queryClient}>
              <Outlet />
              <ToastContainer 
                autoClose={1000} 
                position="top-center" 
                hideProgressBar 
                transition={Slide} 
                limit={3}
                closeOnClick
                draggable
              />
            </QueryClientProvider>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

function LoadingFallback() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 dark:bg-neutral-900">
      <Loader2 className="h-12 w-12 animate-spin text-blue-500 mb-4" />
      {/* <p className="text-gray-600 dark:text-gray-300 font-medium">Loading application...</p> */}
    </div>
  );
}

export function HydrateFallback() {
  return <div></div> 
}
