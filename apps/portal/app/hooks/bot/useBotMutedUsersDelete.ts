// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBotMutedUsers } from "~/services/bots";

// interface MutationFn {
//   variables: BotMutedUser;
// }

export const useBotMutedUsersDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ botId, uid }: { botId: string; uid: string }) =>
      deleteBotMutedUsers({ botId, uid }).then((response) => response.data),
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["bots", res.botId, "muted-users"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
