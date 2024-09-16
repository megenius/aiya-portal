import { WebhookEvent } from "@line/bot-sdk";
import { Context } from "hono";
import { Logger, LogLevel } from "@repo/shared/utils";
import {
  SNSClient,
  PublishCommand,
  SNSClientConfig,
} from "@aws-sdk/client-sns";
import { logSNSSent } from "../utils/sns";
import { logError } from "../utils/errors";

const logger = new Logger("sns", LogLevel.DEBUG);

let snsClient: SNSClient | null = null;

function initializeSNSClient(config: SNSClientConfig): SNSClient {
  if (!snsClient) {
    snsClient = new SNSClient(config);
  }
  return snsClient;
}

function validateEnvironmentVariables(
  env: Record<string, string | undefined>
): void {
  const requiredVars = [
    "AWS_REGION",
    "AWS_ACCESS_KEY_ID",
    "AWS_SECRET_ACCESS_KEY",
    "SNS_TOPIC_ARN",
  ];
  const missingVars = requiredVars.filter((varName) => !env[varName]);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
  }
}

export async function handle(
  c: Context,
  event: WebhookEvent,
  providerId: string
): Promise<void> {
  try {
    validateEnvironmentVariables(c.env);

    const sentTime = new Date(event.timestamp || new Date());
    const processedTime = new Date();
    const processingTime = processedTime.getTime() - sentTime.getTime();

    const {
      AWS_REGION,
      AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY,
      SNS_TOPIC_ARN,
    } = c.env as Record<string, string>;

    const snsClient = initializeSNSClient({
      region: AWS_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });

    const payload = { event, providerId };
    const command = new PublishCommand({
      Message: JSON.stringify(payload),
      TopicArn: SNS_TOPIC_ARN,
      MessageGroupId: "webhook-line-sns",
      MessageDeduplicationId: event.webhookEventId,
    });

    const data = await snsClient.send(command);

    if (data.MessageId) {
      logger.info(`Message sent to SNS. MessageId: ${data.MessageId}`);
      await logSNSSent(
        c,
        data.MessageId,
        providerId,
        payload,
        true,
        processingTime
      );
    } else {
      logger.warn("Message sent to SNS, but no MessageId was returned.");
      await logSNSSent(c, "", providerId, payload, false, processingTime);
    }

    logger.debug(`Processing time: ${processingTime} ms`);
  } catch (error) {
    logger.error("Error in SNS handler:", error);
    await logSNSSent(
      c,
      "",
      providerId,
      JSON.stringify({ event, providerId }),
      false,
      0
    );
    await logError(c, "SNS_HANDLER_ERROR", error);
    throw error;
  }
}
