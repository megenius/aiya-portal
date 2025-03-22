import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default () => {
  const { PORT } = process.env;

  return defineConfig({
    plugins: [
      tailwindcss(),
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
    server: {
      port: PORT ? Number(PORT) : 4200,
      proxy: {
        "/api/partners": getEndpoint("http://localhost:14108", ""),
        "/api/files": getEndpoint("http://localhost:14000", ""),
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
