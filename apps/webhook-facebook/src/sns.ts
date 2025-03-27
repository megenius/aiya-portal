// Function to log SNS sent messages
export async function logSNSSent(
  c: any,
  messageId: string,
  providerId: string,
  event: any,
  success: boolean,
  processingTime: number
) {
  return
  const id = crypto.randomUUID();
  await c.env.DB.prepare(
    `
    INSERT INTO sns_logs (id, message_id, provider_id, event_payload, success, processing_time)
    VALUES (?, ?, ?, ?, ?, ?)
  `
  )
    .bind(
      id,
      messageId,
      providerId,
      JSON.stringify(event),
      success ? 1 : 0,
      processingTime
    )
    .run();
  return id;
}
