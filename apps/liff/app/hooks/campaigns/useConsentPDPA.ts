import { useMutation, useQueryClient } from "@tanstack/react-query";
import { consentPDPA } from "~/services/campaigns";
import type { PDPAConsentRequest } from "~/types/campaign";

export function useConsentPDPA() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ campaignId, data }: { campaignId: string; data: PDPAConsentRequest }) =>
      consentPDPA(campaignId, data),
    onSuccess: (_, { campaignId }) => {
      queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId] });
    },
  });
}