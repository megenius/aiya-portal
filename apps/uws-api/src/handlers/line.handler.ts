import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { z } from "zod";
import { Env } from "~/types/hono.types";
import { LineTransformer } from "~/transforms/line.transform";
import { WebhookEvent } from "~/types/events";
import { LineMessageEvent, LineWebhookPayload } from "~/types/line.types";
import { verifyLineSignature } from "~/utils/line";
import { Logger } from "~/utils/logger";
import { channelMiddleware } from "~/middlewares/channel.middleware";
import { FileService } from "~/services/file.service";

interface DownloadResult {
  success: boolean;
  messageId: string;
  contentKey?: string;
  error?: ContentDownloadError;
}

interface ProcessResult {
  success: boolean;
  eventId: string;
  error?: unknown;
}

interface Statistics {
  succeeded: number;
  failed: number;
}

interface WebhookResponse {
  status: "success" | "error";
  message: string;
  stats: {
    total_events: number;
    processed: Statistics;
    content_downloads: Statistics;
  };
}

const factory = createFactory<Env>();
const transformer = new LineTransformer();
const log = new Logger("LineWebhook");

export const webhook = factory.createHandlers(
  logger(),
  channelMiddleware,
  async (c) => {
    log.debug("Processing LINE webhook request");
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

      const body = (await c.req.json()) as LineWebhookPayload;
      const providerId = body.destination;
      const channelService = c.get("channelService");
      const channel = await channelService.getChannel(providerId);

      // log.debug("Processing LINE webhook", { providerId, channel });

      if (!channel) {
        throw new WebhookError("Invalid LINE provider ID", 400);
      }
      // const rawBody = JSON.stringify(body);
      // const isValid = await verifyLineSignature(rawBody, signature, channel.provider_secret);
      // if (!isValid) {
      //   throw new WebhookError("Invalid LINE signature", 401);
      // }

      let results: Statistics = { succeeded: 0, failed: 0 };

      if (isMessageWithContent(body.events)) {
        log.info("Processing messages with content", {
          count: body.events.filter(
            (e) =>
              e.message && ["image", "video", "file"].includes(e.message.type)
          ).length,
        });

        const fileService = new FileService(c.env.DB);
        const contentHandler = new LineContentHandler(
          channel.provider_access_token,
          c.env.CONTENT_BUCKET,
          fileService,
          channel.provider_id  // Pass channel ID to content handler
        );

        const downloadResults = await Promise.allSettled(
          body.events.map(async (event) => {
            if (!event.message) return null;

            const contentTypes = ["image", "video", "file"] as const;
            if (
              contentTypes.includes(
                event.message.type as (typeof contentTypes)[number]
              )
            ) {
              try {
                const contentKey = await contentHandler.handleContent(
                  event.message.id,
                  event.source.userId ?? "unknown",
                  event.message.type
                );

                (event as any).contentKey = contentKey;

                return {
                  success: true,
                  messageId: event.message.id,
                  contentKey,
                } satisfies DownloadResult;
              } catch (error) {
                const downloadError = new ContentDownloadError(
                  event.message.id,
                  error instanceof Error ? error : new Error(String(error))
                );

                log.error("Content download failed", {
                  messageId: event.message.id,
                  error: downloadError,
                  type: event.message.type,
                });

                // Type-safe event augmentation
                (event as any).contentError = {
                  message: downloadError.message,
                  cause: downloadError.cause?.message,
                };

                return {
                  success: false,
                  messageId: event.message.id,
                  error: downloadError,
                } satisfies DownloadResult;
              }
            }
            return null;
          })
        );

        // Type-safe results reduction
        results = downloadResults.reduce(
          (acc: Statistics, result) => {
            if (result.status === "fulfilled" && result.value) {
              if (result.value.success) acc.succeeded++;
              else acc.failed++;
            }
            return acc;
          },
          { succeeded: 0, failed: 0 }
        );

        log.info("Content download summary", results);
      }

      log.info(`Processing webhook for bot ${botId}`, {
        events: body.events.length,
      });
      const events = transformer.toUnified(body);

      // Process events in parallel with proper typing
      const processResults = await Promise.allSettled(
        events.map(async (event) => {
          try {
            await saveEvent(event);
            return {
              success: true,
              eventId: event.id,
            } satisfies ProcessResult;
          } catch (error) {
            log.error(`Failed to save event`, {
              eventId: event.id,
              error: error instanceof Error ? error.message : "Unknown error",
            });
            return {
              success: false,
              eventId: event.id,
              error,
            } satisfies ProcessResult;
          }
        })
      );

      // Type-safe stats calculation
      const stats: Statistics = processResults.reduce(
        (acc: Statistics, result) => {
          if (result.status === "fulfilled") {
            if (result.value.success) acc.succeeded++;
            else acc.failed++;
          } else {
            acc.failed++;
          }
          return acc;
        },
        { succeeded: 0, failed: 0 }
      );

      return c.json({
        status: "success",
        message: "Processed LINE webhook",
        stats: {
          total_events: events.length,
          processed: stats,
          content_downloads: results,
        },
      } satisfies WebhookResponse);
    } catch (error) {
      if (error instanceof WebhookError) {
        log.warn(`Webhook error: ${error.message}`, {
          botId,
          statusCode: error.statusCode,
        });
        return c.json(
          { status: "error", message: error.message },
          error.statusCode as any
        );
      }

      if (error instanceof z.ZodError) {
        log.warn("Invalid webhook payload", { botId, issues: error.issues });
        return c.json(
          { status: "error", message: "Invalid webhook payload" },
          400
        );
      }

      log.error("Unexpected error in webhook handler", { error, botId });
      return c.json({ status: "error", message: "Internal server error" }, 500);
    }
  }
);

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

