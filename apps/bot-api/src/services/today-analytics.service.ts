interface ESResponse {
  took: number;
  aggregations: {
    unique_users: { value: number };
    total_conversations: { value: number };
    hourly_breakdown: {
      buckets: Array<{
        key_as_string: string;
        key: number;
        doc_count: number;
        users_per_hour: { value: number };
      }>;
    };
  };
}

interface HourData {
  utcTime: string;
  localTime: string;
  conversations: number;
  activeUsers: number;
  percentOfTotal: number;
}

interface PeakHour {
  utcTime: string;
  localTime: string;
  conversations: number;
  activeUsers: number;
}

interface TransformedData {
  summary: {
    uniqueUsers: number;
    totalConversations: number;
    activeHours: number;
    peaks: {
      byConversations: PeakHour[];  // Array for multiple peaks
      byUsers: PeakHour[];          // Array for multiple peaks
    };
  };
  hourlyData: HourData[];
  metadata: {
    timezone: string;
    utcOffset: number;
    executionTime: number;
    dateRange: {
      start: string;
      end: string;
    };
  };
}

export function transformESResponse(response: ESResponse): TransformedData {
  const BANGKOK_OFFSET = 7;
  const buckets = response.aggregations.hourly_breakdown.buckets;
  const totalConversations = response.aggregations.total_conversations.value;

  // Process hourly data
  const hourlyData: HourData[] = buckets.map(bucket => {
    const utcDate = new Date(bucket.key_as_string);
    const bangkokHour = (utcDate.getUTCHours() + BANGKOK_OFFSET) % 24;
    
    return {
      utcTime: `${utcDate.getUTCHours().toString().padStart(2, '0')}:00`,
      localTime: `${bangkokHour.toString().padStart(2, '0')}:00`,
      conversations: bucket.doc_count,
      activeUsers: bucket.users_per_hour.value,
      percentOfTotal: totalConversations > 0 
        ? Number(((bucket.doc_count / totalConversations) * 100).toFixed(1))
        : 0
    };
  });

  // Find peak values
  const maxConversations = Math.max(...hourlyData.map(h => h.conversations));
  const maxUsers = Math.max(...hourlyData.map(h => h.activeUsers));

  // Find all hours matching peak values
  const conversationPeaks = hourlyData
    .filter(hour => hour.conversations === maxConversations && hour.conversations > 0)
    .map(hour => ({
      utcTime: hour.utcTime,
      localTime: hour.localTime,
      conversations: hour.conversations,
      activeUsers: hour.activeUsers
    }));

  const userPeaks = hourlyData
    .filter(hour => hour.activeUsers === maxUsers && hour.activeUsers > 0)
    .map(hour => ({
      utcTime: hour.utcTime,
      localTime: hour.localTime,
      conversations: hour.conversations,
      activeUsers: hour.activeUsers
    }));

  return {
    summary: {
      uniqueUsers: response.aggregations.unique_users.value,
      totalConversations,
      activeHours: hourlyData.filter(h => h.conversations > 0).length,
      peaks: {
        byConversations: conversationPeaks,
        byUsers: userPeaks
      }
    },
    hourlyData: hourlyData,
    metadata: {
      timezone: "Asia/Bangkok",
      utcOffset: BANGKOK_OFFSET,
      executionTime: response.took,
      dateRange: {
        start: buckets[0].key_as_string,
        end: buckets[buckets.length - 1].key_as_string
      }
    }
  };
}

export function analyzeData(data: TransformedData): string {
  const { summary, hourlyData } = data;
  
  const formatPeaks = (peaks: PeakHour[]) => 
    peaks.map(peak => 
      `${peak.localTime} BKK (${peak.utcTime} UTC): ${peak.conversations} conversations, ${peak.activeUsers} users`
    ).join('\n  ');

  const insights = [
    `📊 Activity Summary (Bangkok Time)`,
    `Total Conversations: ${summary.totalConversations}`,
    `Unique Users: ${summary.uniqueUsers}`,
    `Active Hours: ${summary.activeHours}`,
    ``,
    `🔝 Peak Hours by Conversations:`,
    `  ${formatPeaks(summary.peaks.byConversations)}`,
    ``,
    `👥 Peak Hours by Users:`,
    `  ${formatPeaks(summary.peaks.byUsers)}`,
    ``,
    `📈 Hourly Activity (with activity):`,
    ...hourlyData
      .filter(hour => hour.conversations > 0)
      .map(hour => 
        `  ${hour.localTime} BKK (${hour.utcTime} UTC): ${hour.conversations} conversations, ${hour.activeUsers} users`
      )
  ].join('\n');

  return insights;
}

// Example usage
function demonstrateUsage(rawResponse: ESResponse) {
  const data = transformESResponse(rawResponse);
  console.log(analyzeData(data));
  return data;
}