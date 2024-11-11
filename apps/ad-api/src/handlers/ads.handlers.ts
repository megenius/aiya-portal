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
import {
  Bot,
  BotIntent,
  BotKnowledge,
  Channel,
  ImageMessageResponse,
  TextMessageResponse,
  ResponseElementType,
} from "~/types/app";
import { Env } from "~/types/hono.types";
import { getDirectusClient } from "~/utils/directus";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { randomHexString } from "@repo/shared/utils";
import * as _ from "lodash";
// import { directusMiddleware } from "~/middlewares/directus.middleware";
// import { cachingMiddleware } from "~/middlewares/cache-get.middleware";
// import { hasItemUpdated } from "~/utils/kv";
// import { getKnowledge } from "~/services/knowledge.service";
// import { textEmbeddingMiddleware } from "~/middlewares/text-embedding.middleware";
// import { transformData } from "~/utils/datasource";
// import { opensearchMiddleware } from "~/middlewares/opensearch.middleware";
// import { sendEventToCapi } from "~/services/facebook.service";

const factory = createFactory<Env>();

