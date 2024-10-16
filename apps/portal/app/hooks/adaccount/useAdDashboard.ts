// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdDashboard } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
}

export const useAdDashboard = ({ variables: { id } }: QueryProps) => {
  return useQuery({
    queryKey: ["ad-accounts", id, "dashboard"],
    queryFn: () => fetchAdDashboard(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
