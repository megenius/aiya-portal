// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchBots } from "~/services/bots";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  wid: string;
}

export const useAds = ({ variables: { wid } }: QueryProps) => {
  return useQuery({
    queryKey: ["ads", wid],
    queryFn: () => fetchBots(wid).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
