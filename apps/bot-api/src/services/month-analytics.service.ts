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
        // Changed from hourly_breakdown to daily_breakdown
        daily_breakdown: {
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
            activeDays: number; // Changed from activeHours
            averageUsersPerDay: number; // Changed from averageUsersPerHour
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
    // Changed from hourlyActivity to dailyActivity
    dailyActivity: Array<{
        date: string;
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
        startDate: string; // Changed from startTime
        endDate: string;  // Changed from endTime
    };
}

export function transformMonthESResponse(response: ESResponse): AnalyticsReport {
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

    // Process daily data
    const dailyActivity = response.aggregations.daily_breakdown.buckets.map(bucket => ({
        date: new Date(bucket.key_as_string).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
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

    const activeDays = dailyActivity.filter(d => d.conversations > 0).length;
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
                activeDays,
                averageUsersPerDay: activeDays > 0 ? uniqueUsers / activeDays : 0
            },
            performance: {
                avgConfidence: response.aggregations.confidence_summary.avg,
                successRate: ((totalConversations - fallbackCount) / totalConversations) * 100
            }
        },
        knowledgeUsage,
        dailyActivity,
        intents: {
            top: intents,
            fallbacks
        },
        platforms,
        metadata: {
            timezone: "Asia/Bangkok",
            queryTime: response.took,
            startDate: response.aggregations.daily_breakdown.buckets[0].key_as_string,
            endDate: response.aggregations.daily_breakdown.buckets[response.aggregations.daily_breakdown.buckets.length - 1].key_as_string
        }
    };
}