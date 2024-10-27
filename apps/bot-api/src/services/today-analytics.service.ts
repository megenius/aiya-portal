interface ESBucket {
  key_as_string: string;
  key: number;
  doc_count: number;
  users_per_hour: {
    value: number;
  };
}

interface ESResponse {
  took: number;
  aggregations: {
    unique_users: { value: number };
    total_conversations: { value: number };
    hourly_breakdown: {
      buckets: ESBucket[];
    };
  };
}

interface HourlyData {
  timestamp: string;
  hour: string;
  localHour: string;  // Bangkok time
  conversations: number;
  activeUsers: number;
  percentOfDailyConversations: number;
}

interface TransformedData {
  summary: {
    uniqueUsers: number;
    totalConversations: number;
    activeHours: number;
    peaks: {
      byConversations: {
        localHour: string;
        conversations: number;
        users: number;
      };
      byUsers: {
        localHour: string;
        conversations: number;
        users: number;
      };
    };
    distribution: {
      conversationsPerActiveHour: number;
      usersPerActiveHour: number;
    };
  };
  hourlyBreakdown: HourlyData[];
  metadata: {
    timezone: string;
    utcOffset: number;
    queryExecutionTime: number;
    timeRange: {
      start: string;
      end: string;
    };
  };
}

function formatThaiHour(date: Date): string {
  // Format hour in 24-hour format for Bangkok time
  const bangkokHour = date.getUTCHours() + 7;
  const adjustedHour = bangkokHour >= 24 ? bangkokHour - 24 : bangkokHour;
  return `${adjustedHour.toString().padStart(2, '0')}:00`;
}

export function transformESResponse(response: ESResponse): TransformedData {
  const BANGKOK_OFFSET = 7; // UTC+7
  const buckets = response.aggregations.hourly_breakdown.buckets;
  const totalConversations = response.aggregations.total_conversations.value;
  
  // Process hourly data with Bangkok time
  const hourlyBreakdown: HourlyData[] = buckets.map(bucket => {
    const utcDate = new Date(bucket.key_as_string);
    const bangkokTime = new Date(utcDate.getTime() + (BANGKOK_OFFSET * 60 * 60 * 1000));
    
    return {
      timestamp: bucket.key_as_string,
      hour: `${utcDate.getUTCHours().toString().padStart(2, '0')}:00`,
      localHour: formatThaiHour(utcDate),
      conversations: bucket.doc_count,
      activeUsers: bucket.users_per_hour.value,
      percentOfDailyConversations: totalConversations > 0 
        ? Number(((bucket.doc_count / totalConversations) * 100).toFixed(1))
        : 0
    };
  });

  // Find peaks (both by conversations and by users)
  const peaks = hourlyBreakdown.reduce((acc, curr) => {
    if (curr.conversations > (acc.byConversations?.conversations || 0)) {
      acc.byConversations = {
        localHour: curr.localHour,
        conversations: curr.conversations,
        users: curr.activeUsers
      };
    }
    if (curr.activeUsers > (acc.byUsers?.users || 0)) {
      acc.byUsers = {
        localHour: curr.localHour,
        conversations: curr.conversations,
        users: curr.activeUsers
      };
    }
    return acc;
  }, {} as TransformedData['summary']['peaks']);

  // Calculate active hours and averages
  const activeHours = hourlyBreakdown.filter(hour => hour.conversations > 0);
  const activeHoursCount = activeHours.length;

  return {
    summary: {
      uniqueUsers: response.aggregations.unique_users.value,
      totalConversations,
      activeHours: activeHoursCount,
      peaks,
      distribution: {
        conversationsPerActiveHour: Number((totalConversations / activeHoursCount).toFixed(2)),
        usersPerActiveHour: Number((response.aggregations.unique_users.value / activeHoursCount).toFixed(2))
      }
    },
    hourlyBreakdown,
    metadata: {
      timezone: "Asia/Bangkok",
      utcOffset: BANGKOK_OFFSET,
      queryExecutionTime: response.took,
      timeRange: {
        start: buckets[0].key_as_string,
        end: buckets[buckets.length - 1].key_as_string
      }
    }
  };
}

// Utility function for analysis
export function analyzeActivityPatterns(data: TransformedData): string {
  const { summary, hourlyBreakdown } = data;
  
  const insights = [
    `📊 Activity Summary (Bangkok Time)`,
    ``,
    `Total Conversations: ${summary.totalConversations}`,
    `Unique Users: ${summary.uniqueUsers}`,
    `Active Hours: ${summary.activeHours} of 24`,
    ``,
    `🔝 Peak Activity (Bangkok Time):`,
    `By Conversations: ${summary.peaks.byConversations.localHour}`,
    `  ${summary.peaks.byConversations.conversations} conversations`,
    `  ${summary.peaks.byConversations.users} users`,
    ``,
    `By Users: ${summary.peaks.byUsers.localHour}`,
    `  ${summary.peaks.byUsers.users} users`,
    `  ${summary.peaks.byUsers.conversations} conversations`,
    ``,
    `⏰ Active Hours (Bangkok Time):`,
    hourlyBreakdown
      .filter(h => h.conversations > 0)
      .map(h => `${h.localHour}: ${h.conversations} conversations, ${h.activeUsers} users`)
      .join('\n')
  ].join('\n');

  return insights;
}

// Example usage with timezone info
function demonstrateUsage(rawResponse: ESResponse) {
  const transformed = transformESResponse(rawResponse);
  
  console.log(analyzeActivityPatterns(transformed));
  
  console.log('\nTimezone Info:');
  console.log(`Timezone: ${transformed.metadata.timezone}`);
  console.log(`UTC Offset: +${transformed.metadata.utcOffset}:00`);
  
  return transformed;
}