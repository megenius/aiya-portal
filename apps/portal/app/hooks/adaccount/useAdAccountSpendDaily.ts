// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdaccountSpendDaily } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
}

export const useAdAccountSpendDaily = ({ variables: { id } }: QueryProps) => {
  return useQuery({
    queryKey: ["ad-accounts", id, "spend-daily"],
    queryFn: () => fetchAdaccountSpendDaily(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
