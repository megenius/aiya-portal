import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelSubscription } from "~/services/billing.service";

interface CancelSubscriptionRequest {
  stripeSubscriptionId: string;
}

export const useCancelSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ stripeSubscriptionId }: CancelSubscriptionRequest) =>
      cancelSubscription(stripeSubscriptionId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["current-billing-plan"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
