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
import { handleUserProfileQueue } from "./handlers/user-profile-queue.handler";
import { QueueMessage, UserProfileMessage } from "./types/app.types";
import { WorkerEnv } from "./types/worker-configuration";

export * from "./durables/channel.durable";

const app = new Hono<Env>();

app.use("*", logger());
app.use("*", cors());
app.use("*", prettyJSON());

app.get("/", (c) => {
  return c.text("Webhook SaaS API is running!");
});

app.route("/v1/line", lineRoutes);
app.route("/v1/facebook", facebookRoutes);
app.route("/v1/instagram", instagramRoutes);
app.route("/v1/whatsapp", whatsappRoutes);
app.route("/v1/wechat", wechatRoutes);
app.route("/v1/shopee", shopeeRoutes);
app.route("/v1/lazada", lazadaRoutes);
app.route("/v1/tiktok", tiktokRoutes);

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

        default:
          console.error(`Unknown queue: ${queue}`);
          break;
      }
    } catch (error) {
      console.error(`Error processing queue ${queue}:`, error);
      // You might want to add monitoring or alerting here
    }
  },
};
