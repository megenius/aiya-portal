import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBotKnowledge } from "~/services/bots";

interface MutationFn {
  variables: Variables;
}

interface Variables {
  key: string;
}

export function useBotKnowlegdeDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ variables: { key } }: MutationFn) =>
      deleteBotKnowledge(key).then((response) => response.data),
    onSuccess: (data: { bot: string }) => {
      queryClient.invalidateQueries({
        queryKey: ["bots", data.bot, "knowledges"],
        exact: true,
        refetchType: "active",
      });
    },
  });
}
