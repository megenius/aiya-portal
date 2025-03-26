import { Hono } from "hono";
import * as handler from "../handlers/profile.handler";

const profileRoutes = new Hono();

profileRoutes.get("/", ...handler.getProfiles);
profileRoutes.get("/:id", ...handler.getProfile);
profileRoutes.post("/", ...handler.createProfile);
profileRoutes.put("/:id", ...handler.updateProfile);
profileRoutes.delete("/:id", ...handler.deleteProfile);
profileRoutes.get("/user/:userId", ...handler.getProfilesByUserId);
profileRoutes.get("/type/:profileType", ...handler.getProfilesByType);

export { profileRoutes };
