import { Context } from "hono";
import { Bindings } from "../types";
import { cleanupHandler } from "./cleanupHandler";
import { logError } from "~/errors";

interface ScheduleResult {
  success: boolean;
  message?: string;
  error?: string;
  errorId?: string;
  details?: {
    deletedWebhookLogs?: number;
    deletedErrorLogs?: number;
    deletedSNSLogs?: number;
    deletedForwardLogs?: number;
  };
}

export const scheduleHandler = async (
  c: Context<{ Bindings: Bindings }>
): Promise<ScheduleResult> => {
  try {
    const startTime = Date.now();
    console.log(`Schedule handler started at ${new Date(startTime).toISOString()}`);

    // Run cleanup handler
    const cleanupResult = await cleanupHandler(c);
    
    if (!cleanupResult.success) {
      throw new Error(cleanupResult.error || "Cleanup failed");
    }

    const endTime = Date.now();
    const duration = endTime - startTime;

    return {
      success: true,
      message: `Scheduled cleanup completed in ${duration}ms`,
      details: {
        deletedWebhookLogs: cleanupResult.deletedWebhookLogs,
        deletedErrorLogs: cleanupResult.deletedErrorLogs,
        deletedSNSLogs: cleanupResult.deletedSNSLogs
      }
    };
  } catch (error: unknown) {
    const errorId = await logError(c, "SCHEDULE_ERROR", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      errorId
    };
  }
};