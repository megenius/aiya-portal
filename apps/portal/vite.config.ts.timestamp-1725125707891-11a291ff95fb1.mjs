// vite.config.ts
import { vitePlugin as remix } from "file:///Users/boy/Dev/aiya/aiya-portal/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///Users/boy/Dev/aiya/aiya-portal/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///Users/boy/Dev/aiya/aiya-portal/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = ({ mode }) => {
  const { PORT } = process.env;
  return defineConfig({
    plugins: [
      remix({
        ssr: false,
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true
        }
      }),
      tsconfigPaths()
    ],
    server: {
      port: PORT ? Number(PORT) : 4e3,
      proxy: {
        "/api/bots": getEndpoint("http://localhost:14101", ""),
        "/api/channels": getEndpoint("http://localhost:14102", ""),
        // have to use bottom
        "/api": getEndpoint("http://localhost:14000", "")
      }
    },
    ssr: {
      noExternal: ["react-tweet", "novel"]
    }
  });
};
var getEndpoint = (url, prefix) => {
  return {
    target: url,
    changeOrigin: true,
    secure: false,
    rewrite: (path) => path.replace(new RegExp(`^/${prefix}`), "")
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYm95L0Rldi9haXlhL2FpeWEtcG9ydGFsL2FwcHMvcG9ydGFsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYm95L0Rldi9haXlhL2FpeWEtcG9ydGFsL2FwcHMvcG9ydGFsL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ib3kvRGV2L2FpeWEvYWl5YS1wb3J0YWwvYXBwcy9wb3J0YWwvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSBcIkByZW1peC1ydW4vZGV2XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PiB7XG4gIC8vIHByb2Nlc3MuZW52ID0geyAuLi5wcm9jZXNzLmVudiwgLi4ubG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKSB9O1xuICBjb25zdCB7IFBPUlQgfSA9IHByb2Nlc3MuZW52O1xuXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlbWl4KHtcbiAgICAgICAgc3NyOiBmYWxzZSxcbiAgICAgICAgZnV0dXJlOiB7XG4gICAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXG4gICAgICAgICAgdjNfcmVsYXRpdmVTcGxhdFBhdGg6IHRydWUsXG4gICAgICAgICAgdjNfdGhyb3dBYm9ydFJlYXNvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdHNjb25maWdQYXRocygpLFxuICAgIF0sXG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0OiBQT1JUID8gTnVtYmVyKFBPUlQpIDogNDAwMCxcbiAgICAgIHByb3h5OiB7XG4gICAgICAgIFwiL2FwaS9ib3RzXCI6IGdldEVuZHBvaW50KFwiaHR0cDovL2xvY2FsaG9zdDoxNDEwMVwiLCBcIlwiKSxcbiAgICAgICAgXCIvYXBpL2NoYW5uZWxzXCI6IGdldEVuZHBvaW50KFwiaHR0cDovL2xvY2FsaG9zdDoxNDEwMlwiLCBcIlwiKSxcblxuICAgICAgICAvLyBoYXZlIHRvIHVzZSBib3R0b21cbiAgICAgICAgXCIvYXBpXCI6IGdldEVuZHBvaW50KFwiaHR0cDovL2xvY2FsaG9zdDoxNDAwMFwiLCBcIlwiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzc3I6IHtcbiAgICAgIG5vRXh0ZXJuYWw6IFtcInJlYWN0LXR3ZWV0XCIsIFwibm92ZWxcIl0sXG4gICAgfSxcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRFbmRwb2ludCA9ICh1cmw6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0YXJnZXQ6IHVybCxcbiAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgc2VjdXJlOiBmYWxzZSxcbiAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoYF4vJHtwcmVmaXh9YCksIFwiXCIpLFxuICB9O1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVQsU0FBUyxjQUFjLGFBQWE7QUFDdlYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBRTNCLFFBQU0sRUFBRSxLQUFLLElBQUksUUFBUTtBQUV6QixTQUFPLGFBQWE7QUFBQSxJQUNsQixTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsVUFDTixtQkFBbUI7QUFBQSxVQUNuQixzQkFBc0I7QUFBQSxVQUN0QixxQkFBcUI7QUFBQSxRQUN2QjtBQUFBLE1BQ0YsQ0FBQztBQUFBLE1BQ0QsY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNLE9BQU8sT0FBTyxJQUFJLElBQUk7QUFBQSxNQUM1QixPQUFPO0FBQUEsUUFDTCxhQUFhLFlBQVksMEJBQTBCLEVBQUU7QUFBQSxRQUNyRCxpQkFBaUIsWUFBWSwwQkFBMEIsRUFBRTtBQUFBO0FBQUEsUUFHekQsUUFBUSxZQUFZLDBCQUEwQixFQUFFO0FBQUEsTUFDbEQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxZQUFZLENBQUMsZUFBZSxPQUFPO0FBQUEsSUFDckM7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUVBLElBQU0sY0FBYyxDQUFDLEtBQWEsV0FBbUI7QUFDbkQsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsUUFBUTtBQUFBLElBQ1IsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRSxHQUFHLEVBQUU7QUFBQSxFQUMvRDtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
