import { Context } from "hono";
import { createFactory } from "hono/factory";
import { opensearchMiddleware } from "~/middlewares/opensearch.middleware";
import { supabaseMiddleware } from "~/middlewares/supabase.middleware";
import { Env } from "~/types/hono.types";

import { readItems } from "@directus/sdk";
import { endOfDay, startOfDay } from "date-fns";
import {
  getFacebookFollowerProfileGraphApi,
  getLineFollowerProfileMessagingApi,
} from "~/services/follow-profile.service";
import * as MonthAnalytics from "~/services/month-analytics.service";
import * as TodayAnalytics from "~/services/today-analytics.service";
import pLimit from "p-limit";

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

export const getStatsHandler = factory.createHandlers(
  opensearchMiddleware,
  async (c: Context<Env>) => {
    const opensearch = c.get("opensearch");
    const { id } = c.req.param();
    const { timeUnit, startDate, endDate } = c.req.query();
    const now = new Date();

    let start, end;
    let interval = "day";
    let breakdown = "daily_breakdown";
    if (startDate && endDate) {
      start = startOfDay(new Date(startDate));
      end = endOfDay(new Date(endDate));
      interval = "day";
      breakdown = "daily_breakdown";
    } else if (timeUnit) {
      switch (timeUnit) {
        case "day":
          start = startOfDay(now);
          end = endOfDay(now);
          interval = "hour";
          breakdown = "hourly_breakdown";
          break;
        case "month":
          start = new Date(now.getFullYear(), now.getMonth(), 1);
          end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
          interval = "day";
          breakdown = "daily_breakdown";
          break;
        case "lastMonth":
          start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
          end = new Date(now.getFullYear(), now.getMonth(), 0);
          interval = "day";
          breakdown = "daily_breakdown";
          break;
      }
    }

    // const query = {
    //   size: 0,
    //   query: {
    //     bool: {
    //       filter: [
    //         {
    //           term: {
    //             "bot_id.keyword": id,
    //           },
    //         },
    //         {
    //           range: {
    //             created_at: {
    //               // gte: "now/d",
    //               // lt: "now/d+1d",
    //               gte: start,
    //               lte: end,
    //               time_zone: "Asia/Bangkok",
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   },
    //   aggs: {
    //     total_conversations: {
    //       value_count: {
    //         field: "_id",
    //       },
    //     },
    //     confidence_summary: {
    //       stats: {
    //         script: {
    //           source: "doc['confidence'].value",
    //         },
    //       },
    //     },
    //     total_stats: {
    //       stats_bucket: {
    //         buckets_path: "hourly_breakdown>_count",
    //       },
    //     },
    //     platform_metrics: {
    //       terms: {
    //         field: "platform.keyword",
    //         missing: "unknown",
    //         size: 10,
    //         order: {
    //           _count: "desc",
    //         },
    //       },
    //       aggs: {
    //         unique_users: {
    //           cardinality: {
    //             field: "social_id.keyword",
    //           },
    //         },
    //         avg_confidence: {
    //           avg: {
    //             field: "confidence",
    //           },
    //         },
    //         fallback_rate: {
    //           filter: {
    //             term: {
    //               fallback: 1,
    //             },
    //           },
    //         },
    //         top_intents: {
    //           terms: {
    //             field: "intent.keyword",
    //             size: 5,
    //           },
    //         },
    //       },
    //     },
    //     intent_analysis: {
    //       terms: {
    //         field: "intent.keyword",
    //         missing: "unknown",
    //         size: 20,
    //         order: {
    //           _count: "desc",
    //         },
    //       },
    //       aggs: {
    //         avg_confidence: {
    //           avg: {
    //             field: "confidence",
    //           },
    //         },
    //         platforms: {
    //           terms: {
    //             field: "platform.keyword",
    //             size: 5,
    //           },
    //         },
    //         success_rate: {
    //           avg: {
    //             script: {
    //               source: "doc['fallback'].value == 0 ? 1 : 0",
    //             },
    //           },
    //         },
    //       },
    //     },
    //     knowledge_usage: {
    //       terms: {
    //         field: "knowledge_id.keyword",
    //         missing: "unknown",
    //         size: 20,
    //         order: {
    //           _count: "desc",
    //         },
    //       },
    //       aggs: {
    //         avg_confidence: {
    //           avg: {
    //             field: "confidence",
    //           },
    //         },
    //         platforms: {
    //           terms: {
    //             field: "platform.keyword",
    //             size: 5,
    //           },
    //         },
    //         top_intents: {
    //           terms: {
    //             field: "intent.keyword",
    //             size: 5,
    //           },
    //         },
    //       },
    //     },
    //     hourly_breakdown: {
    //       date_histogram: {
    //         field: "created_at",
    //         calendar_interval: "hour",
    //         time_zone: "Asia/Bangkok",
    //         min_doc_count: 0,
    //         extended_bounds: {
    //           min: "now/d",
    //           max: "now/d+1d",
    //         },
    //       },
    //       aggs: {
    //         platforms: {
    //           terms: {
    //             field: "platform.keyword",
    //             size: 10,
    //           },
    //         },
    //         unique_users: {
    //           cardinality: {
    //             field: "social_id.keyword",
    //           },
    //         },
    //         avg_confidence: {
    //           avg: {
    //             field: "confidence.keyword",
    //           },
    //         },
    //         fallback_rate: {
    //           filter: {
    //             term: {
    //               fallback: 1,
    //             },
    //           },
    //         },
    //       },
    //     },
    //     fallback_analysis: {
    //       filter: {
    //         term: {
    //           fallback: 1,
    //         },
    //       },
    //       aggs: {
    //         by_platform: {
    //           terms: {
    //             field: "platform.keyword",
    //             size: 10,
    //           },
    //         },
    //         by_intent: {
    //           terms: {
    //             field: "intent.keyword",
    //             size: 20,
    //           },
    //         },
    //         low_confidence: {
    //           range: {
    //             field: "confidence",
    //             ranges: [
    //               { to: 0.3 },
    //               { from: 0.3, to: 0.5 },
    //               { from: 0.5, to: 0.7 },
    //               { from: 0.7 },
    //             ],
    //           },
    //         },
    //       },
    //     },
    //     confidence_distribution: {
    //       range: {
    //         field: "confidence",
    //         ranges: [
    //           { to: 0.2 },
    //           { from: 0.2, to: 0.4 },
    //           { from: 0.4, to: 0.6 },
    //           { from: 0.6, to: 0.8 },
    //           { from: 0.8 },
    //         ],
    //       },
    //     },
    //     rag_intent_analysis: {
    //       nested: {
    //         path: "rag_intents.keyword",
    //       },
    //       aggs: {
    //         top_rag_intents: {
    //           terms: {
    //             field: "rag_intents.keyword",
    //             size: 20,
    //           },
    //         },
    //       },
    //     },
    //   },
    // };
    const query = {
      size: 0,
      query: {
        bool: {
          filter: [
            {
              term: {
                "bot_id.keyword": id,
              },
            },
            {
              range: {
                created_at: {
                  gte: start,
                  lte: end,
                  time_zone: "Asia/Bangkok",
                },
              },
            },
          ],
        },
      },
      aggs: {
        total_conversations: {
          value_count: {
            field: "_id",
          },
        },
        confidence_summary: {
          stats: {
            script: {
              source: "doc['confidence'].value",
            },
          },
        },
        total_stats: {
          stats_bucket: {
            buckets_path: `${breakdown}>_count`,
          },
        },
        platform_metrics: {
          terms: {
            field: "platform.keyword",
            missing: "unknown",
            size: 10,
            order: {
              _count: "desc",
            },
          },
          aggs: {
            unique_users: {
              cardinality: {
                field: "social_id.keyword",
              },
            },
            avg_confidence: {
              avg: {
                field: "confidence",
              },
            },
            fallback_rate: {
              filter: {
                term: {
                  fallback: 1,
                },
              },
            },
            top_intents: {
              terms: {
                field: "intent.keyword",
                size: 5,
              },
            },
          },
        },
        intent_analysis: {
          terms: {
            field: "intent.keyword",
            missing: "unknown",
            size: 20,
            order: {
              _count: "desc",
            },
          },
          aggs: {
            avg_confidence: {
              avg: {
                field: "confidence",
              },
            },
            platforms: {
              terms: {
                field: "platform.keyword",
                size: 5,
              },
            },
            success_rate: {
              avg: {
                script: {
                  source: "doc['fallback'].value == 0 ? 1 : 0",
                },
              },
            },
          },
        },
        knowledge_usage: {
          terms: {
            field: "knowledge_id.keyword",
            missing: "unknown",
            size: 20,
            order: {
              _count: "desc",
            },
          },
          aggs: {
            avg_confidence: {
              avg: {
                field: "confidence",
              },
            },
            platforms: {
              terms: {
                field: "platform.keyword",
                size: 5,
              },
            },
            top_intents: {
              terms: {
                field: "intent.keyword",
                size: 5,
              },
            },
          },
        },
        fallback_analysis: {
          filter: {
            // term: {
            //   fallback: 1,
            // },
            term: { "action.keyword": "Fallback" },
          },
          aggs: {
            by_platform: {
              terms: {
                field: "platform.keyword",
                size: 10,
              },
            },
            by_intent: {
              terms: {
                field: "intent.keyword",
                size: 20,
              },
            },
            low_confidence: {
              range: {
                field: "confidence",
                ranges: [
                  { to: 0.3 },
                  { from: 0.3, to: 0.5 },
                  { from: 0.5, to: 0.7 },
                  { from: 0.7 },
                ],
              },
            },
          },
        },
        confidence_distribution: {
          range: {
            field: "confidence",
            ranges: [
              { to: 0.2 },
              { from: 0.2, to: 0.4 },
              { from: 0.4, to: 0.6 },
              { from: 0.6, to: 0.8 },
              { from: 0.8 },
            ],
          },
        },
        rag_intent_analysis: {
          nested: {
            path: "rag_intents.keyword",
          },
          aggs: {
            top_rag_intents: {
              terms: {
                field: "rag_intents.keyword",
                size: 20,
              },
            },
          },
        },
      },
    };
    if (interval === "day") {
      query.aggs.daily_breakdown = {
        date_histogram: {
          field: "created_at",
          calendar_interval: interval,
          time_zone: "Asia/Bangkok",
          min_doc_count: 0,
          extended_bounds: {
            min: start,
            max: end,
          },
        },
        aggs: {
          platforms: {
            terms: {
              field: "platform.keyword",
              size: 10,
            },
          },
          unique_users: {
            cardinality: {
              field: "social_id.keyword",
            },
          },
          avg_confidence: {
            avg: {
              field: "confidence",
            },
          },
          fallback_rate: {
            filter: {
              term: {
                fallback: 1,
              },
            },
          },
        },
      };
    } else {
      query.aggs.hourly_breakdown = {
        date_histogram: {
          field: "created_at",
          calendar_interval: interval,
          time_zone: "Asia/Bangkok",
          min_doc_count: 0,
          extended_bounds: {
            min: start,
            max: end,
          },
        },
        aggs: {
          platforms: {
            terms: {
              field: "platform.keyword",
              size: 10,
            },
          },
          unique_users: {
            cardinality: {
              field: "social_id.keyword",
            },
          },
          avg_confidence: {
            avg: {
              field: "confidence",
            },
          },
          fallback_rate: {
            filter: {
              term: {
                fallback: 1,
              },
            },
          },
        },
      };
    }

    const res = await opensearch.search({
      index: "bots_logs",
      body: query,
    });

    const transformed =
      interval === "hour"
        ? TodayAnalytics.transformESResponse(res as any)
        : MonthAnalytics.transformMonthESResponse(res as any);
    // console.log(TodayAnalytics.generateReport(transformed));
    // const { summary, hourlyData } = transformed;

    // return c.json({ ...summary, hourlyData });
    return c.json(transformed);
  }
);

