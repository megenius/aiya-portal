import { Hono } from "hono";
import { setupRoutes } from "./routes/setup.route";
import { Env } from "./types/hono.types";
import { cache } from "hono/cache";
import { billingsRoutes } from "./routes/billings";
import { authMiddleware } from "./middlewares/auth.middleware";

const app = new Hono<Env>()
  .basePath("/api")
  // .get(
  //   "*",
  //   cache({
  //     cacheName: "my-app",
  //     cacheControl: "max-age=3600",
  //   })
  // )
  .use("*", async (c, next) => {
    if (
      !c.req.path.startsWith("/api/billing/stripe/webhook")
    ) {
      return authMiddleware(c, next);
    }
    await next();
  })
  .route("/billing", billingsRoutes)
  // .route("/billing/setup", setupRoutes)
  .get("/billing/health", async (c) => {
    return c.json({ status: "ok" });
  });

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: WorkerEnv) {},
};
