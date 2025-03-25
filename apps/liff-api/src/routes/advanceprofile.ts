import { Hono } from "hono";
import * as handler from "../handlers/advanceprofile.handler";

const advanceProfileRoutes = new Hono();

advanceProfileRoutes.get("/", ...handler.getAdvanceProfiles);
advanceProfileRoutes.get("/:id", ...handler.getAdvanceProfile);
advanceProfileRoutes.post("/", ...handler.createAdvanceProfile);
advanceProfileRoutes.put("/:id", ...handler.updateAdvanceProfile);
advanceProfileRoutes.delete("/:id", ...handler.deleteAdvanceProfile);

export { advanceProfileRoutes };
