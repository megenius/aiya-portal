import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useParams,
} from "@remix-run/react";

import PrelineScript from "./PrelineScript";
import { LinksFunction } from "@remix-run/cloudflare";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import prelineCss from "@repo/preline/preline.css?url";
import tailwindCss from "~/styles/tailwind.css?url";
import globalCss from "~/styles/global.css?url";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "~/store";
import { LineLiffProvider } from "./contexts/LineLiffContext";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: prelineCss },
  { rel: "stylesheet", href: globalCss },
  { rel: "stylesheet", href: tailwindCss },
];

// import "./tailwind.css";

// export const links: LinksFunction = () => [
//   { rel: "preconnect", href: "https://fonts.googleapis.com" },
//   {
//     rel: "preconnect",
//     href: "https://fonts.gstatic.com",
//     crossOrigin: "anonymous",
//   },
//   {
//     rel: "stylesheet",
//     href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
//   },
// ];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
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
  const {liffId} = useParams();

  return (
    <>
      <PrelineScript />
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <LineLiffProvider liffId={liffId as string}>
            <Outlet />
          </LineLiffProvider>
        </QueryClientProvider>
      </PersistGate>
      </Provider>
    </>
  );
}

export function HydrateFallback() {
  return <div></div>;
  // return <p>Loading...</p>;
}
