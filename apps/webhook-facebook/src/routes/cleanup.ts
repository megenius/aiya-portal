import { Context, Hono } from "hono";
import { Bindings } from "../types";
import { cleanupHandler } from "../handlers/cleanupHandler";

const cleanupRouter = new Hono<{
  Bindings: Bindings;
}>();

cleanupRouter.get("/", async (c: Context) => {
  const result = await cleanupHandler(c);
  return c.json(result, result.success ? 200 : 500);
});

export { cleanupRouter };