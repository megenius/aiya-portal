import { Hono } from "hono";
import * as NotifiesHandler from "../handlers/notifies.handler";

const notifiesRoutes = new Hono();

notifiesRoutes.post(
  "/service-message",
  ...NotifiesHandler.sendLineServiceMessage
);

export { notifiesRoutes };
