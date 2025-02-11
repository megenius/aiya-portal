import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const getUsers = factory.createHandlers(logger(), async (c) => {
  return c.json({ message: "getUsers" });
});

export const createUser = factory.createHandlers(logger(), async (c) => {
  return c.json({ message: "createUser" });
});

export const getUser = factory.createHandlers(logger(), async (c) => {
  const id = c.req.param("id");
  return c.json({ message: `getUser ${id}` });
});

export const updateUser = factory.createHandlers(logger(), async (c) => {
  const id = c.req.param("id");
  return c.json({ message: `updateUser ${id}` });
});

export const deleteUser = factory.createHandlers(logger(), async (c) => {
  const id = c.req.param("id");
  return c.json({ message: `deleteUser ${id}` });
});
