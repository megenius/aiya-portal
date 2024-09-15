import { Hono } from "hono";
import { adsRoutes } from "./routes/ads";

import { authMiddleware } from "@repo/shared/middlewares/auth";
import { lambdaAuthMiddleware } from "./middlewares/lambda-auth";
import { cache } from "hono/cache";
import { AdAccount, AdCampaign, AdSet } from "./@types/app";
import { AdApi, AdSetApi, Campaign, CampaignApi } from "./utils/facebook-api";
import { Env } from "./@types/hono.types";
import { getAdminDirectusClient } from "./config/directus";
import { createItems } from "@directus/sdk";
import { toDate } from "date-fns";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { adminRoutes } from "./routes/admin";
import { date } from "zod";

const app = new Hono<Env>()
  .basePath("/api")
  .use("*", (c, next) => {
    const hostname = new URL(c.req.url).hostname;

    console.log("hostname", hostname);
    if (hostname.includes("lambda-api")) {
      return lambdaAuthMiddleware(c, next);
    }

    return authMiddleware(c, next);
  })
  // .get(
  //   "*",
  //   cache({
  //     cacheName: "my-app",
  //     cacheControl: "max-age=15",
  //   })
  // )
  .route("/ads", adsRoutes)
  .route("/ads/admin", adminRoutes)
  .onError((err, c) => {
    return c.json({ error: err.message });
  });

// export default app;

