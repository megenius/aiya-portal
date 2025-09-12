import { Hono } from "hono";
import * as UserEventsHandler from "../handlers/userEvents.handler";

const userEventsRoutes = new Hono();

userEventsRoutes.get("/", ...UserEventsHandler.getUserEvents);
userEventsRoutes.get("/stats", ...UserEventsHandler.getUserEventsStats);
userEventsRoutes.post("/", ...UserEventsHandler.createUserEvent);

export { userEventsRoutes };
