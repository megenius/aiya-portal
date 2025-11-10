import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import { serviceAuthMiddleware } from "~/middleware/service-auth.middleware";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { logger as honoLogger } from "hono/logger";
import { createFactory } from "hono/factory";
import { createItem, readItem, readItems } from "@directus/sdk";
import { DirectusError } from "@repo/shared/exceptions/directus";
import type { Channel } from "~/types/app";

const factory = createFactory<Env>();
const app = new Hono<Env>();

/**
 * Service Bot Routes
 *
 * These endpoints are designed for service-to-service communication.
 * They require a valid DIRECTUS_SERVICE_TOKEN for authentication.
 *
 * Used by trusted services like Workspace backend to manage bots
 * without going through user authentication flow.
 */

// List workspace bots
const getWorkspaceBots = factory.createHandlers(
  honoLogger(),
  serviceAuthMiddleware,
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = c.get("directus");
      const items = await directus.request(
        readItems("bots", {
          filter: {
            team: {
              _eq: workspaceId,
            },
            status: {
              _neq: "Archived",
            },
          },
          sort: ["-date_updated"],
        })
      );
      return c.json({ items });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// Create workspace bot
const createWorkspaceBot = factory.createHandlers(
  honoLogger(),
  serviceAuthMiddleware,
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = c.get("directus");
      const body = await c.req.json();
      const item = await directus.request(
        createItem("bots", {
          ...body,
          team: workspaceId,
        })
      );

      // create bot channel
      const channel = await directus.request(
        createItem("channels", {
          name: item.name,
          platform: "Website",
          team: workspaceId,
          provider: "Playground",
          provider_id: "P" + item.id,
          provider_name: item.name,
        } as Channel)
      );

      // create bot channel
      await directus.request(
        createItem("channels_bots", {
          channel_id: channel.id,
          bot_id: item.id,
        })
      );

      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// Get single workspace bot
const getWorkspaceBot = factory.createHandlers(
  honoLogger(),
  serviceAuthMiddleware,
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const botId = c.req.param("botId") as string;
      const directus = c.get("directus");
      const item = await directus.request(
        readItem("bots", botId, {
          filter: {
            team: {
              _eq: workspaceId,
            },
          },
        })
      );
      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// Register routes
app.get("/workspaces/:id/bots", ...getWorkspaceBots);
app.post("/workspaces/:id/bots", ...createWorkspaceBot);
app.get("/workspaces/:id/bots/:botId", ...getWorkspaceBot);

export default app;
