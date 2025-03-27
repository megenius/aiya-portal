import { Context } from "hono";
import { getErrorMessage, logError } from "../errors";
import { Bindings } from "../types";

interface CleanupResult {
  success: boolean;
  deletedWebhookLogs?: number;
  deletedErrorLogs?: number;
  deletedSNSLogs?: number;
  error?: string;
  errorId?: string;
}

export const cleanupHandler = async (
  c: Context<{ Bindings: Bindings }>
): Promise<CleanupResult> => {
  try {
    const sevenDaysAgo = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000
    ).toISOString();

    console.log("start cleanup", sevenDaysAgo);

    const [webhookResult, errorResult, snsResult] = await c.env.DB.batch([
      c.env.DB.prepare(
        `DELETE FROM webhook_logs WHERE created_at < ?`
      ).bind(sevenDaysAgo),
      c.env.DB.prepare(
        `DELETE FROM error_logs WHERE created_at < ?`
      ).bind(sevenDaysAgo),
      c.env.DB.prepare(
        `DELETE FROM sns_logs WHERE created_at < ?`
      ).bind(sevenDaysAgo),
    ]);

    return {
      success: true,
      deletedWebhookLogs: webhookResult.meta.changes,
      deletedErrorLogs: errorResult.meta.changes,
      deletedSNSLogs: snsResult.meta.changes,
    };
  } catch (error: unknown) {
    const errorId = await logError(c, "CLEANUP_ERROR", error);
    return {
      success: false,
      error: getErrorMessage(error),
      errorId,
    };
  }
};