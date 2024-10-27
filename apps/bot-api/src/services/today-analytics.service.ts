interface ESResponse {
  took: number;
  aggregations: {
    total_conversations: {
      value: number
    }
    confidence_summary: {
      count: number;
      min: number;
      max: number;
      avg: number;
      sum: number;
    };
    knowledge_usage: {
      buckets: Array<{
        key: string;
        doc_count: number;
        top_intents: {
          buckets: Array<{
            key: string;
            doc_count: number;
          }>;
        };
        avg_confidence: {
          value: number;
        };
        platforms: {
          buckets: Array<{
            key: string;
            doc_count: number;
          }>;
        };
      }>;
    };
    confidence_distribution: {
      buckets: Array<{
        key: string;
        from?: number;
        to?: number;
        doc_count: number;
      }>;
    };
    platform_metrics: {
      buckets: Array<{
        key: string;
        doc_count: number;
        unique_users: { value: number };
        fallback_rate: { doc_count: number };
        top_intents: {
          buckets: Array<{
            key: string;
            doc_count: number;
          }>;
        };
        avg_confidence: { value: number };
      }>;
    };
    hourly_breakdown: {
      buckets: Array<{
        key_as_string: string;
        key: number;
        doc_count: number;
        unique_users: { value: number };
        fallback_rate: { doc_count: number };
        avg_confidence: { value: number | null };
        platforms: {
          buckets: Array<{
            key: string;
            doc_count: number;
          }>;
        };
      }>;
    };
    intent_analysis: {
      buckets: Array<{
        key: string;
        doc_count: number;
        avg_confidence: { value: number };
        success_rate: { value: number };
        platforms: {
          buckets: Array<{
            key: string;
            doc_count: number;
          }>;
        };
      }>;
    };
    fallback_analysis: {
      doc_count: number;
      low_confidence: {
        buckets: Array<{
          key: string;
          from?: number;
          to?: number;
          doc_count: number;
        }>;
      };
      by_intent: {
        buckets: Array<{
          key: string;
          doc_count: number;
        }>;
      };
      by_platform: {
        buckets: Array<{
          key: string;
          doc_count: number;
        }>;
      };
    };
  };
}

interface KnowledgeUsage {
  id: string;
  conversations: number;
  avgConfidence: number;
  intents: Array<{
    name: string;
    count: number;
    percentage: number;
  }>;
  platforms: Array<{
    name: string;
    count: number;
    percentage: number;
  }>;
}

interface AnalyticsReport {
  summary: {
    conversations: {
      total: number;
      fallbacks: number;
      fallbackRate: number;
    };
    users: {
      total: number;
      activeHours: number;
      averageUsersPerHour: number;
    };
    performance: {
      avgConfidence: number;
      successRate: number;
    };
  };
  knowledgeUsage: {
    known: KnowledgeUsage[];
    unknown: KnowledgeUsage | null;
    summary: {
      totalKnown: number;
      totalUnknown: number;
      knowledgeUtilization: number;
    };
  };
  hourlyActivity: Array<{
    hour: string;
    conversations: number;
    uniqueUsers: number;
    fallbacks: number;
    confidence: number | null;
    platforms: Array<{
      name: string;
      count: number;
    }>;
  }>;
  intents: {
    top: Array<{
      name: string;
      count: number;
      successRate: number;
      confidence: number;
    }>;
    fallbacks: {
      total: number;
      byIntent: Array<{
        intent: string;
        count: number;
        percentage: number;
      }>;
      byConfidence: Array<{
        range: string;
        count: number;
        percentage: number;
      }>;
    };
  };
  platforms: Array<{
    name: string;
    conversations: number;
    uniqueUsers: number;
    fallbackRate: number;
    topIntents: Array<{
      name: string;
      count: number;
      percentage: number;
    }>;
  }>;
  metadata: {
    timezone: string;
    queryTime: number;
    startTime: string;
    endTime: string;
  };
}

