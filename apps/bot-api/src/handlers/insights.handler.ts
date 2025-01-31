import { Context } from "hono";
import { createFactory } from "hono/factory";
import { opensearchMiddleware } from "~/middlewares/opensearch.middleware";
import { supabaseMiddleware } from "~/middlewares/supabase.middleware";
import { Env } from "~/types/hono.types";

import * as TodayAnalytics from "~/services/today-analytics.service";

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

export const getTodayStatsHandler = factory.createHandlers(
  opensearchMiddleware,
  async (c: Context<Env>) => {
    const opensearch = c.get("opensearch");
    const { id } = c.req.param();

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
                  gte: "now/d",
                  lt: "now/d+1d",
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
            buckets_path: "hourly_breakdown>_count",
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
        hourly_breakdown: {
          date_histogram: {
            field: "created_at",
            calendar_interval: "hour",
            time_zone: "Asia/Bangkok",
            min_doc_count: 0,
            extended_bounds: {
              min: "now/d",
              max: "now/d+1d",
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
                field: "confidence.keyword",
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
        },
        fallback_analysis: {
          filter: {
            term: {
              fallback: 1,
            },
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

    const res = await opensearch.search({
      index: "bots_logs",
      body: query,
    });

    const transformed = TodayAnalytics.transformESResponse(res as any);
    console.log(TodayAnalytics.generateReport(transformed));
    // const { summary, hourlyData } = transformed;

    // return c.json({ ...summary, hourlyData });
    return c.json(transformed);
  }
);

export const getLatestLogs = factory.createHandlers(supabaseMiddleware, async (c) => {
  const supabase = c.get("supabase");

  const { data, error } = await supabase
    .from("bots_logs")
    .select("*")
    .filter("bot_id", "eq", c.req.param("id"))
    .order("social_id", { ascending: true })  // จัดกลุ่มตาม social_id
    .order("created", { ascending: false }) // เลือกข้อมูลที่ใหม่ที่สุด

  if (error) {
    return c.json({ error: error.message }, 400);
  }

  // ใช้ Map เพื่อเก็บค่าล่าสุดของแต่ละ social_id
  const latestLogs = new Map();
  data.forEach((log) => {
    if (!latestLogs.has(log.social_id)) {
      latestLogs.set(log.social_id, log);
    }
  });

  return c.json(Array.from(latestLogs.values()));
});
