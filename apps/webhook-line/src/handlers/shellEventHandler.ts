import { WebhookEvent } from "@line/bot-sdk";
import { Context } from "hono";
import { Logger, LogLevel } from "@repo/shared/utils";
import _ from "lodash";

const logger = new Logger("webhook", LogLevel.DEBUG);

// Constants
const AIYA_API_BASE_URL = "https://bot5-api.aiya.ai";
const AUTHORIZATION_HEADER =
  "Bearer 3440735207:py98Jm2yXkRkFQddJ8dzmqyy8CYbdR4f";

// Main handler function
export async function handle(
  c: Context,
  event: WebhookEvent,
  providerId: string
): Promise<void> {
  logger.debug(JSON.stringify(event));

  const { bot, channel } = SHELL;
  const platform = "LineBot";
  const senderId = event.source.userId as string;
  const uuid = `${channel.id}_${senderId}`;
  const eventType = event.type;

  if (eventType === "unfollow") {
    await updateProfile(uuid, bot, {
      blocked: 1,
      blocked_on: Date.now(),
    });
    return;
  }

  let message = _.get(event, "message");
  if (eventType === "follow") {
    message = {
      type: "text",
      text: "Get Started",
    } as any;
  }

  const postback = _.get(event, "postback");
  const timestamp = event.timestamp;
  const inboxMessage = createInboxMessage(
    uuid,
    timestamp,
    platform,
    senderId,
    message,
    postback
  );

  try {
    const [, profile] = await Promise.all([
      postToApi(`/inbox/create/${platform}`, inboxMessage, bot),
      fetchProfile(uuid, bot),
    ]);

    // Update last event
    await postToApi(
      `/inbox/${uuid}/last-event`,
      {
        last_event: inboxMessage,
        friend_profile: profile,
      },
      bot
    );
  } catch (error) {
    logger.error("Error handling webhook event:", error);
  }
}

// Helper functions
const createInboxMessage = (
  uuid: string,
  timestamp: number,
  platform: string,
  senderId: string,
  message: any,
  postback: any
) => ({
  chat_id: uuid,
  type: "MESSAGE",
  timestamp,
  platform,
  source: { type: "USER", id: senderId },
  message,
  postback,
  read: false,
});

const postToApi = async (path: string, body: any, bot: any) => {
  const url = `${AIYA_API_BASE_URL}${path}`;
  const headers = {
    "x-aiya-bot": bot.id,
    "x-aiya-pool-id": bot.pool,
    "Content-Type": "application/json",
    authorization: AUTHORIZATION_HEADER,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Failed to post to ${url}: ${response.statusText}`);
    }
  } catch (error) {
    logger.error(`Error posting to API: ${url}`, error);
    throw error;
  }
};

const fetchProfile = async (uuid: string, bot: any): Promise<any> => {
  const url = `${AIYA_API_BASE_URL}/friend/${uuid}/profile`;
  const headers = {
    "x-aiya-bot": bot.id,
    "x-aiya-pool-id": bot.pool,
    "Content-Type": "application/json",
    authorization: AUTHORIZATION_HEADER,
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch profile: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    logger.error(`Error fetching profile from ${url}`, error);
    throw error;
  }
};

const updateProfile = async (
  uuid: string,
  bot: any,
  body: any
): Promise<any> => {
  const url = `${AIYA_API_BASE_URL}/friend/${uuid}`;
  const headers = {
    "x-aiya-bot": bot.id,
    "x-aiya-pool-id": bot.pool,
    "Content-Type": "application/json",
    authorization: AUTHORIZATION_HEADER,
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch profile: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    logger.error(`Error fetching profile from ${url}`, error);
    throw error;
  }
};

// Mock SHELL object
const SHELL = {
  bot: {
    doctype: "Bot",
    id: "97b1cb0326",
    pool: "pool_22_a",
    title: "น้ำมันเครื่องเชลล์",
    picture_url:
      "https://s3.ap-southeast-1.amazonaws.com/dev.admin.aiya.ai/botPics/images/shell.jpg",
    template_id: "starter",
    profile: {
      title: "น้ำมันเครื่องเชลล์",
    },
    default_channel: "LineBot",
    chitchat_enabled: 1,
    enabled: 1,
    published: 1,
    deleted: 0,
    is_template: 0,
    created_by: "",
    modules: ["AGENT"],
    frappe_user: "c.prapath@outlook.com",
    publisher: "",
    creation: 1628950132869,
    modified: 1628950132869,
    activated: 1,
    version: 2,
  },
  channel: {
    id: "1619394519",
    doctype: "Channel",
    bot_id: "97b1cb0326",
    title: "น้ำมันเครื่องเชลล์",
    channel_secret: "57d32ee184f0c655947cd1851bb84eac",
    access_token:
      "RBbLRQxtB6X8YhwWhuI9fSbk/ALCeBxxJH5hGT7S7sTYM7AM5RCDq9/X7aZHs0+ikQcDkUxYy3j3oAO70/yunbax0u8KPUXtKVp899bof+bGNNWkjpT1hsUZMCqYOWrVHW1QVV9ihpIWIuVtVwh95AdB04t89/1O/w1cDnyilFU=",
    platform: "LineBot",
    enabled: 1,
    creation: 1628950132606,
    modified: 1628950132606,
  },
};
