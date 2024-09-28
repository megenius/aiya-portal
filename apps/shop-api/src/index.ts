import { Hono } from "hono";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { productsRoutes } from "./routes/products";
import { orderRoutes } from "./routes/orderbots";
// import { knowledgesRoutes } from "./routes/knowledges";
// import { textEmbeddingRoutes } from "./routes/text-embedding";
// import { webhookRoutes } from "./routes/webhook";
import { handleQueueMessage } from "./handlers/queue.handler";
import { Env } from "./types/hono.types";
import { authMiddleware } from "@repo/shared/middlewares/auth";
import { lambdaAuthMiddleware } from "./middlewares/lambda-auth.middleware";

const app = new Hono<Env>()
  .basePath("/api/shops")
  .use("*", (c: any, next) => {
    const hostname = new URL(c.req.url).hostname;

    console.log("hostname", hostname);
    if (hostname.includes("lambda-api")) {
      return lambdaAuthMiddleware(c, next);
    }

    return authMiddleware(c, next);
  })
  // .use("*", errorHandler)
  .route("/products", productsRoutes)
  .route("/orderbots", orderRoutes);
// .route("/bots/knowledges", knowledgesRoutes);

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: WorkerEnv) {
    await handleQueueMessage(batch, env);
  },
};

export type AppType = typeof app;
