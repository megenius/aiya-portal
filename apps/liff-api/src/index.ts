import { Hono } from "hono";
import { handleQueueMessage } from "./handlers/queue.handler";
import { leadSubmissionsRoutes } from "./routes/leadSubmissions";
import { liffRoutes } from "./routes/liff";
import pointTransactionsRouter from "./routes/pointtransactions.routes";
import { voucherRoutes } from "./routes/voucher";
import { Env } from "./types/hono.types";
import { profileRoutes } from "./routes/profile";
import { authMiddleware } from "./middlewares/auth.middleware";
import { authRoutes } from "./routes/auth.route";
import { meRoutes } from "./routes/me.route";

const app = new Hono<Env>()
  .basePath("/api")
  .get("/health", (c) => {
    return c.json({ status: "liff-api is ok" });
  })
  .use("*", async (c, next) => {
    if (
      !c.req.path.startsWith("/api/auth") &&
      !c.req.path.startsWith("/api/profiles") &&
      !c.req.path.startsWith("/api/liff")
    ) {
      return authMiddleware(c, next);
    }
    await next();
  })
  .route("/auth", authRoutes)
  .route("/me", meRoutes)
  .route("/liff", liffRoutes)
  .route("/vouchers", voucherRoutes)
  .route("/lead-submissions", leadSubmissionsRoutes)
  .route("/point-transactions", pointTransactionsRouter) // Added route for point transactions
  .route("/profiles", profileRoutes)
  .onError((err, c) => {
    return c.json({ error: err.message });
  });

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch, env: WorkerEnv) {
    await handleQueueMessage(batch, env);
  },
};
