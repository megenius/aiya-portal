import { readItem, readItems } from "@directus/sdk";
import { createMiddleware } from "hono/factory";
import _ from "lodash";
import { Channel } from "~/types/app";
import { Env } from "~/types/hono.types";

export const channelMiddleware = createMiddleware<Env>(async (c, next) => {
  const providerId = c.req.param("providerId") as string;
  const uid = c.req.param("uid") as string;
  console.log("providerId", providerId, "uid", uid);
  const kv = c.env.CACHING;

  const cacheKey = ["channels", providerId, "followers", uid].join("|");
  console.log("knowledgeMiddleware.cacheKey:", cacheKey);
  const cachedResponse = await kv.get<Channel>(cacheKey, "json");


  // return c.json(cachedResponse)

  if (cachedResponse) {
    c.set("channel", cachedResponse);
  } else {
    const directus = c.get("directus");
    const items = await directus.request(
      readItems("channels", {
        fields: [
          "*",
          {
            // @ts-ignore
            "bots.bot_id": [
              "*",
              { datasources: ["*", { tables: ["*", { fields: ["*"] }] }] },
              { muted_users: ["uid"] },
              { orders: ["name", "template", "metadata"] },
            ],
          },
          // {
          //   // @ts-ignore
          //   "orderbots.orderbot_id": ["*"],
          // },
        ],
        filter: {
          provider_id: {
            _eq: providerId,
          },
        },
      })
    );

    if (items.length > 0) {
      const bots = items[0].bots
        ?.filter((bot) => !!bot.bot_id)
        .map((bot) => bot.bot_id);
      const orderbots = items[0].orderbots
        ?.filter((bot) => !!bot.orderbot_id)
        .map((bot) => bot.orderbot_id);
      const channel = _.omit(items[0], "bots");
      const response = {
        ...channel,
        orderbots: bots?.filter((b) => b.type === "orderbot"),
        bots: bots
          ?.filter((b) => b.type === "chatbot")
          .map((bot) => {
            return {
              ...bot,
              datasources:
                bot?.datasources?.length > 0
                  ? transformData(bot?.datasources)
                  : [],
            };
          }),
      };

      await kv.put(cacheKey, JSON.stringify(response));
      c.set("channel", response);
    }
  }

  await next();
});

export function transformData(inputData: any) {
  return inputData.map((item: any) => {
    const table = item.tables[0];
    if (table) {
      return {
        id: item.id,
        sheet_id: item.connection_string.split("/").pop(),
        sheet_name: table.name,
        table_name: table.name,
        table_schema: table.fields?.map((field: any) => ({
          example: field.example,
          field_name: field.name,
          field_type: field.map_type,
          is_noun: field.is_noun,
          description: field.description,
        })),
        example_queries: table.metadata?.example_queries,
        table_description: table.description,
        instructions: table.instructions,
      };
    }
    return {};
  });
}
