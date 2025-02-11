import { Hono } from "hono";
import { Env } from "./types/hono.types";
import { authMiddleware } from "./middlewares/auth.middleware";
import { messageRoutes } from "./routes/message.route";
import { sessionRoutes } from "./routes/session.route";
import { userRoutes } from "./routes/user.route";
import { agentRoutes } from "./routes/agent.route";
import { templateRoutes } from "./routes/template.route";
import { queueRoutes } from "./routes/queue.route";
import { analyticsRoutes } from "./routes/analytics.route";
import { settingsRoutes } from "./routes/settings.route";
import { notificationRoutes } from "./routes/notification.route";
import { reportRoutes } from "./routes/report.route";
import { archiveRoutes } from "./routes/archive.route";
import { integrationRoutes } from "./routes/integration.route";

const app = new Hono<Env>()
  .use("*", async (c, next) => {
    console.log("c.req.path", c.req.path);
    if (c.req.path.startsWith("/api/v1")) {
      return authMiddleware(c, next);
    } else {
      await next();
    }
  })
  .route("/api/v1/messages", messageRoutes)
  .route("/api/v1/sessions", sessionRoutes)
  .route("/api/v1/users", userRoutes)
  .route("/api/v1/agents", agentRoutes)
  .route("/api/v1/templates", templateRoutes)
  .route("/api/v1/queues", queueRoutes)
  .route("/api/v1/analytics", analyticsRoutes)
  .route("/api/v1/settings", settingsRoutes)
  .route("/api/v1/notifications", notificationRoutes)
  .route("/api/v1/reports", reportRoutes)
  .route("/api/v1/archive", archiveRoutes)
  .route("/api/v1/integrations", integrationRoutes)
  .get("/api/v1/health", async (c) => {
    return c.json({ status: "ok" });
  });

export default {
  fetch: app.fetch,
};
