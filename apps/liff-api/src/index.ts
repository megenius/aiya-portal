import { Hono } from "hono";
import { handleQueueMessage } from "./handlers/queue.handler";
import { advanceProfileRoutes } from "./routes/advanceprofile";
import { leadSubmissionsRoutes } from "./routes/leadSubmissions";
import { liffRoutes } from "./routes/liff";
import pointTransactionsRouter from "./routes/pointtransactions.routes";
import { voucherRoutes } from "./routes/voucher";
import { Env } from "./types/hono.types";
import { profileRoutes } from "./routes/profile";

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
  .route("/lead-submissions", leadSubmissionsRoutes)
  .route("/advance-profiles", advanceProfileRoutes)
  .route("/point-transactions", pointTransactionsRouter); // Added route for point transactions
  .route("/profiles", profileRoutes)

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: WorkerEnv) {
    await handleQueueMessage(batch, env);
  },
};
