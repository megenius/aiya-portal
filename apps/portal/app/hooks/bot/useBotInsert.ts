// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Bot } from "~/@types/app";
import { insertBot } from "~/services/bots";

export const useBotInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["bot:insert"],
    mutationFn: (data: Bot) =>
      insertBot(data).then((response) => response.data),
    onSuccess: (bot: Bot) => {
      queryClient.invalidateQueries({
        queryKey: ["workspaces",  bot.team, "bots"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
