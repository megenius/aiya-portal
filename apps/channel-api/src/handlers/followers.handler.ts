// File: src/routes/items.ts
import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import {
  readItems,
  createItem,
  updateItem,
  deleteItem,
  readItem,
} from "@directus/sdk";
import * as _ from "lodash";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { Env } from "~/types/hono.types";

import * as line from "@line/bot-sdk";
import { Channel } from "~/@types/app";
import { createFactory } from "hono/factory";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { channelMiddleware } from "~/middlewares/channel.middleware";
import { followerDOMiddleware } from "~/middlewares/follower-do.middleware";
const { MessagingApiClient } = line.messagingApi;

const factory = createFactory<Env>();

export const listAll = factory.createHandlers(
  followerDOMiddleware,
  async (c) => {
    try {
      return c.json({ message: "Hello, World!" });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

export const setActiveBot = factory.createHandlers(
  directusMiddleware,
  channelMiddleware,
  async (c) => {
    try {
      const channel = await c.get("channel");

      return c.json(channel);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);
