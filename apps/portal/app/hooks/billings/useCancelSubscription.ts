import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelSubscription } from "~/services/billing.service";

export const useCancelSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => cancelSubscription(),
    onSuccess: () => {
      // queryClient.invalidateQueries({
      //   queryKey: ["current-billing-plan"],
      //   exact: true,
      //   refetchType: "active",
      // });
    },
  });
};
