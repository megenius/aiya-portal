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
import prosemirrorCss from "@/styles/prosemirror.css?url";
import prelineCss from "@repo/preline/preline.css?url";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store, persistor } from './store';
import { useCallback, useEffect } from "react";
import { renewToken } from "./store/slices/authSlice";
import { ToastContainer, Slide } from 'react-toastify';
import 'apexcharts/dist/apexcharts.css';


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindCss },
  { rel: "stylesheet", href: prelineCss },
  { rel: "stylesheet", href: prosemirrorCss },
  { rel: "stylesheet", href: globalCss },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
    if (state.refreshToken && state.expiresAt) {
      console.log({ refreshToken: state.refreshToken, expiresAt: state.expiresAt });
      store.dispatch(renewToken());
    }
  }, []);

  return (
    <>
      <PrelineScript />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
      <ToastContainer autoClose={1000} position={"top-center"} hideProgressBar transition={Slide} />
    </>
  )
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