export default {
  fetch: app.fetch,
  async queue(batch: MessageBatch<AdAccount | any>, env: Env["Bindings"]) {
    const FB_API_URL = env["FB_API_URL"];

    console.log("batch", batch.queue, batch.messages.length);

    if (batch.queue == "ad-account-sync") {
      const adAccounts = batch.messages.map((message) => message.body);

      for (const ad of adAccounts) {
        const campaignApi = new CampaignApi(
          ad.ad_account_id as string,
          ad.access_token as string,
          FB_API_URL
        );

        await campaignApi.getCampaignInfo(async (campaigns) => {
          await env.AD_CAMPAIGN_SYNC.sendBatch(
            campaigns.map((data) => {
              return {
                body: {
                  campaign_id: data.id,
                  ad_account: ad.id,
                  ad_account_id: ad.ad_account_id,
                  name: data.name,
                  start_date: data.start_time,
                  end_date: data.end_time,
                  status: data.status,
                  last_synced: toDate(new Date()).toISOString(),
                  data: data,
                },
              };
            })
          );
        });

        const adsetApi = new AdSetApi(
          ad.ad_account_id as string,
          ad.access_token as string,
          FB_API_URL
        );

        await adsetApi.getAdSetInfo(async (adsets) => {
          await env.AD_SETS_SYNC.sendBatch(
            adsets.map((data) => {
              return {
                body: {
                  ad_account: ad.id,
                  ad_account_id: ad.ad_account_id,
                  campaign_id: data.campaign.id,
                  name: data.name,
                  ad_set_id: data.id,
                  data,
                },
              };
            })
          );
        });

        const adApi = new AdApi(
          ad.ad_account_id as string,
          ad.access_token as string,
          FB_API_URL
        );

        await adApi.getAdInfo(async (ads) => {
          await env.AD_ADS_SYNC.sendBatch(
            ads.map((data) => {
              return {
                body: {
                  ad_account: ad.id,
                  ad_account_id: ad.ad_account_id,
                  campaign_id: data.campaign_id,
                  name: data.name,
                  ad_id: data.id,
                  data: {
                    ...data,
                    insights: data.insights?.data.length
                      ? data.insights?.data[0]
                      : {},
                  },
                  date_created: data.created_time,
                },
              };
            })
          );
        });
      }
    } else if (batch.queue == "ad-campaign-sync") {
      const directus = getAdminDirectusClient();
      const accounts = new Map<string, string>();
      const accountToken = new Map<string, string>();
      const items = batch.messages.map((message) => message.body);
      try {
        const campaigns = await directus.request(
          createItems("ad_campaigns", items)
        );
      } catch (error) {
        const derror = DirectusError.fromDirectusResponse(error);
        console.error("Directus Error", derror, JSON.stringify(items));
        throw derror;
      }
    } else if (batch.queue == "ad-sets-sync") {
      const directus = getAdminDirectusClient();
      const items = batch.messages.map((message) => message.body);
      try {
        await directus.request(createItems("ad_sets", items));
      } catch (error) {
        const derror = DirectusError.fromDirectusResponse(error);
        console.error("Directus Error", derror, JSON.stringify(items));
        throw derror;
      }
    } else if (batch.queue == "ad-ads-sync") {
      const directus = getAdminDirectusClient();
      const items = batch.messages.map((message) => message.body);
      try {
        await directus.request(createItems("ad_ads", items));
      } catch (error) {
        const derror = DirectusError.fromDirectusResponse(error);
        console.error("Directus Error", derror, JSON.stringify(items));
        throw derror;
      }
    } else if (batch.queue == "ad-campaign-sync-start") {
      await Promise.all(
        batch.messages.map(async (message) => {
          const ad = message.body;
          const api = new CampaignApi(
            ad.ad_account_id as string,
            ad.access_token as string,
            FB_API_URL
          );

          const campaigns = await api.getCampaignInfo();
          console.log("campaigns", campaigns.length);

          for (const campaign of campaigns) {
            await env.AD_CAMPAIGN_SYNC_PROCESS.send({
              ad_account: ad.id,
              ad_account_id: ad.ad_account_id,
              access_token: ad.access_token,
              data: campaign,
            }).then((res) => {
              console.log("AD_CAMPAIGN_SYNC_PROCESS", campaign.id);
            });
          }

          return {};
        })
      );
    } else if (batch.queue == "ad-campaign-sync-process") {
      const directus = getAdminDirectusClient();
      const accounts = new Map<string, string>();
      const accountToken = new Map<string, string>();
      const items = batch.messages.map((message) => {
        const { ad_account, ad_account_id, data, access_token } =
          message.body as {
            ad_account: string;
            ad_account_id: string;
            access_token: string;
            data: Campaign;
          };

        accounts.set(ad_account_id, ad_account);
        accountToken.set(ad_account_id, access_token);
        console.log("processing campaign", data.id);

        return {
          campaign_id: data.id,
          ad_account: ad_account,
          ad_account_id: ad_account_id,
          name: data.name,
          start_date: data.start_time,
          end_date: data.end_time,
          status: data.status,
          last_synced: toDate(new Date()).toISOString(),
          data: data,
          access_token,
        } as AdCampaign & {
          access_token: string;
        };
      });

      try {
        const campaigns = await directus.request(
          createItems("ad_campaigns", items)
        );

        for (const campaign of campaigns) {
          try {
            const api = new AdSetApi(
              campaign.campaign_id as string,
              accountToken.get(campaign.ad_account_id as string) as string,
              FB_API_URL
            );

            const adsets = await api.getAdSetInfo();
            for (const adset of adsets) {
              await env.AD_CAMPAIGN_SYNC_PROCESS_ADSET.send({
                ad_account: accounts.get(campaign.ad_account_id as string),
                ad_campaign: campaign.id,
                campaign_id: campaign.campaign_id,
                ad_account_id: campaign.ad_account_id,
                name: adset.name,
                ad_set_id: adset.id,
                data: adset,
                access_token: accountToken.get(
                  campaign.ad_account_id as string
                ),
              } as AdSet & {
                access_token: string;
              }).then((res) => {
                console.log("AD_CAMPAIGN_SYNC_PROCESS_ADSET", adset.id);
              });
            }
          } catch (error) {
            console.error("Error processing adset", error);
          }
        }
      } catch (error) {
        const derror = DirectusError.fromDirectusResponse(error);
        console.error("Directus Error", derror, JSON.stringify(items));

        throw derror;
      }
    } else if (batch.queue === "ad-campaign-sync-process-adset") {
      const directus = getAdminDirectusClient();
      const accountToken = new Map<string, string>();
      const items = batch.messages.map((message) => {
        console.log("processing adset", message.body.ad_set_id);
        accountToken.set(message.body.ad_account_id, message.body.access_token);
        return {
          ...message.body,
          last_synced: toDate(new Date()).toISOString(),
        };
      });

      try {
        const adsets = await directus.request(createItems("ad_sets", items));
        // for (const adset of adsets) {
        //   const api = new AdApi(
        //     adset.ad_set_id as string,
        //     accountToken.get(adset.ad_account_id as string) as string,
        //     FB_API_URL
        //   );

        //   const ads = await api.getAdInfo();
        //   for (const ad of ads) {
        //     await env.AD_CAMPAIGN_SYNC_PROCESS_ADSET_ADS.send({
        //       ad_account: adset.ad_account,
        //       ad_campaign: adset.ad_campaign,
        //       ad_set: adset.id,
        //       ad_account_id: adset.ad_account_id,
        //       campaign_id: adset.campaign_id,
        //       ad_set_id: adset.ad_set_id,
        //       ad_id: ad.id,
        //       name: ad.name,
        //       data: ad,
        //       access_token: accountToken.get(adset.ad_account_id as string),
        //     }).then((res) => {
        //       console.log("AD_CAMPAIGN_SYNC_PROCESS_AD", ad.id);
        //     }).catch((error) => {
        //     });
        //   }
        // }
      } catch (error) {
        const derror = DirectusError.fromDirectusResponse(error);
        console.error("Directus Error", derror, JSON.stringify(items));

        throw derror;
      }
    } else if (batch.queue === "ad-campaign-sync-process-adset-ads") {
      const directus = getAdminDirectusClient();
      const accountToken = new Map<string, string>();
      const items = batch.messages.map((message) => {
        console.log("processing ad", message.body.ad_id);
        accountToken.set(message.body.ad_account_id, message.body.access_token);
        return {
          ...message.body,
          last_synced: toDate(new Date()).toISOString(),
        };
      });

      try {
        const ads = await directus.request(createItems("ad_ads", items));
      } catch (error) {
        const derror = DirectusError.fromDirectusResponse(error);
        console.error("Directus Error", derror, JSON.stringify(items));

        throw derror;
      }
    }
  },
};
