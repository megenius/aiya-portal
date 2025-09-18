import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitMission } from "~/services/campaigns";
import type {
  MissionSubmissionRequest,
  MissionWithUserProgress,
  CampaignCreditsResponse,
} from "~/types/campaign";

export function useSubmitMission() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ missionId, data }: { missionId: string; data: MissionSubmissionRequest; campaignId?: string }) =>
      submitMission(missionId, data),
    onSuccess: (response, { missionId, campaignId: campaignIdFromArgs }) => {
      // Get mission data to find campaign ID
      const mission = queryClient.getQueryData<MissionWithUserProgress>(["missions", missionId]);
      type CampaignRef = string | { id?: string } | null | undefined;
      const missionCampaignId = (() => {
        if (!mission) return undefined as string | undefined;
        // Attempt to read campaign relation variations safely
        const rel = (mission as unknown as { campaign?: CampaignRef }).campaign;
        if (typeof rel === "string") return rel;
        if (rel && typeof rel === "object") return rel.id;
        const byField = (mission as unknown as { campaign_id?: string }).campaign_id;
        return byField;
      })();
      const campaignId = campaignIdFromArgs || missionCampaignId;

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

      // Optimistically update campaign credits cache
      if (campaignId && mission && typeof response?.data?.new_total_credits === "number") {
        const missionTitle = mission.title?.th || mission.title?.en || "";
        const missionIdForTx = mission.id as string;
        const amount = mission.reward_credits ?? 0;
        const createdAt = new Date().toISOString();
        queryClient.setQueryData<CampaignCreditsResponse | undefined>(
          ["campaigns", campaignId, "credits"],
          (prev) => {
            if (!prev) return prev;
            const tx: CampaignCreditsResponse["transactions"][number] = {
              id: `local-${createdAt}`,
              mission_id: missionIdForTx,
              mission_title: missionTitle,
              amount,
              type: "mission_reward",
              description: missionTitle,
              created_at: createdAt,
            };
            return {
              ...prev,
              total_earned: (prev.total_earned || 0) + amount,
              current_balance: (prev.current_balance || 0) + amount,
              transactions: [tx, ...(prev.transactions || [])],
            };
          }
        );
      }

      // Invalidate to refetch latest truth from server
      if (campaignId) {
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId, "missions"] });
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId, "credits"] });
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId] });
      } else {
        // Fallback: broadly invalidate campaign queries to ensure dashboards refresh
        queryClient.invalidateQueries({ queryKey: ["campaigns"] });
      }
      queryClient.invalidateQueries({ queryKey: ["missions", missionId] });
    },
  });
}