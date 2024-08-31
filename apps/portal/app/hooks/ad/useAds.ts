// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchWorkspaceBots } from "~/services/workspaces";
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
    queryFn: () => fetchWorkspaceBots(wid).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
