// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdaccountInsight } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
}

export const useAdaccountInsight = ({ variables: { id } }: QueryProps) => {
  return useQuery({
    queryKey: ["ad-accounts", id, "insights"],
    queryFn: () => fetchAdaccountInsight(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
