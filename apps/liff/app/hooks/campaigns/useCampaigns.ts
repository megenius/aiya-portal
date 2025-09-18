import { useQuery } from "@tanstack/react-query";
import { fetchCampaigns } from "~/services/campaigns";
import { useAppSelector } from "~/store";

export function useCampaigns() {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: () => fetchCampaigns(),
    select: (data) => data.data,
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
}