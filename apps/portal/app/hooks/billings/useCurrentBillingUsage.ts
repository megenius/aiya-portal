import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentBillingUsage } from "~/services/billing.service";
import { useAppSelector } from "~/store";
import useWebSocket from "../useWebSocket";

const BILLING_USAGE_QUERY_KEY = ["current-billing-usage"];

interface BillingUpdate {
  type: "billing_usage_updated";
  data: {
    // Add your billing data type here
    usage: number;
    limit: number;
    // ... other fields
  };
}

const useCurrentBillingUsage = ({ subscription }) => {
  const queryClient = useQueryClient();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const baseUrl = import.meta.env.VITE_WS_URL as string;
  const wsUrl = `${baseUrl}/websocket/billing/subscription/${subscription.id}`;
  // Initialize WebSocket connection with options
  const { status, message, sendMessage } = useWebSocket(wsUrl, {
    autoReconnect: false,
    reconnectAttempts: 5,
    reconnectInterval: 3000,
    onOpen: () => {
      // Subscribe to billing updates when connection is established
      sendMessage({ type: "subscribe", channel: "billing_updates" });
    },
    onMessage: (data: BillingUpdate) => {
      if (data.type === "billing_usage_updated") {
        // Option 1: Invalidate the query (will trigger a refetch)
        queryClient.invalidateQueries({ queryKey: BILLING_USAGE_QUERY_KEY });

        // Option 2: Update the cache directly (no refetch needed)
        // queryClient.setQueryData(BILLING_USAGE_QUERY_KEY, data.data)
      }
    },
    onError: (error) => {
      console.error("WebSocket error:", error);
    },
  });

  // Use React Query for initial data fetch and background updates
  const query = useQuery({
    queryKey: BILLING_USAGE_QUERY_KEY,
    queryFn: () =>
      getCurrentBillingUsage(subscription.id).then((res) => res.data),
    enabled: isAuthenticated,
  });

  // Cleanup on unmount is handled by the useWebSocket hook

  return {
    ...query,
    wsStatus: status, // Export WebSocket status for potential UI feedback
    sendMessage, // Export sendMessage function if needed
  };
};

export default useCurrentBillingUsage;
