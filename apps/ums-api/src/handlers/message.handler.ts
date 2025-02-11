import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const getMessages = factory.createHandlers(logger(), async (c) => {
  return c.json({ message: "getMessages" });
});

export const createMessage = factory.createHandlers(logger(), async (c) => {
  return c.json({ message: "createMessage" });
});

export const getMessage = factory.createHandlers(logger(), async (c) => {
  const id = c.req.param("id");
  return c.json({ message: `getMessage ${id}` });
});

export const updateMessage = factory.createHandlers(logger(), async (c) => {
  const id = c.req.param("id");
  return c.json({ message: `updateMessage ${id}` });
});

export const deleteMessage = factory.createHandlers(logger(), async (c) => {
  const id = c.req.param("id");
  return c.json({ message: `deleteMessage ${id}` });
});
