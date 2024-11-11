// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdCampaigns } from "~/services/ads";
import { useAppSelector } from "~/store";

export const useAdCampaigns = (adaccountId: string) => {
  return useQuery({
    queryKey: ["ad-accounts", adaccountId, "campaigns"],
    queryFn: () => fetchAdCampaigns(adaccountId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
