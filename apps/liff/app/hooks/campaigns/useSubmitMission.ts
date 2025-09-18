import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitMission } from "~/services/campaigns";
import type { MissionSubmissionRequest } from "~/types/campaign";

export function useSubmitMission() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ missionId, data }: { missionId: string; data: MissionSubmissionRequest }) =>
      submitMission(missionId, data),
    onSuccess: (response, { missionId }) => {
      // Get mission data to find campaign ID
      const mission = queryClient.getQueryData<any>(["missions", missionId]);
      if (mission && mission.campaign_id) {
        const campaignId = mission.campaign_id;
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId, "missions"] });
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId, "credits"] });
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId] });
      }
      queryClient.invalidateQueries({ queryKey: ["missions", missionId] });
    },
  });
}