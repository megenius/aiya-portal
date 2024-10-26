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
  readUsers,
} from "@directus/sdk";
import { logger as honoLogger } from "hono/logger";
import * as line from "@line/bot-sdk";
import { addDays, addSeconds, format } from "date-fns";
import * as _ from "lodash";
import { WorkspaceChannel } from "~/types/app";
import { parseQuery } from "@repo/shared/utils/query";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { Logger, LogLevel, randomHexString } from "@repo/shared/utils";
import { Env } from "~/types/hono.types";
import { createFactory } from "hono/factory";
import { directusMiddleware } from "~/middleware/directus.middleware";
import * as jwt from "hono/jwt";
import { getDatasetId } from "./facebook/dataset";

const { MessagingApiClient } = line.messagingApi;
const { ChannelAccessTokenClient } = line.channelAccessToken;

const logger = new Logger("workspace", LogLevel.DEBUG);

const factory = createFactory<Env>();

// --------------- WORKSPACE  ---------------
//get workspaces
export const getWorkspaces = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const { q } = c.req.query();
      const parsedQuery = parseQuery(q);
      const directus = c.get("directus");

      console.log("parsedQuery", parsedQuery);

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
      return c.json({ total: items?.length, items });
    } catch (error) {
      console.error(error);
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

//get workspace
export const getWorkspace = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const id = c.req.param("id");
      const directus = c.get("directus");
      const item = await directus.request(readItem("saas_teams", id));
      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

//create workspace
export const createWorkspace = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const data = await c.req.json();
      const directus = c.get("directus");
      const item = await directus.request(
        createItem("saas_teams", {
          ...data,
          date_created: new Date(),
          date_updated: new Date(),
        })
      );
      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

//update workspace
export const updateWorkspace = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const id = c.req.param("id");
      const data = await c.req.json();
      const directus = c.get("directus");
      const result = await directus.request(
        updateItem("saas_teams", id, { ...data, date_updated: new Date() })
      );
      return c.json(result);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

//delete workspace
export const deleteWorkspace = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const id = c.req.param("id");
      const directus = c.get("directus");
      await directus.request(deleteItem("saas_teams", id));
      return c.json({});
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// --------------- WORKSPACE MEMBERS  ---------------
//get workspace members
export const getWorkspaceMembers = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = c.get("directus");
      const users = await directus.request(
        readItems("saas_teams_users", {
          fields: [
            "id",
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
          filter: {
            team_id: {
              _eq: workspaceId,
            },
          },
        })
      );

      const items = users
        .map((user) => {
          return {
            ...user.user_id,
            id: user.id,
            name: user.user_id?.first_name + " " + user.user_id?.last_name,
            role: user.role,
            date_accepted: user.date_accepted,
          };
        })
        .sort((a, b) => (a.first_name || "").localeCompare(b.first_name || ""));
      return c.json({ total: items.length, items });
    } catch (error) {
      console.error(error);
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// invite workspace members
export const inviteWorkspaceMembers = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const { emails, role } = await c.req.json();
      const directus = c.get("directus");

      console.log("inviteUsers", emails, workspaceId);

      const workspace = await directus.request(
        readItem("saas_teams", workspaceId, {
          fields: ["id", "name"],
        })
      );

      const id = randomHexString(8);

      const token = await jwt.sign(
        {
          id,
          exp: addDays(new Date(), 1).valueOf(),
        },
        c.env.DIRECTUS_SECRET_KEY
      );

      for (const email of emails) {
        await directus.request(
          createItem("saas_teams_invites", {
            id,
            email,
            role,
            team_id: workspaceId,
            team_name: workspace.name,
            token,
          })
        );
      }

      return c.json({});
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// remove workspace member
export const deleteWorkspaceMember = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const memberId = c.req.param("memberId") as string;
      const directus = c.get("directus");

      await directus.request(
        updateItem("saas_teams", workspaceId, {
          users: {
            create: [],
            delete: [memberId],
            update: [],
          },
        })
      );
      return c.json({ workspaceId });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// --------------- WORKSPACE AD ACCOUNTS  ---------------
//get workspace ad accounts
export const getWorkspaceAdAccounts = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const FB_API_URL = c.env.FB_API_URL;
      const workspaceId = c.req.param("id") as string;
      const directus = c.get("directus");
      const items = await directus.request(
        readItems("ad_accounts", {
          filter: {
            team: {
              _eq: workspaceId,
            },
          },
          sort: ["-date_updated"],
        })
      );

      const accounts = await Promise.all(
        items.map(async (item) => {
          const fbURL = new URL(`${FB_API_URL}/${item.ad_account_id}/insights`);
          fbURL.searchParams.append("fields", "spend");
          fbURL.searchParams.append("level", "account");
          fbURL.searchParams.append("date_preset", "last_28d");

          const response = await fetch(fbURL.toString(), {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${item.access_token}`,
            },
          }).then((res) => res.json());

          const data = response.data[0];
          return { ...item, spend: data?.spend };
        })
      );

      console.log(accounts);

      return c.json({ items: accounts });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// --------------- WORKSPACE BOTS  ---------------
//get workspace bots
export const getWorkspaceBots = factory.createHandlers(
  honoLogger(),
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

// --------------- WORKSPACE CHANNELS  ---------------
//get workspace channels
export const getWorkspaceChannels = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = c.get("directus");
      const items = await directus.request(
        readItems("channels", {
          filter: {
            team: {
              _eq: workspaceId,
            },
          },
          fields: [
            "id",
            "platform",
            "provider_id",
            "name",
            "logo",
            "expired_at",
            "dataset"
          ],
          sort: ["-date_updated"],
        })
      );
      return c.json({ total: items.length, items });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

//delete workspace channel
export const deleteWorkspaceChannel = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const channelId = c.req.param("channelId") as string;

      const directus = c.get("directus");
      await directus.request(
        updateItem("saas_teams", workspaceId, {
          channels: {
            delete: [channelId],
          },
        })
      );
      return c.json({ workspace_id: workspaceId, channel_id: channelId });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// --------------- WORKSPACE CHANNELS LINE  ---------------
//create workspace channel line
export const createWorkspaceChannelLine = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = c.get("directus");

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
          forward_urls: [],
        })
      );

      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// --------------- WORKSPACE CHANNELS FACEBOOKS  ---------------
//create workspace channel facebooks
export const createWorkspaceChannelFacebooks = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = c.get("directus");

      const items = await c.req.json<WorkspaceChannel[]>();

      const datasetIds = await Promise.all(
        items.map(async (item) => {
          return getDatasetId({
            pageId: item.provider_id as string,
            pageToken: item.provider_access_token as string,
          }).then((res) => res.id);
        })
      );

      console.log("datasetIds", datasetIds);
      

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
        dataset: datasetIds[index],
      }));

      const createdItems = await directus.request(
        createItems("channels", channelItems)
      );

      return c.json(createdItems);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// --------------- WORKSPACE CHANNELS CHATS  ---------------
//get workspace chats
export const getWorkspaceChats = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = c.get("directus");
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
  }
);

// --------------- WORKSPACE PRODUCTS  ---------------
//get workspace products
export const getWorkspaceProducts = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = c.get("directus");
      const items = await directus.request(
        readItems("products", {
          filter: {
            // team: {
            //   _eq: workspaceId,
            // },
          },
          sort: ["-date_updated"],
        })
      );
      return c.json({ total: items.length, items });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// --------------- WORKSPACE ORDERBOTS  ---------------
// get workspace orderbots
export const getWorkspaceOrderbots = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const workspaceId = c.req.param("id") as string;
      const directus = c.get("directus");
      const items = await directus.request(
        readItems("orderbots", {
          filter: {
            team: {
              _eq: workspaceId,
            },
          },
          sort: ["-date_updated"],
        })
      );
      return c.json({ total: items.length, items });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);
