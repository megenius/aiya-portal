import type { LinksFunction } from "@remix-run/cloudflare";
import PrelineScript from "./PrelineScript";

import 'react-toastify/dist/ReactToastify.css';
import tailwindCss from "@/styles/tailwind.css?url";
import globalCss from "@/styles/global.css?url";
import prosemirrorCss from "@/styles/prosemirror.css?url";
import prelineCss from "@repo/preline/preline.css?url";

import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, useCallback, useEffect } from "react";
import { ToastContainer, Slide } from 'react-toastify';
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { ScrollRestoration } from "@remix-run/react";

// import 'apexcharts/dist/apexcharts.css';
// import "yet-another-react-lightbox/styles.css";


export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
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
      <body>
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
  return (
    <>
      <PrelineScript />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  )
}
