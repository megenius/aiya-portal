import { Hono } from "hono";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { followersRoutes } from "./routes/followers";
// import { knowledgesRoutes } from "./routes/knowledges";
// import { textEmbeddingRoutes } from "./routes/text-embedding";
// import { webhookRoutes } from "./routes/webhook";
import { Env } from "./types/hono.types";
import { authMiddleware } from "@repo/shared/middlewares/auth";
import { lambdaAuthMiddleware } from "./middlewares/lambda-auth.middleware";
import { MyDurableObject } from "./durables/MyDurableObject";
import { WorkerEnv } from "./types/worker-configuration";

const app = new Hono<Env>()
  .basePath("/api")
  // .use("*", (c: any, next) => {
  //   const hostname = new URL(c.req.url).hostname;

  //   console.log("hostname", hostname);
  //   if (hostname.includes("lambda-api")) {
  //     return lambdaAuthMiddleware(c, next);
  //   }

  //   return authMiddleware(c, next);
  // })
  // .use("*", errorHandler)
  .route("/followers", followersRoutes)
  .onError((err, c) => {
    return c.json({ error: err.message });
  });

export { MyDurableObject };

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: WorkerEnv) {},
};
