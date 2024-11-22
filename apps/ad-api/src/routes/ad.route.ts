import { Hono } from "hono";
import { Env } from "~/@types/hono.types";
import * as Handler from "../handlers/ad.handler";

import { adMiddleware } from "~/middlewares/ads.middleware";

const adRoutes = new Hono<Env>();

adRoutes.get("/", adMiddleware, Handler.getAds);
// adsetsRoutes.get("/:adsetId", adMiddleware, Handler.getCampaignInsight);

export { adRoutes };
