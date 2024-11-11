import { Hono } from "hono";
import * as Handler from "../handlers/providers.handler";
import { Env } from "~/types/hono.types";
import { followersRoutes } from "./followers";

const channelsRoutes = new Hono<Env>();
channelsRoutes.get("/:providerId", ...Handler.getProvider);
channelsRoutes.patch("/:providerId", ...Handler.updateProvider);

channelsRoutes.route("/:providerId/followers", followersRoutes);

channelsRoutes.post("/line/webhook-endpoint", ...Handler.lineWebhookEndpoint);

export { channelsRoutes };

// const channelsRoutes = new Hono<Env>()
//   .get("/:providerId", async (c) => {
//     try {
//       const providerId = c.req.param("providerId");
//       // console.log("providerId", providerId);
//       const directus = getDirectusClient();
//       await directus.setToken(c.get("token"));
//       const items = await directus.request(
//         readItems("channels", {
//           fields: [
//             "*",
//             {
//               // @ts-ignore
//               "bots.bot_id": [
//                 "*",
//                 { datasources: ["*", { tables: ["*", { fields: ["*"] }] }] },
//                 { muted_users: ["uid"] },
//               ],
//             },
//             {
//               // @ts-ignore
//               "orderbots.orderbot_id": ["*"],
//             },
//           ],
//           filter: {
//             provider_id: {
//               _eq: providerId,
//             },
//           },
//         })
//       );

//       // console.log("items", items);

//       if (items.length > 0) {
//         const bots = items[0].bots
//           ?.filter((bot) => !!bot.bot_id)
//           .map((bot) => bot.bot_id);
//         const orderbots = items[0].orderbots
//           ?.filter((bot) => !!bot.orderbot_id)
//           .map((bot) => bot.orderbot_id);
//         const channel = _.omit(items[0], "bots");
//         const response = {
//           ...channel,
//           orderbots,
//           bots: bots?.map((bot) => {
//             return {
//               ...bot,
//               datasources:
//                 bot?.datasources?.length > 0
//                   ? transformData(bot?.datasources)
//                   : [],
//             };
//           }),
//         };

//         // console.log("response", response);
//         return c.json(response);
//       }
//       return c.json({ message: `Not found: ${providerId}` }, 404);
//     } catch (error) {
//       throw DirectusError.fromDirectusResponse(error);
//     }
//   })
//   .patch("/:providerId", async (c) => {
//     try {
//       const providerId = c.req.param("providerId");
//       const directus = getDirectusClient();
//       await directus.setToken(c.get("token"));
//       const item = await directus.request(
//         updateItem("channels", providerId, c.req.json())
//       );

//       return c.json(item);
//     } catch (error) {
//       throw DirectusError.fromDirectusResponse(error);
//     }
//   })
//   .post("/line/webhook-endpoint", async (c) => {
//     try {
//       const { channel_id, endpoint } = await c.req.json();
//       const directus = getDirectusClient();
//       await directus.setToken(c.get("token"));
//       const channel = await directus.request<Channel>(
//         readItem("channels", channel_id)
//       );
//       const client = new MessagingApiClient({
//         channelAccessToken: channel.provider_access_token as string,
//       });

//       const { endpoint: existEndpoint, active } =
//         await client.getWebhookEndpoint();

//       const forward_urls = channel.forward_urls || [];
//       const ignoreEndpoints = [
//         ...forward_urls,
//         "https://webhook-line.megenius.workers.dev/v1/line",
//         "https://6upazw951k.execute-api.ap-southeast-1.amazonaws.com/prod",
//         "https://beacon-webhook.aiya.ai",
//         "https://4bjzpvprnd.execute-api.ap-southeast-1.amazonaws.com/prod",
//         "https://webhook-dev.aiya.me/api/v2/line/webhook",
//         "https://webhook.aiya.me/api/v2/line/webhook",
//       ];

//       if (existEndpoint && !ignoreEndpoints.includes(existEndpoint)) {
//         const channel = await directus.request(
//           updateItem("channels", channel_id, {
//             forward_urls: _.uniqBy(
//               [
//                 ...forward_urls,
//                 {
//                   name: "External",
//                   url: existEndpoint,
//                   enabled: active,
//                 },
//               ],
//               "url"
//             ),
//           })
//         );

//         await c.env.KV_PORTAL?.put(
//           `channel.id=${channel_id}`,
//           JSON.stringify(channel)
//         ).then(() => console.log("put kv - " + `channel.id=${channel_id}`));
//       }

//       const result = await client.setWebhookEndpoint({ endpoint });
//       return c.json(result);
//     } catch (error) {
//       throw DirectusError.fromDirectusResponse(error);
//     }
//   });

// export function transformData(inputData: any) {
//   return inputData.map((item: any) => {
//     const table = item.tables[0];
//     if (table) {
//       return {
//         id: item.id,
//         sheet_id: item.connection_string.split("/").pop(),
//         sheet_name: table.name,
//         table_name: table.name,
//         table_schema: table.fields?.map((field: any) => ({
//           example: field.example,
//           field_name: field.name,
//           field_type: field.map_type,
//           is_noun: field.is_noun,
//           description: field.description,
//         })),
//         example_queries: table.metadata?.example_queries,
//         table_description: table.description,
//         instructions: table.instructions,
//       };
//     }
//     return {};
//   });
// }
