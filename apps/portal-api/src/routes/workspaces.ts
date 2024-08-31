// File: src/routes/items.ts
import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import {
  readItems,
  createItem,
  updateItem,
  deleteItem,
  readItem,
  uploadFiles,
  importFile,
  createItems,
} from "@directus/sdk";
import { Schema } from "../config/schema";
import { Env } from "~/types/hono.types";
import { DirectusException } from "~/types/exception";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import * as line from "@line/bot-sdk";
import { addSeconds, format } from "date-fns";
import * as _ from "lodash";
import { WorkspaceChannel } from "~/@types/app";
import { parseQuery } from "@repo/shared/utils/query";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { Logger, LogLevel } from "@repo/shared/utils";

const { MessagingApiClient } = line.messagingApi;
const { ChannelAccessTokenClient } = line.channelAccessToken;

const logger = new Logger("workspace", LogLevel.DEBUG);

const workspacesRoutes = new Hono<Env>()
  .get("/", async (c) => {
    try {
      const { q } = c.req.query();
      const parsedQuery = parseQuery(q);
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const items = await directus.request(
        readItems("saas_teams", {
          filter: {
            ...parsedQuery,
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
  })
  .get("/:id", async (c) => {
    try {
      const id = c.req.param("id");
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const item = await directus.request(readItem("saas_teams", id));
      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .patch("/:id", async (c) => {
    try {
      const id = c.req.param("id");
      const data = await c.req.json();
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const result = await directus.request(
        updateItem("saas_teams", id, { ...data, date_updated: new Date() })
      );
      return c.json(result);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get("/:id/members", async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.env.DIRECTUS_SERVICE_TOKEN);
      const users = await directus.request(
        readItems("saas_teams_users", {
          filter: {
            team_id: {
              _eq: workspaceId,
            },
          },
          fields: [
            "user_id",
            "role",
            "date_accepted",
            {
              user_id: [
                "id",
                "first_name",
                "last_name",
                "email",
                "avatar",
                "last_access",
              ],
            },
          ],
        })
      );
      const items = users
        .map((user) => {
          return {
            ...user.user_id,
            name: user.user_id?.first_name + " " + user.user_id?.last_name,
            role: user.role,
            date_accepted: user.date_accepted,
          };
        })
        .sort((a, b) => (a.first_name || "").localeCompare(b.first_name || ""));
      return c.json({ total: items.length, items });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get("/:id/bots", async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.env.DIRECTUS_SERVICE_TOKEN);
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
  })
  .get("/:id/channels", async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.env.DIRECTUS_SERVICE_TOKEN);
      const items = await directus.request(
        readItems("channels", {
          filter: {
            team: {
              _eq: workspaceId,
            },
          },
          fields: ["id", "platform", "provider_id", "name", "logo", "expired_at"],
          sort: ["-date_updated"],
        })
      );
      return c.json({ total: items.length, items });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .post("/:id/channels/line", async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.env.DIRECTUS_SERVICE_TOKEN);

      // channel
      const body = await c.req.json();
      const { provider_id, provider_secret } = body;

      const channelClient = new ChannelAccessTokenClient({});
      const channel = await channelClient.issueChannelToken(
        "client_credentials",
        provider_id,
        provider_secret
      );

      const channelAccessToken = _.get(channel, "access_token", "");
      const expiresIn = _.get(channel, "expires_in", 0);

      const client = new MessagingApiClient({
        channelAccessToken,
      });
      const botInfo = await client.getBotInfo();

      let fileId = undefined;

      if (botInfo.pictureUrl) {
        const result = await directus.request(
          importFile(botInfo.pictureUrl, {
            title: botInfo.userId,
          })
        );
        fileId = result.id;
      }

      const item = await directus.request(
        createItem("channels", {
          ...body,
          team: workspaceId,
          name: botInfo.displayName,
          provider_name: botInfo.displayName,
          provider_id: botInfo.userId,
          provider_secret,
          provider_access_token: channelAccessToken,
          provider_info: { ...botInfo, channelId: provider_id },
          expired_at: format(
            addSeconds(new Date(), expiresIn - 24 * 60 * 60),
            "yyyy-MM-dd HH:mm:ss"
          ),
          logo: fileId,
          date_created: new Date(),
          date_updated: new Date(),
        })
      );
      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .post("/:id/channels/facebooks", async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.env.DIRECTUS_SERVICE_TOKEN);

      const items = await c.req.json<WorkspaceChannel[]>();

      // Download and import logos
      const fileIds = await Promise.all(
        items.map(async (item) => {
          const result = await directus.request(
            importFile(item.logo as string, {
              title: item.name,
            })
          );
          return result.id;
        })
      );

      // Create channel items with downloaded logo file IDs
      const channelItems = items.map((item, index) => ({
        ...item,
        team: workspaceId,
        logo: fileIds[index],
      }));

      const createdItems = await directus.request(
        createItems("channels", channelItems)
      );

      return c.json(createdItems);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get("/:id/chats", async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.env.DIRECTUS_SERVICE_TOKEN);
      const items = await directus.request(
        readItems("channels", {
          filter: {
            team: {
              _eq: workspaceId,
            },
          },
          fields: ["platform", "provider_id", "name"],
        })
      );
      return c.json({ total: items.length, items });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  });

export { workspacesRoutes };
