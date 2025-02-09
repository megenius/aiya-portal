import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const webhook = factory.createHandlers(logger(), async (c) => {
  const botId = c.req.param("botId");
  const body = await c.req.json();

  console.log(`Received TikTok webhook for bot ID: ${botId}`);
});
