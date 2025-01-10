import { Hono } from "hono";
import { setupRoutes } from "./routes/setup.route";
import { Env } from "./types/hono.types";
import { cache } from "hono/cache";
import { billingsRoutes } from "./routes/billings";
import { authMiddleware } from "./middlewares/auth.middleware";
import { websocketRoutes } from "./routes/websocket.route";
import { handleBillingQueueMessage } from "./handlers/queue.handler";
import { WorkerEnv } from "./types/worker-configuration";
export * from "./durables/SubscriptionDurable";
export * from "./durables/CounterDurable";

const app = new Hono<Env>()
  // .get(
  //   "*",
  //   cache({
  //     cacheName: "my-app",
  //     cacheControl: "max-age=3600",
  //   })
  // )
  .use("*", async (c, next) => {
    console.log("c.req.path", c.req.path);
    if (
      c.req.path.startsWith("/api/billing/stripe/webhook") ||
      c.req.path.startsWith("/api/billing/health") ||
      c.req.path.startsWith("/websocket")
    ) {
      await next();
    } else {
      return authMiddleware(c, next);
    }
  })
  .route("/websocket/billing", websocketRoutes)
  .route("/api/billing", billingsRoutes)
  .route("/api/billing/setup", setupRoutes)
  .get("/api/billing/health", async (c) => {
    return c.json({ status: "ok" });
  });

export default {
  fetch: app.fetch,
  async queue(
    batch: MessageBatch<{
      bot: string;
      type: string;
      count: number;
    }>,
    env: WorkerEnv
  ) {
    if (batch.queue === "billing-queue" || batch.queue === "billing-queue-prod") {
      await handleBillingQueueMessage(batch, env);
    }
  },
};
