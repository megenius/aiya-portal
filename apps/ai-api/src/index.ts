import { Hono } from "hono";
import { queqRoutes } from "./routes/queq";
import { Env } from "./types/hono.types";
import { cache } from "hono/cache";

const app = new Hono<Env>()
  .basePath("/api/ai")
  .get(
    "*",
    cache({
      cacheName: "my-app",
      cacheControl: "max-age=3600",
    })
  )
  .route("/queq", queqRoutes);

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: WorkerEnv) {},
};
