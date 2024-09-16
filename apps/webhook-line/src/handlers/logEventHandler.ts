import { WebhookEvent } from "@line/bot-sdk";
import { Context } from "hono";
import { Logger, LogLevel } from "@repo/shared/utils";
import { requestId } from "hono/request-id";

const logger = new Logger("log", LogLevel.DEBUG);

export async function handle(c: Context, body: any): Promise<void> {
  const { success } = await c.env.DB.prepare(
    `
      INSERT INTO webhook_logs (id, platform, payload)
      VALUES (?, ?, ?)
    `
  )
    .bind(c.var.requestId, "line", JSON.stringify(body))
    .run();

  if (success) {
    logger.debug("Logged:", c.var.requestId);
  } else {
    logger.error("Log failed");
  }
}
