import { useState, useEffect, useCallback } from 'react';
import { useConversations } from './useConversations';

interface BeaconUser {
  id: string;
  channel_id: string;
  name: string;
  avatar?: string;
  event_type: string;
  last_beacon: {
    type: string;
    hwid: string;
    device_message?: string;
    timestamp: string;
  } | null;
  updated_at: string;
}

interface UseRecentBeaconUsersParams {
  providerIds?: string[];
  timeWindowMinutes?: number;
  limit?: number;
}

/**
 * Hook to fetch users with "beacon" event type from conversations within a specified time window
 * @param params Configuration parameters
 * @returns Object containing filtered users, loading state, and error
 */
export function useRecentBeaconUsers({ 
  providerIds = [], 
  timeWindowMinutes = 5,
  limit = 20
}: UseRecentBeaconUsersParams = {}) {
  const [users, setUsers] = useState<BeaconUser[]>([]);
  const [hasMore, setHasMore] = useState(false);
  
  // Use the existing conversations hook
  const { data, isLoading, error } = useConversations(providerIds);
  
  // Process conversations to find those with beacon events
  useEffect(() => {
    if (!isLoading && data?.data) {
      // Calculate the cutoff time for recent beacons
      const now = Date.now();
      const cutoffTime = now - (timeWindowMinutes * 60 * 1000);
      
      // Filter and map conversations to beacon users
      const beaconUsers = data.data
        .filter(conversation => {
          // Check if last_message contains beacon information
          const isBeacon = conversation.last_message?.includes('Beacon detected:');
          
          // Check if it's within the time window
          const updatedTime = new Date(conversation.updated_at).getTime();
          const isRecent = updatedTime >= cutoffTime;
          
          return isBeacon && isRecent;
        })
        .map(conversation => {
          // Extract the HWID from the last_message if available
          let hwid = 'unknown';
          const beaconMatch = conversation.last_message.match(/Beacon detected: (.+)/);
          if (beaconMatch && beaconMatch[1]) {
            hwid = beaconMatch[1];
          }
          
          // Convert to BeaconUser format
          return {
            id: conversation.id,
            channel_id: conversation.channel_id,
            name: conversation.contact?.name || 'Unknown User',
            avatar: conversation.contact?.avatar,
            event_type: 'beacon',
            last_beacon: {
              type: 'beacon',
              hwid,
              timestamp: conversation.updated_at
            },
            updated_at: conversation.updated_at
          } as BeaconUser;
        })
        // Apply limit after filtering
        .slice(0, limit);
      
      setUsers(beaconUsers);
      setHasMore(data.data.length > beaconUsers.length);
    }
  }, [data, isLoading, timeWindowMinutes, limit]);
  
  // Mock function for loadMore since we're using the existing hook's data
  const loadMore = useCallback(() => {
    console.log('Load more functionality would need to be implemented with pagination');
    // Currently not implemented since we're using the full dataset from useConversations
  }, []);
  
  return {
    users,
    count: users.length,
    loading: isLoading,
    error,
    hasMore,
    loadMore
  };
}
