import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as Handler from "../handlers/facebook.handler";

export const facebookRoutes = new Hono<Env>()
  .post("/exchange-token", ...Handler.getExchangeToken)
  .post("/subscribe", ...Handler.subscribe)
  .post("/unsubscribe", ...Handler.unsubscribe)
  .get("/campaigns", ...Handler.getCampaigns);
