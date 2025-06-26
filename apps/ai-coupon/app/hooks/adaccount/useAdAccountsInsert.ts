// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Bot, FacebookAdAccount } from "~/@types/app";
import { insertFacebookAdAccounts } from "~/services/ads";

export const useAdAccountsInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["ad-accounts", "insert"],
    mutationFn: (data: FacebookAdAccount[]) =>
      insertFacebookAdAccounts(data).then((response) => response.data),
    onSuccess: (data: FacebookAdAccount[]) => {
      if (data.length === 0) return;
      // Invalidate and refetch
      queryClient
        .invalidateQueries({
          queryKey: ["workspaces", data[0].team, "ad-accounts"],
          exact: true,
          refetchType: "active",
        })
        .then(() => {
          console.log("Refetched");
        });
    },
  });
};
