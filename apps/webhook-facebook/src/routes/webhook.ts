import { Hono } from "hono";
import { handle as snsEventHandler } from "../handlers/snsEventHandler";
import { handle as logEventHandler } from "../handlers/logEventHandler";
import { handle as forwardEventHandler } from "../handlers/forwardEventHandler";
import { handle as snsImageEventHandler } from "../handlers/snsImageEventHandler";
import { Bindings } from "../types";
import { WebhookFacebookEvent } from "~/@types/app";

const webhookRouter = new Hono<{
  Bindings: Bindings;
}>();

webhookRouter
  .post("/", async (c) => {

    const body: WebhookFacebookEvent = await c.req.json();
    await Promise.all([
      ...body.entry.map((entry) => {
        return Promise.all(
          entry.messaging.map((messaging) => {
            if (messaging.message?.attachments) {
              return Promise.all([
                snsImageEventHandler(c, messaging, messaging.recipient.id),
                // logEventHandler(c, messaging),
                // forwardEventHandler(c, messaging, []),
              ]);
            } else {
              return Promise.all([
                snsEventHandler(c, messaging, messaging.recipient.id),
                // logEventHandler(c, messaging),
                // forwardEventHandler(c, messaging, []),
              ]);
            }
          })
        );
      }),
      // logEventHandler(c, body),
      // forwardEventHandler(c, body, []),
    ]);
    return c.json({});
  })
  .get("/", async (c) => {
    let mode = c.req.query("hub.mode") as string;
    let token = c.req.query("hub.verify_token") as string;
    let challenge = c.req.query("hub.challenge") as string;

    // console.log({ mode, token, challenge });

    // Check if a token and mode is in the query string of the request
    if (mode && token) {
      // Check the mode and token sent is correct
      if (mode === "subscribe" && token === "verify_token") {
        // Respond with the challenge token from the request
        console.log("WEBHOOK_VERIFIED", challenge);
        return c.text(`${Number(challenge)}`);
      } else {
        // Respond with '403 Forbidden' if verify tokens do not match
        return c.json({ message: "Forbidden" }, 403);
      }
    }
  });

export { webhookRouter };
