import { Hono } from "hono";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { botsRoutes } from "./routes/bots";
// import { knowledgesRoutes } from "./routes/knowledges";
// import { textEmbeddingRoutes } from "./routes/text-embedding";
// import { webhookRoutes } from "./routes/webhook";
import { handleQueueMessage } from "./handlers/queue.handler";
import { Env } from "./types/hono.types";
import { lambdaAuthMiddleware } from "./middlewares/lambda-auth.middleware";
import { knowledgesRoutes } from "./routes/knowledges";
import { authMiddleware } from "./middlewares/auth.middleware";

const app = new Hono<Env>()
  .basePath("/api")
  .use("*", (c: any, next) => {
    const hostname = new URL(c.req.url).hostname;
    console.log("hostname", hostname);
    // if (hostname.includes("lambda-api")) {
    //   return lambdaAuthMiddleware(c, next);
    // }

    return authMiddleware(c, next);
  })
  // .use("*", errorHandler)
  .route("/bots", botsRoutes)
  .route("/bots/knowledges", knowledgesRoutes);
// .route("/bots/embedding", textEmbeddingRoutes)
// .route("/webhook", webhookRoutes);

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: WorkerEnv) {
    await handleQueueMessage(batch, env);
  },
};

export type AppType = typeof app;
