// File: src/routes/items.ts
import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as WorkspaceHandler from "../handlers/workspace.handler";

const workspacesRoutes = new Hono<Env>()
  .get("/", ...WorkspaceHandler.getWorkspaces)
  .post("/", ...WorkspaceHandler.createWorkspace)
  .get("/:id", ...WorkspaceHandler.getWorkspace)
  .patch("/:id", ...WorkspaceHandler.updateWorkspace)
  .delete("/:id", ...WorkspaceHandler.deleteWorkspace)

  .get("/:id/members", ...WorkspaceHandler.getWorkspaceMembers)
  .delete("/:id/members/:memberId", ...WorkspaceHandler.deleteWorkspaceMember)
  .post("/:id/members/invite", ...WorkspaceHandler.inviteWorkspaceMembers)
  .get("/:id/ad-accounts", ...WorkspaceHandler.getWorkspaceAdAccounts)

  // -------- WORKSPACE BOTS --------
  .get("/:id/bots", ...WorkspaceHandler.getWorkspaceBots)
  .post("/:id/bots", ...WorkspaceHandler.createWorkspaceBot)
  .get("/:id/bots/:botId", ...WorkspaceHandler.getWorkspaceBot)
  .patch("/:id/bots/:botId", ...WorkspaceHandler.updateWorkspaceBot)
  .delete("/:id/bots/:botId", ...WorkspaceHandler.deleteWorkspaceBot)

  // -------- WORKSPACE CHANNELS --------
  .get("/:id/channels", ...WorkspaceHandler.getWorkspaceChannels)
  .delete("/:id/channels/:channelId", ...WorkspaceHandler.deleteWorkspaceChannel)
  .post("/:id/channels/line", ...WorkspaceHandler.createWorkspaceChannelLine)
  .post("/:id/channels/facebooks", ...WorkspaceHandler.createWorkspaceChannelFacebooks)
  .get("/:id/chats", ...WorkspaceHandler.getWorkspaceChats)
  .get("/:id/products", ...WorkspaceHandler.getWorkspaceProducts)
  .get("/:id/orderbots", ...WorkspaceHandler.getWorkspaceOrderbots)

  // New routes for chat_hub
  .get("/:id/chathubs", ...WorkspaceHandler.getWorkspaceHubs) // New route for getWorkspaceHubs

export { workspacesRoutes };
