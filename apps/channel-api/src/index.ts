import { Hono } from "hono";
import { channelsRoutes } from "./routes/channels";

import { authMiddleware } from "@repo/shared/middlewares/auth";
import { lambdaAuthMiddleware } from "./middlewares/lambda-auth";
import { Env } from "@repo/shared";
import { cache } from "hono/cache";

const app = new Hono<Env>()
  .basePath("/api")
  .use("*", (c, next) => {
    const hostname = new URL(c.req.url).hostname;

    // console.log("hostname", hostname);
    if (hostname.includes("lambda-api")) {
      return lambdaAuthMiddleware(c, next);
    }

    return authMiddleware(c, next);
  })
  .get(
    "*",
    cache({
      cacheName: "my-app",
      cacheControl: "max-age=15",
    })
  )
  .route("/channels", channelsRoutes)
  .onError((err, c) => {
    return c.json({ error: err.message });
  });

export default app;

export type AppType = typeof app;
