import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import { readItems, readItem } from "@directus/sdk";
import { Env } from "~/@types/hono.types";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { cache } from "hono/cache";
import { Channel, VectorQuerySentenceResponse, Workspace } from "~/@types/app";
import { knowledgesRoutes } from "./knowledges";
import { getTextEmbedding, groupByIntentWithMaxScore } from "~/utils/vector";
import * as _ from "lodash";
import { loadKnowledges } from "~/service/knowledges";

const botsRoutes = new Hono<Env>()
  .get(
    "/:id",
    cache({
      cacheName: "my-app",
      cacheControl: "max-age=15",
    }),
    async (c) => {
      try {
        const id = c.req.param("id");
        const directus = getDirectusClient();
        await directus.setToken(c.get("token"));
        const item = await directus.request(readItem("bots", id));
        return c.json(item);
      } catch (error) {
        throw DirectusError.fromDirectusResponse(error);
      }
    }
  )
  .post("/:id/logs", async (c) => {
    try {
      const id = c.req.param("id") as string;
      const data = await c.req.json();
      console.log(data);

      return c.json(data);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get("/:id/channels", async (c) => {
    try {
      const id = c.req.param("id");
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));

      const item = await directus.request<{
        team: { channels: Array<Partial<Channel>> };
        channels: Array<{
          id: number;
          channel_id: Partial<Channel>;
        }>;
      }>(
        readItem("bots", id, {
          fields: [
            {
              // @ts-ignore
              channels: [
                "id",
                {
                  channel_id: ["id", "name", "logo", "provider_id", "platform"],
                },
              ],
            },
            {
              // @ts-ignore
              "team.channels": [
                "id",
                "name",
                "logo",
                "provider_id",
                "platform",
              ],
            },
          ],
        })
      );

      const active = item.channels
        .map((channel) => {
          return {
            _id: channel.id,
            ...channel.channel_id,
          };
        })
        .sort((a, b) => a.name?.localeCompare(b.name as string) || 0);
      const inactive = item.team.channels
        .filter(
          (channel) =>
            !active.some((activeChannel) => activeChannel.id === channel.id)
        )
        .sort((a, b) => a.name?.localeCompare(b.name as string) || 0);

      return c.json([...active, ...inactive]);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .delete("/:id/channels", async (c) => {
    try {
      const id = c.req.param("id");
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));

      const { bot_id, channel_id } = await c.req.json();

      // @ts-ignore
      const channels = item.channels.map((channel) => channel.channel_id);
      return c.json(channels);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get("/:id/knowledges", async (c) => {
    try {
      const id = c.req.param("id") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const item = await directus.request(
        readItems("bots_knowledges", {
          fields: ["id", "name", "total_intent"],
          filter: { bot: id },
        })
      );
      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get(
    "/:id/search",
    cache({ cacheName: "search", cacheControl: "max-age=15" }),
    async (c) => {
      const query = c.req.query("q") as string;
      const k = Number(c.req.query("k") || "5");
      const uid = _.get(c.req.query, "uid", "");
      const platform = c.req.query("platform") as string;

      if (!query) {
        return c.json({ message: "q is required" });
      }

      const values = await getTextEmbedding(query);

      if (c.env.VECTOR_SENTENCES) {
        const response = (await c.env.VECTOR_SENTENCES.query(values, {
          topK: 100,
          returnValues: false,
          returnMetadata: "indexed",
          filter: {
            bot_id: c.req.param("id"),
          },
        })) as VectorQuerySentenceResponse;

        const directus = getDirectusClient();
        await directus.setToken(c.get("token"));
        const group = groupByIntentWithMaxScore(response);
        const matches = await Promise.all(
          Object.values(group)
            .slice(0, k)
            .map(async (x) => {
              const knowledge = await loadKnowledges({
                c,
                knowledgeId: x.metadata.knowledge_id,
                directus,
              });

              const intent = knowledge.intents.find(
                (intent) => intent.id === x.metadata.intent_id
              );

              return {
                knowledge_id: x.metadata.knowledge_id,
                intent_id: x.metadata.intent_id,
                score: x.score,
                intent: intent?.name,
                responses: intent?.responses,
              };
            })
        );

        const messages = matches[0]?.responses?.map((response) => {
          if (platform === "line") {
            return {
              type: "text",
              text: response,
            };
          } else if (platform === "facebook") {
            return {
              text: response,
            };
          }

          return response;
        });

        return c.json({
          messages,
          matches: Object.values(matches).slice(0, k),
        });
      }

      return c.json({ message: "No suppot local development" });
    }
  );

export { botsRoutes };
