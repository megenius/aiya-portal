import { Context } from "hono";
import { Env } from "~/types/hono.types";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";

const factory = createFactory<Env>();

export const webhook = factory.createHandlers(logger(), async (c: Context<Env>) => {
  const botId = c.req.param("botId");
  const body = await c.req.json();

  console.log(`Received Instagram webhook for bot ID: ${botId}`);

});
