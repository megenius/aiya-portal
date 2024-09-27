import { requestId } from "hono/request-id";

// Function to log forward results
export async function logForward(c: any, destination: string, success: boolean, status: number | null, statusText: string | null, error: string | null) {
  const id = requestId();
  // await c.env.DB.prepare(`
  //   INSERT INTO forward_logs (id, destination, success, status, status_text, error)
  //   VALUES (?, ?, ?, ?, ?, ?)
  // `)
  // .bind(id, destination, success ? 1 : 0, status, statusText, error)
  // .run();
  return id;
}