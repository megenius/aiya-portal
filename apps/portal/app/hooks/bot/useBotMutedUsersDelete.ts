// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBotMutedUsers } from "~/services/bots";

// interface MutationFn {
//   variables: BotMutedUser;
// }

export const useBotMutedUsersDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ botId, provider_id, uid }: { botId: string; provider_id: string; uid: string }) =>
      deleteBotMutedUsers({ botId, provider_id, uid }).then((response) => response.data),
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["bots", res.botId, "muted-users"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
