import { Hono } from "hono";
import { authMiddleware } from "./middleware/auth";
import { authRoutes } from "./routes/auth";
import { itemRoutes } from "./routes/items";
import { adminRoutes } from "./routes/admin";
import { meRoutes } from "./routes/me";
import { Env } from "./types/hono.types";
import { fileRoutes } from "./routes/file";
import { workspacesRoutes } from "./routes/workspaces";
import { facebookRoutes } from "./routes/facebook";
import { cache } from "hono/cache";

const app = new Hono<Env>()
  .basePath("/api")
  .use("*", async (c, next) => {
    if (
      !c.req.path.startsWith("/api/auth") &&
      !c.req.path.startsWith("/api/files")
    ) {
      return authMiddleware(c, next);
    }
    await next();
  })
  // .get(
  //   '*',
  //   cache({
  //     cacheName: 'portal-api',
  //     cacheControl: 'max-age=15',
  //   })
  // )
  .route("/auth", authRoutes)
  .route("/items", itemRoutes)
  .route("/admin", adminRoutes)
  .route("/me", meRoutes)
  .route("/files", fileRoutes)
  .route("/workspaces", workspacesRoutes)
  .route("/facebook", facebookRoutes)
  .onError((err, c) => {
    return c.json({ error: err.message });
  });

export default app;

export type AppType = typeof app;
