import {
  createItem,
  deleteItem,
  readItem,
  readItems,
  updateItem,
} from "@directus/sdk";
import { Context } from "hono";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { cachingMiddleware } from "~/middlewares/cache-get.middleware";
import {
  Bot,
  BotIntent,
  BotIntentImport,
  BotKnowledge,
  Channel,
  IntentQuestion,
} from "~/types/app";
import { Env } from "~/types/hono.types";
import { randomHexString } from "@repo/shared/utils";
import * as _ from "lodash";
import { hasItemUpdated } from "~/utils/kv";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { knowledgeMiddleware } from "~/middlewares/knowledge.middleware";
import { getKnowledge } from "~/services/knowledge.service";
import { textEmbeddingMiddleware } from "~/middlewares/text-embedding.middleware";
import { supabaseMiddleware } from "~/middlewares/supabase.middleware";

const factory = createFactory<Env>();

export const getLogsHandler = factory.createHandlers(
  // cachingMiddleware({
  //   ttl: 60 * 60,
  //   revalidate: async (c: Context<Env>, cachedData: any) => {
  //     return hasItemUpdated(c, cachedData, (c) =>
  //       ["bots_knowledges", c.req.param("knowledgeId")].join("|")
  //     );
  //   },
  // }),
  // logger(),
  // directusMiddleware,
  // knowledgeMiddleware,
  supabaseMiddleware,
  async (c: Context<Env>) => {
    const { start, end } = c.req.query();
    const supabase = c.get("supabase");
    const res = await supabase
      .from("bots_logs")
      .select("*")
      // .lte("created", end)
      // .gte("created", start)
      .filter("bot_id", "eq", c.req.param("id"))
      .order("created", { ascending: false })
      .range(0, 10000);

    const result = {
      start,
      end,
      data: res.data,
    };
    return c.json(result);
  }
);
