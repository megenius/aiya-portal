import { Hono } from "hono";
import { authMiddleware } from "./middleware/auth";
import { authRoutes } from "./routes/auth";
import { itemRoutes } from "./routes/items";
import { adminRoutes } from "./routes/admin";
import { meRoutes } from "./routes/me";
import { fileRoutes } from "./routes/file";
import { workspacesRoutes } from "./routes/workspaces";
import { facebookRoutes } from "./routes/facebook";
import { voucherRoutes } from "./routes/voucher";

import { cache } from "hono/cache";
import { Env } from "./types/hono.types";
import { s3Routes } from "./routes/s3";
import { cors } from "hono/cors";
import { usersRoutes } from "./routes/users";

const app = new Hono<Env>()
  .basePath("/api")
  .use("*", async (c, next) => {
  if (
    !c.req.path.startsWith("/api/auth") &&
    !c.req.path.startsWith("/api/files") &&
    !c.req.path.startsWith("/api/users")
  ) {
    return authMiddleware(c, next);
  }
  await next();
});
// .get(
//   '*',
//   cache({
//     cacheName: 'portal-api',
//     cacheControl: 'max-age=15',
//   })
// )
app
  .use(
    "/*",
    cors({
      origin: ["https://localhost:4243", "https://liff.aiya.me"],
      allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowHeaders: ["Content-Type", "Authorization"],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
      credentials: true,
    })
  )
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
  .onError((err, c) => {
    return c.json({ error: err.message });
  });

export default app;

export type AppType = typeof app;
