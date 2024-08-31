import { Context } from "hono";
import { requestId } from "hono/request-id";

export class AppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AppError";
  }
}

// Function to safely get error message
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

// Function to safely get error stack
function getErrorStack(error: unknown): string | undefined {
  if (error instanceof Error) return error.stack;
  return undefined;
}

export async function logError(
  c: any,
  errorType: string,
  error: unknown,
  relatedId: string | null = null
) {
  const id = requestId();
  // await c.env.DB.prepare(
  //   `
  //   INSERT INTO error_logs (id, error_type, error_message, stack_trace, related_id)
  //   VALUES (?, ?, ?, ?, ?)
  // `
  // )
  //   .bind(
  //     id,
  //     errorType,
  //     getErrorMessage(error),
  //     getErrorStack(error),
  //     relatedId
  //   )
  //   .run();
  return id;
}
