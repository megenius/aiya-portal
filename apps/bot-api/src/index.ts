import { Hono } from "hono";
import { botsRoutes } from "./routes/bots";

import { authMiddleware } from "@repo/shared/middlewares/auth";
import { lambdaAuthMiddleware } from "./middlewares/lambda-auth";
import { Env } from "@repo/shared";
import { knowledgesRoutes } from "./routes/knowledges";
// import { cache } from 'hono/cache'

const app = new Hono<Env>()
  .basePath("/api")
  .use("*", (c, next) => {
    const hostname = new URL(c.req.url).hostname;

    // console.log("hostname", hostname);
    if (hostname.includes("lambda-api")) {
      return lambdaAuthMiddleware(c, next)
    }
    
    return authMiddleware(c, next);
  })
  .route("/bots", botsRoutes)
  .route("/bots/knowledges", knowledgesRoutes)
  .onError((err, c) => {
    return c.json({ error: err.message });
  });

export default app;

export type AppType = typeof app;
