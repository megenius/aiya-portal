import { Hono } from "hono";
import { webhookRouter } from "./routes/webhook";
import { cleanupRouter } from "./routes/cleanup";
import { logger } from "hono/logger";
import { compress } from "hono/compress";
import { requestId, RequestIdVariables } from "hono/request-id";
import { WorkerEnv } from "./types";
import { channelMiddleware } from "./middlewares/channel.middleware";
import { sign } from "hono/jwt";

const app = new Hono<WorkerEnv>().basePath("/api/v2/line");

app.use(logger());
// app.use(compress());
app.use("*", requestId());

app.use("*", async (c, next) => {
  await c.env.DB.batch([
    c.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS webhook_logs (
        id TEXT PRIMARY KEY,
        platform TEXT NOT NULL,
        payload TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `),
    c.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS channels (
        id TEXT PRIMARY KEY,
        platform TEXT NOT NULL,
        provider_id TEXT NOT NULL,
        payload TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `),
    c.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS error_logs (
        id TEXT PRIMARY KEY,
        error_type TEXT NOT NULL,
        error_message TEXT NOT NULL,
        stack_trace TEXT,
        related_id TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `),
    c.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS sns_logs (
        id TEXT PRIMARY KEY,
        message_id TEXT NOT NULL,
        provider_id TEXT NOT NULL,
        event_payload TEXT NOT NULL,
        success BOOLEAN,
        processing_time INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `),
    c.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS forward_logs (
        id TEXT PRIMARY KEY,
        destination TEXT NOT NULL,
        success BOOLEAN NOT NULL,
        status INTEGER,
        status_text TEXT,
        error TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `),
  ]);
  await next();
});

app.route("/webhook", webhookRouter);
app.route("/cleanup", cleanupRouter);

app.post("/set-value", async (c) => {
  const body = await c.req.json();
  console.log("body", body);
  const key = `channel.providerId=${body.provider_id}`;
  await c.env.KV_PORTAL.put(key, JSON.stringify(body));
  return c.json({});
});

app.get("/:providerId", async (c) => {
  const providerId = c.req.param("providerId");
  const cache = await c.env.KV_PORTAL.get(`channel.providerId=${providerId}`);
  let channel;
  if (cache) {
    channel = JSON.parse(cache);
  }
  return c.json(channel);
});

app.get("*", (c) => {
  return c.text("AIYA");
});

export default app;
