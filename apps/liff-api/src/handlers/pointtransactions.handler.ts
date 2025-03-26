import { createItem, deleteItem, readItem, readItems, updateItem } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { nanoid } from "nanoid";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

// getPointTransactions
export const getPointTransactions = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { userId, type } = c.req.query();

    const filters: any = {};
    if (userId) filters.user_id = { _eq: userId };
    if (type) filters.type = { _eq: type };

    const transactions = await directus.request(
      readItems("point_transactions", {
        filter: filters,
      })
    );

    return c.json(transactions);
  }
);

// getPointTransaction
export const getPointTransaction = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param();
    const directus = c.get("directAdmin");

    const transaction = await directus.request(
      readItem("point_transactions", id)
    );

    if (!transaction) {
      return c.json(null);
    }

    return c.json(transaction);
  }
);

// createPointTransaction
export const createPointTransaction = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const transactionData = await c.req.json();
    const directus = c.get("directAdmin");

    // Generate a random 10-character alphanumeric ID
    const id = nanoid(10);

    const transaction = await directus.request(
      createItem("point_transactions", { id, ...transactionData })
    );

    return c.json(transaction);
  }
);

// updatePointTransaction
export const updatePointTransaction = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param();
    const transactionData = await c.req.json();
    const directus = c.get("directAdmin");

    const transaction = await directus.request(
      updateItem("point_transactions", id, transactionData)
    );

    return c.json(transaction);
  }
);

// deletePointTransaction
export const deletePointTransaction = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param();
    const directus = c.get("directAdmin");

    await directus.request(
      deleteItem("point_transactions", id)
    );

    return c.json({ success: true });
  }
);