export const getLatestLogs = factory.createHandlers(
  supabaseMiddleware,
  async (c) => {
    const supabase = c.get("supabase");
    const botId = c.req.param("id");

    // ดึงเฉพาะฟิลด์ที่จำเป็น
    const { data, error } = await supabase
      .from("bots_logs")
      .select("id, sentence, social_id, provider_id, platform, created")
      .eq("bot_id", botId)
      .order("created", { ascending: false })
      .order("social_id", { ascending: false });

    console.log("Latest logs:", data ? data[0] : "No data");

    if (error || !data) {
      console.error("❌ Supabase Error:", error?.message);
      return c.json({ error: error?.message || "Failed to fetch logs" }, 400);
    }

    // เก็บ log ล่าสุดของแต่ละ social_id
    const latestLogs = Object.values(
      data.reduce((acc, log) => {
        if (!acc[log.social_id]) acc[log.social_id] = log;
        return acc;
      }, {})
    );

    const directus = c.get("directus");
    const providerIds = [...new Set(latestLogs.map((log) => log.provider_id))];

    try {
      // ดึงข้อมูล channel ทั้งหมดในคำขอเดียว
      const channels = await directus.request(
        readItems("channels", {
          fields: ["id", "provider_id", "provider_name", "provider_info", "provider_access_token"],
          filter: { provider_id: { _in: providerIds } },
        })
      );

      const channelMap = Object.fromEntries(
        channels.map((ch) => [ch.provider_id, ch])
      );

      // จำกัด concurrent profile fetch (สูงสุด 5 พร้อมกัน)
      const limit = pLimit(5);

      const latestLogsWithChannels = await Promise.all(
        latestLogs.map((item) =>
          limit(async () => {
            const channel = channelMap[item.provider_id] || null;
            let profile = null;

            if (channel) {
              const platform = item.platform.toLowerCase();
              try {
                if (platform === "line") {
                  profile = await getLineFollowerProfileMessagingApi(
                    item.social_id,
                    channel.provider_access_token
                  );
                } else if (platform === "facebook") {
                  profile = await getFacebookFollowerProfileGraphApi(
                    item.social_id,
                    channel.provider_access_token
                  );
                }
                // ถ้าในอนาคตรองรับ batch API สามารถเปลี่ยนตรงนี้ได้
              } catch (profileError) {
                console.warn(
                  `⚠️ Failed to fetch profile for ${item.social_id}:`,
                  profileError
                );
              }
            }

            return { ...item, channel, profile };
          })
        )
      );

      return c.json(latestLogsWithChannels);
    } catch (fetchError) {
      console.error("❌ Failed to fetch channels or profiles:", fetchError);
      return c.json({ error: "Failed to fetch channels or profiles" }, 500);
    }
  }
);
