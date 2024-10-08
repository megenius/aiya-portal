import { Hono } from "hono";
import { handle as snsEventHandler } from "../handlers/snsEventHandler";
import { handle as logEventHandler } from "../handlers/logEventHandler";
import { handle as forwardEventHandler } from "../handlers/forwardEventHandler";
import { handle as shellEventHandler } from "../handlers/shellEventHandler";
import { WebhookRequestBody } from "@line/bot-sdk";
import { WorkerEnv } from "../types";
import { channelMiddleware } from "../middlewares/channel.middleware";

const webhookRouter = new Hono<WorkerEnv>();

webhookRouter.post("/", channelMiddleware, async (c) => {
  const body: WebhookRequestBody = await c.req.json();
  const forward_urls = c.get("forward_urls");

  await Promise.all([
    ...body.events.map((event) => snsEventHandler(c, event, body.destination)),
    logEventHandler(c, body),
    forwardEventHandler(
      c,
      body,
      (forward_urls || []).filter((t) => t.enabled).map((t) => t.url)
    ),
  ]);
  return c.json({});
});

webhookRouter.post("/shell", async (c) => {
  const body: WebhookRequestBody = await c.req.json();

  await Promise.all([
    ...body.events.map((event) =>
      shellEventHandler(c, event, body.destination)
    ),
    logEventHandler(c, body),
    forwardEventHandler(
      c,
      {
        ...body,
        destination: "1619394519",
      },
      [
        "https://0stqaa0w0i.execute-api.ap-southeast-1.amazonaws.com/default/sqs_line_messaging_webhook_prod",
      ]
    ),
  ]);
  return c.json({});
});

export { webhookRouter };
