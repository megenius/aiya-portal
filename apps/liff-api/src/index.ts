import { Hono } from "hono";
import { handleQueueMessage } from "./handlers/queue.handler";
import { leadSubmissionsRoutes } from "./routes/leadSubmissions";
import { liffRoutes } from "./routes/liff";
import { voucherRoutes } from "./routes/voucher";
import { Env } from "./types/hono.types";

const app = new Hono<Env>()
  .basePath("/api")
  .get(
    "*",
    // cache({
    //   cacheName: "my-app",
    //   cacheControl: "max-age=3600",
    // })
  )
  .route("/liff", liffRoutes)
  .route("/vouchers", voucherRoutes)
  .route("/lead-submissions", leadSubmissionsRoutes);

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: WorkerEnv) {
    await handleQueueMessage(batch, env);
  },
};