export function transformESResponse(response: ESResponse): AnalyticsReport {

  const totalConversations = response.aggregations.total_conversations.value;

  // Process knowledge usage
  const knowledgeBuckets = response.aggregations.knowledge_usage.buckets;
  const unknownBucket = knowledgeBuckets.find(b => b.key === 'unknown');
  const knownBuckets = knowledgeBuckets.filter(b => b.key !== 'unknown');
  const fallbackCount = unknownBucket?.doc_count || 0;


  const processKnowledgeBucket = (bucket: typeof knowledgeBuckets[0]): KnowledgeUsage => ({
    id: bucket.key,
    conversations: bucket.doc_count,
    avgConfidence: bucket.avg_confidence.value,
    intents: bucket.top_intents.buckets.map(intent => ({
      name: intent.key,
      count: intent.doc_count,
      percentage: (intent.doc_count / bucket.doc_count) * 100
    })),
    platforms: bucket.platforms.buckets.map(platform => ({
      name: platform.key,
      count: platform.doc_count,
      percentage: (platform.doc_count / bucket.doc_count) * 100
    }))
  });

  const knowledgeUsage = {
    known: knownBuckets.map(processKnowledgeBucket),
    unknown: unknownBucket ? processKnowledgeBucket(unknownBucket) : null,
    summary: {
      totalKnown: knownBuckets.reduce((sum, b) => sum + b.doc_count, 0),
      totalUnknown: unknownBucket?.doc_count || 0,
      knowledgeUtilization: knownBuckets.length > 0 ? 
        (knownBuckets.reduce((sum, b) => sum + b.doc_count, 0) / totalConversations) * 100 : 0
    }
  };

  // Process hourly data
  const hourlyActivity = response.aggregations.hourly_breakdown.buckets.map(bucket => ({
    hour: new Date(bucket.key_as_string).toLocaleTimeString('th-TH', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Bangkok'
    }),
    conversations: bucket.doc_count,
    uniqueUsers: bucket.unique_users.value,
    fallbacks: bucket.fallback_rate.doc_count,
    confidence: bucket.avg_confidence.value,
    platforms: bucket.platforms.buckets.map(p => ({
      name: p.key,
      count: p.doc_count
    }))
  }));

  // Rest of the processing remains the same
  const intents = response.aggregations.intent_analysis.buckets
    .filter(i => !['FALLBACK', 'SYSTEM_COMMAND'].includes(i.key))
    .map(intent => ({
      name: intent.key,
      count: intent.doc_count,
      successRate: intent.success_rate.value,
      confidence: intent.avg_confidence.value
    }))
    .sort((a, b) => b.count - a.count);

  const fallbacks = {
    total: fallbackCount,
    byIntent: response.aggregations.fallback_analysis.by_intent.buckets.map(b => ({
      intent: b.key,
      count: b.doc_count,
      percentage: (b.doc_count / fallbackCount) * 100
    })),
    byConfidence: response.aggregations.fallback_analysis.low_confidence.buckets.map(b => ({
      range: b.key,
      count: b.doc_count,
      percentage: (b.doc_count / fallbackCount) * 100
    }))
  };

  const platforms = response.aggregations.platform_metrics.buckets.map(platform => ({
    name: platform.key,
    conversations: platform.doc_count,
    uniqueUsers: platform.unique_users.value,
    fallbackRate: platform.fallback_rate.doc_count / platform.doc_count,
    topIntents: platform.top_intents.buckets.map(intent => ({
      name: intent.key,
      count: intent.doc_count,
      percentage: (intent.doc_count / platform.doc_count) * 100
    }))
  }));

  const activeHours = hourlyActivity.filter(h => h.conversations > 0).length;
  const uniqueUsers = platforms[0]?.uniqueUsers || 0;

  return {
    summary: {
      conversations: {
        total: totalConversations,
        fallbacks: fallbackCount,
        fallbackRate: (fallbackCount / totalConversations) * 100
      },
      users: {
        total: uniqueUsers,
        activeHours,
        averageUsersPerHour: activeHours > 0 ? uniqueUsers / activeHours : 0
      },
      performance: {
        avgConfidence: response.aggregations.confidence_summary.avg,
        successRate: ((totalConversations - fallbackCount) / totalConversations) * 100
      }
    },
    knowledgeUsage,
    hourlyActivity,
    intents: {
      top: intents,
      fallbacks
    },
    platforms,
    metadata: {
      timezone: "Asia/Bangkok",
      queryTime: response.took,
      startTime: response.aggregations.hourly_breakdown.buckets[0].key_as_string,
      endTime: response.aggregations.hourly_breakdown.buckets[response.aggregations.hourly_breakdown.buckets.length - 1].key_as_string
    }
  };
}

export function generateReport(data: AnalyticsReport): string {
  const formatPercentage = (value: number) => `${value.toFixed(1)}%`;
  const formatTime = (hour: string) => hour;

  return [
    `📊 Conversation Analytics Report`,
    `───────────────────────────`,
    ``,
    `📈 Summary`,
    `• Total Conversations: ${data.summary.conversations.total}`,
    `• Active Hours: ${data.summary.users.activeHours}`,
    `• Unique Users: ${data.summary.users.total}`,
    `• Success Rate: ${formatPercentage(data.summary.performance.successRate)}`,
    ``,
    `🧠 Knowledge Usage`,
    `• Knowledge Utilization: ${formatPercentage(data.knowledgeUsage.summary.knowledgeUtilization)}`,
    `• Known Conversations: ${data.knowledgeUsage.summary.totalKnown}`,
    `• Unknown Conversations: ${data.knowledgeUsage.summary.totalUnknown}`,
    ``,
    data.knowledgeUsage.unknown ? [
      `Unknown Intents:`,
      ...data.knowledgeUsage.unknown.intents
        .map(i => `• ${i.name}: ${i.count} (${formatPercentage(i.percentage)})`),
      ``
    ].join('\n') : '',
    `⏰ Active Hours`,
    ...data.hourlyActivity
      .filter(hour => hour.conversations > 0)
      .map(hour => 
        `• ${formatTime(hour.hour)}: ${hour.conversations} conversations, ${hour.uniqueUsers} users`
      ),
    ``,
    `🎯 Top Intents`,
    ...data.intents.top
      .slice(0, 5)
      .map(intent => 
        `• ${intent.name}: ${intent.count} (${formatPercentage(intent.successRate * 100)} success)`
      ),
    ``,
    `❌ Fallback Analysis`,
    `• Total Fallbacks: ${data.intents.fallbacks.total}`,
    `• Fallback Rate: ${formatPercentage(data.summary.conversations.fallbackRate)}`,
    data.intents.fallbacks.byIntent.length > 0 ? [
      `• Top Fallback Intents:`,
      ...data.intents.fallbacks.byIntent
        .slice(0, 3)
        .map(f => `  - ${f.intent}: ${f.count} (${formatPercentage(f.percentage)})`)
    ].join('\n') : '',
    ``,
    `📱 Platform Metrics`,
    ...data.platforms.map(p => [
      `• ${p.name}:`,
      `  - Conversations: ${p.conversations}`,
      `  - Users: ${p.uniqueUsers}`,
      `  - Fallback Rate: ${formatPercentage(p.fallbackRate * 100)}`
    ].join('\n'))
  ].join('\n');
}

// Example usage
function demonstrateUsage(esResponse: ESResponse) {
  const analytics = transformESResponse(esResponse);
  console.log(generateReport(analytics));
  return analytics;
}