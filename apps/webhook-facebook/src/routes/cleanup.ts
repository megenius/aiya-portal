import { Context, Hono } from "hono";
import { getErrorMessage, logError } from "../errors";
import { Bindings } from "../types";

const cleanupRouter = new Hono<{
  Bindings: Bindings;
}>();

cleanupRouter.get("/", async (c: Context) => {
  try {
    const sevenDaysAgo = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000
    ).toISOString();

    const webhookResult = await c.env.DB.prepare(
      `
      DELETE FROM webhook_logs 
      WHERE created_at < ?
    `
    )
      .bind(sevenDaysAgo)
      .run();

    const errorResult = await c.env.DB.prepare(
      `
      DELETE FROM error_logs
      WHERE created_at < ?
    `
    )
      .bind(sevenDaysAgo)
      .run();

    const snsResult = await c.env.DB.prepare(
      `
      DELETE FROM sns_logs
      WHERE created_at < ?
    `
    )
      .bind(sevenDaysAgo)
      .run();

    return c.json({
      success: true,
      deletedWebhookLogs: webhookResult.changes,
      deletedErrorLogs: errorResult.changes,
      deletedSNSLogs: snsResult.changes,
    });
  } catch (error: unknown) {
    const errorId = await logError(c, "CLEANUP_ERROR", error);
    return c.json(
      { success: false, error: getErrorMessage(error), errorId },
      500
    );
  }
});

export { cleanupRouter };
