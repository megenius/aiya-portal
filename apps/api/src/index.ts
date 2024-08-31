import { Hono } from "hono";
import { Env } from "@repo/shared";

const app = new Hono<Env>().get("/", (c) => {
  return c.json({ message: "AIYA API" });
});

export default app;

export type AppType = typeof app;
