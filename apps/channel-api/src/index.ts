import { Hono } from "hono";
import { channelsRoutes } from "./routes/channels";

import { authMiddleware } from "@repo/shared/middlewares/auth";
import { lambdaAuthMiddleware } from "./middlewares/lambda-auth";
import { Env } from "@repo/shared";
import { cache } from "hono/cache";
import { wsRoutes } from "./routes/ws";
// export * from "./durables/FollowerDO";
// export * from "./durables/ProviderDO";

const app = new Hono<Env>()
  .get("/health", (c) => {
    return c.json({ status: "ok" });
  })
  .route("/ws", wsRoutes)
  .basePath("/api")
  .use("*", async (c, next) => {
    const hostname = new URL(c.req.url).hostname;
    console.log("hostname", hostname);
    
    return authMiddleware(c, next);
  })
  // .get(
  //   "*",
  //   cache({
  //     cacheName: "my-app",
  //     cacheControl: "max-age=60",
  //   })
  // )
  .route("/channels", channelsRoutes)

  .onError((err, c) => {
    return c.json({ error: err.message });
  });

export default app;

export type AppType = typeof app;