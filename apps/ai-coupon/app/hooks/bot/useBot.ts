// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceBySlug } from "~/services/workspaces";
import { fetchBot } from "~/services/bots";

export const useBot = ({ id }) => {
  return useQuery({
    queryKey: ["bots", id],
    queryFn: () => fetchBot(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
