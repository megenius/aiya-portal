import { useQuery } from "@tanstack/react-query";
import { fetchMission } from "~/services/campaigns";
import { useAppSelector } from "~/store";

interface UseMissionProps {
  missionId: string;
  enabled?: boolean;
}

export function useMission({ missionId, enabled = true }: UseMissionProps) {
  return useQuery({
    queryKey: ["missions", missionId],
    queryFn: () => fetchMission(missionId),
    select: (data) => data.data,
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && !!missionId && enabled,
  });
}