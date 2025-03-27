import { Hono } from "hono";
import * as HubHandler from "~/handlers/hub.handler";
import { Env } from "~/types/hono.types";

const hubRoutes = new Hono<Env>()
  .get("/:id", ...HubHandler.getHub)
  .post("/", ...HubHandler.insertHub)
  .patch("/:id", ...HubHandler.updateHub)
  .delete("/:id", ...HubHandler.deleteHub);

export { hubRoutes };
