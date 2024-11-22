// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdInsight } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  adaccountId: string;
  adId;
}

export const useAdInsight = ({
  variables: { adaccountId, adId },
}: QueryProps) => {
  return useQuery({
    queryKey: ["ad", adId, "insights"],
    queryFn: () => fetchAdInsight(adaccountId, adId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
