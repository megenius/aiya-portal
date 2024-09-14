// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdAccounts } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  wid: string;
}

export const useAds = ({ variables: { wid } }: QueryProps) => {
  return useQuery({
    queryKey: ["ads", wid],
    queryFn: () => fetchAdAccounts().then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
