// hooks/useBotSlips.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBotMutedUsers } from "~/services/bots";
import { useAppSelector } from "~/store";

export const useBotMutedUsers = ({ botId }) => {
  return useQuery({
    queryKey: ["bots", botId, "muted-users"],
    queryFn: () => fetchBotMutedUsers(botId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
