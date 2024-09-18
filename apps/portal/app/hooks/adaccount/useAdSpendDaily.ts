// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdDashboard, fetchAdSpendDaily } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
}

export const useAdSpendDaily = ({ variables: { id } }: QueryProps) => {
  return useQuery({
    queryKey: ["ad-accounts", id, "spend-daily"],
    queryFn: () => fetchAdSpendDaily(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
