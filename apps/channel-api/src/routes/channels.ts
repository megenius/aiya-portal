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
import { Env } from "@repo/shared";
import * as _ from "lodash";
import { DirectusError } from "@repo/shared/exceptions/directus";

const channelsRoutes = new Hono<Env>().get("/:providerId", async (c) => {
  try {
    const providerId = c.req.param("providerId");
    const directus = getDirectusClient();
    await directus.setToken(c.get("token"));
    const items = await directus.request(
      readItems("channels", {
        fields: [
          "*",
          // @ts-ignore
          {
            "bots.bot_id": [
              "*",
              { datasources: ["*", { tables: ["*", { fields: ["*"] }] }] },
            ],
          },
        ],
        filter: {
          provider_id: {
            _eq: providerId,
          },
        },
      })
    );

    // console.log(items);

    if (items.length > 0) {
      const bots = items[0].bots?.map((bot) => bot.bot_id);
      const channel = _.omit(items[0], "bots");
      const response = {
        ...channel,
        bots: bots?.map((bot) => {
          return {
            ...bot,
            datasources:
              bot.datasources?.length > 0 ? transformData(bot.datasources) : [],
          };
        }),
      };
      return c.json(response);
    }
    return c.json({ message: `Not found: ${providerId}` }, 404);
  } catch (error) {
    throw DirectusError.fromDirectusResponse(error);
  }
});

function transformData(inputData: any) {
  return inputData.map((item: any) => {
    if (item.tables?.length > 0) {
      const table = item.tables[0];
      return {
        id: item.id,
        sheet_id: item.connection_string.split("/").pop(),
        sheet_name: table.name,
        table_name: table.name,
        table_schema: table.fields.map((field: any) => ({
          example: field.example,
          field_name: field.name,
          field_type: field.type,
          is_noun: field.is_noun,
          description: field.description,
        })),
        example_queries: table.metadata.example_queries,
        table_description: null,
        instructions: table.instructions,
      };
    }
    return item;
  });
}

export { channelsRoutes };
