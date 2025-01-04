import { Env, Hono } from "hono";
import { createFactory } from "hono/factory";

const factory = createFactory<Env>();

interface WebhookEvent {
  type: string;
  message?: {
    type: string;
    text?: string;
    stickerId?: string;
    packageId?: string;
  };
  beacon?: {
    hwid: string;
    type: string;
  };
  source: {
    type: string;
    userId: string;
  };
  replyToken?: string;
}

const LINE_CHANNEL_ACCESS_TOKEN = ""

async function sendLineReply(replyToken: string, messages: any[]) {
  const response = await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      replyToken,
      messages,
    }),
  });

  if (!response.ok) {
    throw new Error(`LINE API Error: ${response.statusText}`);
  }
}

export const webhook = factory.createHandlers(async (c) => {
  const body = await c.req.json();
  const events: WebhookEvent[] = body.events;

  await Promise.all(
    events.map(async (event) => {
      switch (event.type) {
        case "message": {
          const { message, replyToken } = event;
          if (!message || !replyToken) break;

          switch (message.type) {
            case "text":
              console.log(`Text message: ${message.text}`);
              // Handle text message
              await sendLineReply(replyToken, [
                {
                  type: "text",
                  text: `Received: ${message.text}`,
                },
              ]);
              break;

            case "sticker":
              console.log(`Sticker: ${message.packageId}-${message.stickerId}`);
              // Handle sticker
              break;
          }
          break;
        }

        case "beacon": {
          const { beacon, replyToken } = event;
          if (!beacon || !replyToken) break;

          console.log(`Beacon ${event.source.userId} ${beacon.type} from ${beacon.hwid}`);
          await sendLineReply(replyToken, [
            {
              type: "text",
              text: `Beacon detected: ${beacon.type} ${beacon.hwid}`,
            },
          ]);
          break;
        }

        case "follow": {
          const { replyToken, source } = event;
          if (!replyToken) break;

          console.log(`Follow from user: ${source.userId}`);
          await sendLineReply(replyToken, [
            {
              type: "text",
              text: "Thanks for following!",
            },
          ]);
          break;
        }

        case "unfollow": {
          console.log(`Unfollow from user: ${event.source.userId}`);
          break;
        }
      }
    })
  );

  return c.json({});
});
