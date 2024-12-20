import { Hono } from "hono";
import { setupRoutes } from "./routes/setup.route";
import { Env } from "./types/hono.types";
import { cache } from "hono/cache";

const app = new Hono<Env>()
  .basePath("/api/affiliate")
  .get(
    "*",
    cache({
      cacheName: "my-app",
      cacheControl: "max-age=3600",
    })
  )
  .route("/setup", setupRoutes);

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: WorkerEnv) {},
};



