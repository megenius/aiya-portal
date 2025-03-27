import { Context } from "hono";
import { Logger, LogLevel } from "@repo/shared/utils";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { logError } from "../errors";
import { logSNSSent } from "../sns";
import { Messaging } from "~/@types/app";
import { AwsClient } from "aws4fetch";

const logger = new Logger("sns", LogLevel.DEBUG);

export async function handle(
  c: Context,
  event: Messaging,
  providerId: string
): Promise<void> {
  const sentTime = new Date(event.timestamp);

  const processedTime = new Date();
  const processingTime = processedTime.getTime() - sentTime.getTime();

  if (processingTime > 10000) {
    logger.warn("Processing time is too long", processingTime);
    return 
  }

  const {
    AWS_REGION,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    SNS_TOPIC_ARN,
  } = c.env;

  try {
    logger.debug("Sending", JSON.stringify({ event, providerId }));

    const MessageId = await publishToSNS(
      {
        event,
        providerId,
      },
      SNS_TOPIC_ARN,
      AWS_REGION,
      AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY
    );

    logger.info(`Message sent to SNS. MessageId: ${MessageId}`);

    if (MessageId) {
      await logSNSSent(c, MessageId, providerId, event, true, processingTime);
    }
  } catch (error) {
    logger.error("Error publishing to SNS:", error);
    await logError(c, "SNS_PUBLSIH_ERROR", error);
    throw error;
  }

  logger.debug(`Processing time: ${processingTime} ms`);
}

async function MD5(message: string) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("MD5", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

interface SNSMessage {
  event: any;
  providerId: string;
  [key: string]: any;
}

async function publishToSNS(
  message: SNSMessage,
  topicArn: string,
  region: string,
  accessKey: string,
  secretKey: string
): Promise<string> {
  const aws = new AwsClient({
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
    region: region,
    service: "sns",
  });

  const endpoint = `https://sns.${region}.amazonaws.com/`;
  const messageString = JSON.stringify(message);

  const body = new URLSearchParams({
    Action: "Publish",
    Message: messageString,
    TopicArn: topicArn,
    MessageGroupId: "webhook-facebook-sns",
    MessageDeduplicationId: await MD5(messageString),
    Version: "2010-03-31",
  });

  const response = await aws.fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(
      `SNS publish failed: ${response.status} ${response.statusText}`
    );
  }

  const result = await response.text();
  const messageId = result.match(/<MessageId>(.*?)<\/MessageId>/)?.[1];
  if (!messageId) {
    throw new Error("Failed to extract MessageId from SNS response");
  }
  return messageId;
}
