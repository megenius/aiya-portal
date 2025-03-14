import { WebhookEvent } from "@line/bot-sdk";
import { Logger, LogLevel } from "@repo/shared/utils";
import { Context } from "hono";

const logger = new Logger("log", LogLevel.DEBUG);

export async function handle(c: Context, body: any): Promise<void> {
  try {
    const { success } = await c.env.DB.prepare(
      `
        INSERT INTO webhook_logs (id, platform, payload)
        VALUES (?, ?, ?)
      `
    )
      .bind(c.var.requestId, "facebook", JSON.stringify(body))
      .run();

    if (success) {
      logger.debug("Logged:", c.var.requestId);
    } else {
      logger.error("Log failed");
    }
  } catch (error) {
    logger.error("Log failed", error);
  }
}
