import { Hono } from "hono";
import { Env } from "~/@types/hono.types";
import * as Handler from "../handlers/ad.handler";

import { adMiddleware } from "~/middlewares/ads.middleware";

const adRoutes = new Hono<Env>();

adRoutes.get("/", adMiddleware, Handler.getAds);
adRoutes
  .get("/:adId/insight", adMiddleware, Handler.getAdsInsight)
  .get("/:adId/spend-daily", adMiddleware, Handler.getDailySpend)

export { adRoutes };
