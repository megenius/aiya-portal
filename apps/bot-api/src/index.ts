import { Hono } from "hono";
import { botsRoutes } from "./routes/bots";
import { handleQueueMessage } from "./handlers/queue.handler";
import { Env } from "./types/hono.types";
import { knowledgesRoutes } from "./routes/knowledges";
import { authMiddleware } from "./middlewares/auth.middleware";
import geminiRoutes from "./routes/gemini";
import { set } from "date-fns";
import { setupRoutes } from "./routes/setup.route";

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
  .route("/bots/knowledges", knowledgesRoutes)
  .route("/bots/gemini", geminiRoutes)
  .route("/bots/setup", setupRoutes)
// .route("/bots/embedding", textEmbeddingRoutes)
// .route("/webhook", webhookRoutes);

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: WorkerEnv) {
    await handleQueueMessage(batch, env);
  },
};

export type AppType = typeof app;
