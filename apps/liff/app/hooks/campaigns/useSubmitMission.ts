import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitMission } from "~/services/campaigns";
import type { MissionSubmissionRequest, MissionWithUserProgress } from "~/types/campaign";

export function useSubmitMission() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ missionId, data }: { missionId: string; data: MissionSubmissionRequest }) =>
      submitMission(missionId, data),
    onSuccess: (response, { missionId }) => {
      // Get mission data to find campaign ID
      const mission = queryClient.getQueryData<MissionWithUserProgress>(["missions", missionId]);
      const campaignId = (mission as any)?.campaign_id || (mission as any)?.campaign?.id;

      // Optimistically update mission detail cache
      if (mission) {
        const nowIso = new Date().toISOString();
        queryClient.setQueryData<MissionWithUserProgress>(["missions", missionId], {
          ...mission,
          user_progress: {
            ...mission.user_progress,
            is_completed: true,
            can_submit: false,
            completed_count: Math.max(1, (mission.user_progress?.completed_count ?? 0) + 1),
            submitted_at: nowIso,
            last_submission_at: nowIso,
          },
        });
      }

      // Optimistically update campaign missions list cache
      if (campaignId) {
        queryClient.setQueryData<MissionWithUserProgress[] | undefined>(
          ["campaigns", campaignId, "missions"],
          (prev) =>
            Array.isArray(prev)
              ? prev.map((m) =>
                  m.id === missionId
                    ? {
                        ...m,
                        user_progress: {
                          ...m.user_progress,
                          is_completed: true,
                          can_submit: false,
                          completed_count: Math.max(1, (m.user_progress?.completed_count ?? 0) + 1),
                          submitted_at: new Date().toISOString(),
                          last_submission_at: new Date().toISOString(),
                        },
                      }
                    : m
                )
              : prev
        );
      }

      // Invalidate to refetch latest truth from server
      if (campaignId) {
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId, "missions"] });
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId, "credits"] });
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId] });
      }
      queryClient.invalidateQueries({ queryKey: ["missions", missionId] });
    },
  });
}