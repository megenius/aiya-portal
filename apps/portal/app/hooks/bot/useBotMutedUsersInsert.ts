// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BotMutedUser } from "~/@types/app";
import { insertBotMutedUser } from "~/services/bots";

export const useBotMutedUsersInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["bot:insert"],
    mutationFn: (data: BotMutedUser) =>
      insertBotMutedUser(data).then((response) => response.data),
    // onSuccess: (bot: BotMutedUser) => {
    //   queryClient.invalidateQueries({
    //     queryKey: ["workspaces",  bot.team, "bots"],
    //     exact: true,
    //     refetchType: "active",
    //   });
    // },
  });
};
