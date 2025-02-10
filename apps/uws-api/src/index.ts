import { Hono } from "hono";
import { logger } from "hono/logger";
import { Env } from "./types/hono.types";
import { lineRoutes } from "./routes/line.route";
import { facebookRoutes } from "./routes/facebook.route";
import { instagramRoutes } from "./routes/instagram.route";
import { whatsappRoutes } from "./routes/whatsapp.route";
import { wechatRoutes } from "./routes/wechat.route";
import { shopeeRoutes } from "./routes/shopee.route";
import { lazadaRoutes } from "./routes/lazada.route";
import { tiktokRoutes } from "./routes/tiktok.route";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import { QueueMessage, UserProfileMessage } from "./types/app.types";
import { WorkerEnv } from "./types/worker-configuration";
import { conversationRoutes } from "./routes/conversation.route";
import { websocketRoutes } from "./routes/websocket.route";
import { handleUserProfileQueue } from "./handlers/user-profile-queue.handler";
import { handleConversationQueue } from "./handlers/conversation-queue.handler";

export * from "./durables/channel.durable";

const app = new Hono<Env>()
  // .use("*", logger())
  // .use("*", cors())
  // .use("*", prettyJSON())
  .get("/", (c) => {
    return c.text("Webhook SaaS API is running!");
  })
  .route("/v1/line", lineRoutes)
  .route("/v1/facebook", facebookRoutes)
  .route("/v1/instagram", instagramRoutes)
  .route("/v1/whatsapp", whatsappRoutes)
  .route("/v1/wechat", wechatRoutes)
  .route("/v1/shopee", shopeeRoutes)
  .route("/v1/lazada", lazadaRoutes)
  .route("/v1/tiktok", tiktokRoutes)

  .route("/api/uws", conversationRoutes)
  .route("/websocket/uws", websocketRoutes)


export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch<QueueMessage>, env: WorkerEnv) {
    const { queue } = batch;

    console.log(`Processing queue ${queue}`);

    try {
      switch (queue) {
        case "user-profile-queue":
          await handleUserProfileQueue(batch as any, env);
          break;
        case "conversation-queue":
          await handleConversationQueue(batch as any, env);
          break;
        default:
          console.error(`Unknown queue: ${queue}`);
          break;
      }
    } catch (error) {
      console.error(`Error processing queue ${queue}:`, error);
    }
  },
};
