import { Hono } from "hono";
import { liffRoutes } from "./routes/liff";
import { handleQueueMessage } from "./handlers/queue.handler";
import { Env } from "./types/hono.types";
import { cache } from "hono/cache";

const app = new Hono<Env>()
  .basePath("/api")
  // .get(
  //   "*",
  //   cache({
  //     cacheName: "my-app",
  //     cacheControl: "max-age=3600",
  //   })
  // )
  .route("/liff", liffRoutes);

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: WorkerEnv) {
    await handleQueueMessage(batch, env);
  },
};