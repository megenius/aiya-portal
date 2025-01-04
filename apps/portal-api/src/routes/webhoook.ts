import { Hono } from "hono";
import * as _ from "lodash";
import { Env } from "~/types/hono.types";
import * as Handler from "~/handlers/webhook.handler";

const webhookRoutes = new Hono<Env>()
  .post("/", ...Handler.webhook)
  .get("/health", async (c) => {
    return c.json({ status: "ok" });
  });


export { webhookRoutes };
