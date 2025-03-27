import { Hono } from "hono";
import { webhookRouter } from "./routes/webhook";
import { cleanupRouter } from "./routes/cleanup";
import { logger } from "hono/logger";
import { requestId, RequestIdVariables } from "hono/request-id";
import { Bindings } from "./types";
import type {
  ScheduledController,
  ExecutionContext,
} from "@cloudflare/workers-types";
import { scheduleHandler } from "./handlers/scheduleHandler";

const app = new Hono<{
  Bindings: Bindings;
  Variables: RequestIdVariables;
}>().basePath("/api/v2/facebook");

app.use(logger());
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

// Export default for Cloudflare Workers
export default {
  // Handle HTTP requests with Hono
  fetch: app.fetch,

  scheduled: async (
    controller: ScheduledController,
    env: Bindings,
    ctx: ExecutionContext
  ) => {
    console.log(`Running scheduled task at ${new Date().toISOString()}`);
    
    // Create a mock Hono context for the scheduled task
    const mockContext = {
      env,
      executionCtx: ctx,
      // Add any other required context properties
    };

    try {
      const result = await scheduleHandler(mockContext as any);
      console.log('Schedule handler result:', result);
    } catch (error) {
      console.error('Schedule handler error:', error);
    }
  }
};
