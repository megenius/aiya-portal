import { Context } from "hono";
import { Logger, LogLevel } from "@repo/shared/utils";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { logError } from "../errors";
import { logSNSSent } from "../sns";
import { Messaging } from "~/@types/app";

const logger = new Logger("sns", LogLevel.DEBUG);

export async function handle(
  c: Context,
  event: Messaging,
  providerId: string
): Promise<void> {
  const sentTime = new Date(event.timestamp);

  const processedTime = new Date();
  const processingTime = processedTime.getTime() - sentTime.getTime();

  const {
    AWS_REGION,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    SNS_TOPIC_ARN,
  } = c.env;

  // console.log({ AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, SNS_TOPIC_ARN });
  

  const snsClient = new SNSClient({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
  });

  
  try {
    const command = new PublishCommand({
      Message: JSON.stringify({ event, providerId }),
      TopicArn: SNS_TOPIC_ARN,
      MessageGroupId: "webhook-facebook-sns",
      MessageDeduplicationId: await calculateMD5(JSON.stringify({ event, providerId })),
    });
    logger.debug("Sending", JSON.stringify({ event, providerId }));
    const data = await snsClient.send(command);
    logger.info(`Message sent to SNS. MessageId: ${data.MessageId}`);

    if (data.MessageId) {
      await logSNSSent(c, data.MessageId, providerId, event, processingTime);
    }
  } catch (error) {
    logger.error("Error publishing to SNS:", error);
    await logError(c, "SNS_PUBLSIH_ERROR", error);
    throw error;
  }

  logger.debug(`Processing time: ${processingTime} ms`);
}

async function calculateMD5(message: string) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("MD5", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}
