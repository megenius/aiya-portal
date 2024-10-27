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
import { durableFollowerObjectMiddleware } from "~/middlewares/durable-follower.middleware";
const { MessagingApiClient } = line.messagingApi;

const factory = createFactory<Env>();

export const listAll = factory.createHandlers(
  durableFollowerObjectMiddleware,
  async (c) => {
    try {
      const stub = c.var.followerStub
      // const message = stub.

      return c.json({ message: "Hello, World!" });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
)
