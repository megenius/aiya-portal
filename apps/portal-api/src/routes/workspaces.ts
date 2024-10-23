// File: src/routes/items.ts
import { Hono } from "hono";
import * as _ from "lodash";
import { Env } from "~/types/hono.types";
import * as WorkspaceHandler from "../handlers/workspace.handler";

const workspacesRoutes = new Hono<Env>()
  .get("/", ...WorkspaceHandler.getWorkspaces)
  .post("/", ...WorkspaceHandler.createWorkspace)
  .get("/:id", ...WorkspaceHandler.getWorkspace)
  .patch("/:id", ...WorkspaceHandler.updateWorkspace)
  .delete("/:id", ...WorkspaceHandler.deleteWorkspace)

  .get("/:id/members", ...WorkspaceHandler.getWorkspaceMembers)
  .get("/:id/ad-accounts", ...WorkspaceHandler.getWorkspaceAdAccounts)
  .get("/:id/bots", ...WorkspaceHandler.getWorkspaceBots)
  .get("/:id/channels", ...WorkspaceHandler.getWorkspaceChannels)
  .delete("/:id/channels/:channelId", ...WorkspaceHandler.deleteWorkspaceChannel)
  .post("/:id/channels/line", ...WorkspaceHandler.createWorkspaceChannelLine)
  .post("/:id/channels/facebooks", ...WorkspaceHandler.createWorkspaceChannelFacebooks)
  .get("/:id/chats", ...WorkspaceHandler.getWorkspaceChats)
  .get("/:id/products", ...WorkspaceHandler.getWorkspaceProducts)
  .get("/:id/orderbots", ...WorkspaceHandler.getWorkspaceOrderbots);


export { workspacesRoutes };
