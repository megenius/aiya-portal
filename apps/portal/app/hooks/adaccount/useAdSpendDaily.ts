// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdSpendDaily } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  adaccountId: string;
  adId: string;
}

export const useAdSpendDaily = ({
  variables: { adaccountId, adId },
}: QueryProps) => {
  return useQuery({
    queryKey: ["ad", adId, "spend-daily"],
    queryFn: () => fetchAdSpendDaily(adaccountId, adId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
