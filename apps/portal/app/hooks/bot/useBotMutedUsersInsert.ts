// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BotMutedUser } from "~/@types/app";
import { insertBotMutedUser } from "~/services/bots";

interface MutationFn {
  variables: BotMutedUser;
}

export const useBotMutedUsersInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["bot:insert"],
    mutationFn: ({variables}: MutationFn) =>
      insertBotMutedUser(variables).then((response) => response.data),
    onSuccess: (res: BotMutedUser) => {
      queryClient.invalidateQueries({
        queryKey: ["bots", res.bot, "muted-users"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
