// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BotKnowledge, Workspace } from "~/@types/app";
import { generateBotIntent } from "~/services/bots";

export const useBotGenIntent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (text: string) =>
      generateBotIntent(text).then((response) => response.data),
    onSuccess: (item) => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({
      //   queryKey: ["bots", "knowledges", item.id],
      //   exact: true,
      //   refetchType: "active",
      // });
      // queryClient.invalidateQueries({
      //   queryKey: ["bots", item.bot, "knowledges"],
      //   exact: true,
      //   refetchType: "active",
      // });
    },
  });
};
