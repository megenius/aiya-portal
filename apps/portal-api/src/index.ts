import { Hono } from "hono";
import { authMiddleware } from "./middleware/auth";
import { adminRoutes } from "./routes/admin";
import { authRoutes } from "./routes/auth";
import { facebookRoutes } from "./routes/facebook";
import { fileRoutes } from "./routes/file";
import { itemRoutes } from "./routes/items";
import { meRoutes } from "./routes/me";
import { publicRoutes } from "./routes/public.route";
import { voucherRoutes } from "./routes/voucher";
import { workspacesRoutes } from "./routes/workspaces";

import { cors } from "hono/cors";
import { clientRoutes } from "./routes/client.route";
import { hubRoutes } from "./routes/hub";
import { s3Routes } from "./routes/s3";
import { usersRoutes } from "./routes/users";
import { webhookRoutes } from "./routes/webhoook";
import { Env } from "./types/hono.types";

const app = new Hono<Env>()
  .basePath("/api")
  .route("/client", clientRoutes)

  .use("*", async (c, next) => {
    if (
      !c.req.path.startsWith("/api/auth") &&
      !c.req.path.startsWith("/api/files") &&
      !c.req.path.startsWith("/api/users") &&
      !c.req.path.startsWith("/api/billings/stripe/webhook") &&
      !c.req.path.startsWith("/api/webhook")
    ) {
      return authMiddleware(c, next);
    }
    await next();
  })
  .use(
    "/*",
    cors({
      origin: ["https://localhost:4243", "https://liff.aiya.me", "https://portal-dev.aiya.me", "https://portal.aiya.me"],
      allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowHeaders: ["Content-Type", "Authorization"],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
      credentials: true,
    })
  )
  .route("/", publicRoutes)
  .route("/auth", authRoutes)
  .route("/items", itemRoutes)
  .route("/admin", adminRoutes)
  .route("/me", meRoutes)
  .route("/files", fileRoutes)
  .route("/workspaces", workspacesRoutes)
  .route("/facebook", facebookRoutes)
  .route("/s3", s3Routes)
  .route("/vouchers", voucherRoutes)
  .route("/users", usersRoutes)
  .route("/webhook", webhookRoutes)
  .route("/chathubs",hubRoutes)
  .onError((err, c) => {
    return c.json({ error: err.message });
  });

export default app;

export type AppType = typeof app;
