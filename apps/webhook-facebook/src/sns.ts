import { requestId } from "hono/request-id";

// Function to log SNS sent messages
export async function logSNSSent(
  c: any,
  messageId: string,
  providerId: string,
  event: any,
  processingTime: number
) {
  const id = requestId();
  // await c.env.DB.prepare(
  //   `
  //   INSERT INTO sns_logs (id, message_id, provider_id, event_payload, processing_time)
  //   VALUES (?, ?, ?, ?, ?)
  // `
  // )
  //   .bind(id, messageId, providerId, JSON.stringify(event), processingTime)
  //   .run();
  return id;
}
