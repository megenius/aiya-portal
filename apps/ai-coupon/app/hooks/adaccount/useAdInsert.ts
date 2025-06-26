// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Bot } from "~/@types/app";
import { insertBot } from "~/services/bots";

export const useAdInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["bot-add"],
    mutationFn: (data: Bot) =>
      insertBot(data).then((response) => response.data),
    onSuccess: (bot: Bot) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["bots", bot.team],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
