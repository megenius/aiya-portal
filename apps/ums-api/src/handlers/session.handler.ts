import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const getSessions = factory.createHandlers(logger(), async (c) => {
  return c.json({ message: "getSessions" });
});

export const createSession = factory.createHandlers(logger(), async (c) => {
  return c.json({ message: "createSession" });
});

export const getSession = factory.createHandlers(logger(), async (c) => {
  const id = c.req.param("id");
  return c.json({ message: `getSession ${id}` });
});

export const updateSession = factory.createHandlers(logger(), async (c) => {
  const id = c.req.param("id");
  return c.json({ message: `updateSession ${id}` });
});

export const deleteSession = factory.createHandlers(logger(), async (c) => {
  const id = c.req.param("id");
  return c.json({ message: `deleteSession ${id}` });
});
