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

const app = new Hono<Env>();

app.use("*", logger());

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

export default app;