// Add this type guard
function isMessageWithContent(
  events: LineWebhookPayload["events"]
): events is LineMessageEvent[] {
  return events.some(
    (event): event is LineMessageEvent =>
      event.type === "message" &&
      "message" in event &&
      ["image", "video", "file"].includes(event.message.type)
  );
}

// Add custom error types
class ContentDownloadError extends WebhookError {
  public cause: Error;

  constructor(messageId: string, cause: Error) {
    super(`Failed to download content for message ${messageId}`, 500);
    this.cause = cause;
  }
}

class LineContentHandler {
  private readonly log = new Logger("LineContentHandler");

  constructor(
    private readonly channelToken: string,
    private readonly bucket: R2Bucket,
    private readonly fileService: FileService,
    private readonly channelId: string
  ) {}

  async handleContent(
    messageId: string,
    userId: string,
    type: string
  ): Promise<string> {
    try {
      const { content, size, mimeType } = await this.downloadContent(messageId);
      const contentKey = await this.storeContent(content, messageId, userId, type);

      // Log the file to D1 with channel_id
      await this.fileService.createFile({
        message_id: messageId,
        user_id: userId,
        channel_id: this.channelId,
        content_type: type,
        content_key: contentKey,
        provider: 'line',
        size,
        mime_type: mimeType,
        metadata: {
          channelToken: this.channelToken.slice(-8),
        }
      });

      this.log.debug("Content handled successfully", {
        messageId,
        contentKey,
        type,
      });

      return contentKey;
    } catch (error) {
      this.log.error("Failed to handle content", {
        messageId,
        error: error instanceof Error ? error.message : "Unknown error",
      });
      throw new ContentDownloadError(
        messageId,
        error instanceof Error ? error : new Error(String(error))
      );
    }
  }

  private async downloadContent(messageId: string): Promise<{ 
    content: ArrayBuffer; 
    size: number; 
    mimeType: string; 
  }> {
    log.debug("Downloading content", { messageId, token: this.channelToken });
    //
    const response = await fetch(
      `https://api-data.line.me/v2/bot/message/${messageId}/content`,
      {
        headers: {
          Authorization: `Bearer ${this.channelToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      log.error("Content download failed", {
        messageId,
        status: response.status,
      });
      throw new Error(`Failed to download content: ${response.statusText}`);
    }

    log.debug("Content downloaded", {
      messageId,
      size: response.headers.get("content-length"),
    });

    const mimeType = response.headers.get('content-type') ?? 'application/octet-stream';
    const size = parseInt(response.headers.get('content-length') ?? '0', 10);
    const content = await response.arrayBuffer();

    return { content, size, mimeType };
  }

  private async storeContent(
    content: ArrayBuffer,
    messageId: string,
    userId: string,
    type: string
  ): Promise<string> {
    const timestamp = new Date().toISOString();
    const extension = this.getExtensionForType(type);
    const contentKey = `line/${userId}/${messageId}${extension}`;

    await this.bucket.put(contentKey, content, {
      customMetadata: {
        userId,
        messageId,
        contentType: type,
        timestamp,
      },
    });

    return contentKey;
  }

  private getExtensionForType(type: string): string {
    switch (type) {
      case "image":
        return ".jpg";
      case "video":
        return ".mp4";
      case "file":
        return "";
      default:
        return "";
    }
  }
}
