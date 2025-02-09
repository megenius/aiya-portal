import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }) => {
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const { PORT } = process.env;

  return defineConfig({
    plugins: [
      remix({
        ssr: false,
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_singleFetch: true,
          v3_lazyRouteDiscovery: true,
        },
      }),
      tsconfigPaths(),
    ],
    server: {
      port: PORT ? Number(PORT) : 4000,
      proxy: {
        "/api/bots": getEndpoint("http://localhost:14101", ""),
        "/api/channels": getEndpoint("http://localhost:14102", ""),
        "/api/adaccounts": getEndpoint("http://localhost:14105", ""),
        "/api/aws": getEndpoint("http://localhost:14103", ""),
        "/api/customers": getEndpoint("http://localhost:14106", ""),
        "/api/followers": getEndpoint("http://localhost:14106", ""),

        "/api/shops": getEndpoint("http://localhost:14107", ""),
        "/api/partners": getEndpoint("http://localhost:14108", ""),
        "/api/ai": getEndpoint("http://localhost:14109", ""),
        "/api/billing": getEndpoint("http://localhost:14110", ""),
        "/api/uws": getEndpoint("http://localhost:14400", ""),
        // have to use bottom
        "/api": getEndpoint("http://localhost:14000", ""),
        "/websocket/billing": getEndpoint("http://localhost:14110", "", {
          ws: true,
        }),
        "/websocket/uws": getEndpoint("http://localhost:14400", "", {
          ws: true,
        }),
      },
    },
    ssr: {
      noExternal: ["react-tweet", "novel"],
    },
  });
};

const getEndpoint = (
  url: string,
  prefix: string,
  opts?: {
    ws?: boolean;
  }
) => {
  return {
    target: url,
    changeOrigin: true,
    secure: false,
    ws: opts?.ws,
    rewrite: (path: string) => path.replace(new RegExp(`^/${prefix}`), ""),
  };
};
