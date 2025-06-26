import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deployBotKnowledge } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  key: string;
}

export function useBotKnowlegdeDeploy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ variables: { key } }: MutationFn) =>
      deployBotKnowledge(key).then((response) => response.data),
    onSuccess: (data: { id: string; bot: string }) => {
      queryClient.invalidateQueries({
        queryKey: ["bots", "knowledges", data.id],
        exact: true,
        refetchType: "active",
      });

      queryClient.invalidateQueries({
        queryKey: ["bots", data.bot, "knowledges"],
        exact: true,
        refetchType: "active",
      });
    },
  });
}
