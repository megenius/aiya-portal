import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default () => {
  const { PORT } = process.env;

  return defineConfig({
    plugins: [
      remix({
        ssr: false,
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
        },
      }),
      tsconfigPaths(),
    ],
    resolve: {
      dedupe: [
        "react",
        "react-dom",
        "@tanstack/react-query",
        "@remix-run/react",
      ],
    },
    server: {
      port: PORT ? Number(PORT) : 4200,
      proxy: {
        "/api": getEndpoint("http://localhost:14200", ""),
      },
    },
  });
};

const getEndpoint = (url: string, prefix: string) => {
  return {
    target: url,
    changeOrigin: true,
    secure: false,
    rewrite: (path: string) => path.replace(new RegExp(`^/${prefix}`), ""),
  };
};
