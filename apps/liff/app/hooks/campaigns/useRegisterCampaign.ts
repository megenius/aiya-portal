import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerCampaign } from "~/services/campaigns";
import type { CampaignRegistrationRequest } from "~/types/campaign";

export function useRegisterCampaign() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ campaignId, data }: { campaignId: string; data: CampaignRegistrationRequest }) =>
      registerCampaign(campaignId, data),
    onSuccess: (_, { campaignId }) => {
      queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId] });
    },
  });
}