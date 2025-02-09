import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { z } from "zod";
import { Env } from "~/types/hono.types";
import { LineTransformer } from "~/transforms/line.transform";
import { WebhookEvent } from "~/types/events";
import { LineWebhookPayload } from "~/types/line.types";
import { verifyLineSignature } from "~/utils/line";
import { Logger } from "~/utils/logger";

const factory = createFactory<Env>();
const transformer = new LineTransformer();
const log = new Logger("LineWebhook");

// const webhookSchema = z.object({
//   events: z.array(
//     z.object({
//       type: z.string(),
//       timestamp: z.number(),
//       source: z.object({
//         userId: z.string().optional(),
//         groupId: z.string().optional(),
//         roomId: z.string().optional(),
//       }),
//       message: z.object({
//         id: z.string(),
//         type: z.string(),
//         text: z.string().optional(),
//       }).optional(),
//     })
//   ),
// });


export const webhook = factory.createHandlers(logger(), async (c) => {
  const botId = c.req.param("botId");
  
  try {
    // Validate bot ID
    if (!botId) {
      throw new WebhookError("Missing bot ID in request path", 400);
    }

    // Verify LINE signature
    const signature = c.req.header("x-line-signature");
    if (!signature) {
      throw new WebhookError("Missing LINE signature", 401);
    }

    // const rawBody = await c.req.raw.clone().text();
    // const isValid = await verifyLineSignature(rawBody, signature, c.env.LINE_CHANNEL_SECRET);
    // if (!isValid) {
    //   throw new WebhookError("Invalid LINE signature", 401);
    // }

    // Parse and validate payload
    // const body = JSON.parse(rawBody) as LineWebhookPayload;
    const body = await c.req.json();
    const validatedBody = body //webhookSchema.parse(body);

    log.info(`Processing webhook for bot ${botId}`, { events: validatedBody.events.length });
    const events = transformer.toUnified(validatedBody);

    // Process events in parallel
    await Promise.all(
      events.map(async (event) => {
        try {
          await saveEvent(event);
        } catch (error) {
          log.error(`Failed to save event ${event.id}`, { error });
          // Continue processing other events
        }
      })
    );

    return c.json({
      status: "success",
      message: "Processed LINE webhook",
      processed_events: events.length,
    });

  } catch (error) {
    if (error instanceof WebhookError) {
      log.warn(`Webhook error: ${error.message}`, { botId, statusCode: error.statusCode });
      return c.json({ status: "error", message: error.message }, error.statusCode as any);
    }

    if (error instanceof z.ZodError) {
      log.warn("Invalid webhook payload", { botId, issues: error.issues });
      return c.json({ status: "error", message: "Invalid webhook payload" }, 400);
    }

    log.error("Unexpected error in webhook handler", { error, botId });
    return c.json({ status: "error", message: "Internal server error" }, 500);
  }
});

async function saveEvent(event: WebhookEvent): Promise<void> {
  // TODO: Implement event storage
  log.debug(`Saving event ${event.id}`);
  console.log(event);
}

class WebhookError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = "WebhookError";
  }
}
