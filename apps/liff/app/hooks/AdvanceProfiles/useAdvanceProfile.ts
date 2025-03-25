import { useQuery } from "@tanstack/react-query";
import { useLineLiff } from "../useLineLiff";
import { fetchAdvanceProfile } from "~/services/advanceProfiles";

interface AdvanceProfileProps {
    uid: string;
    enabled?: boolean; // Add optional enabled parameter
}

export function useAdvanceProfile({ uid, enabled = true }: AdvanceProfileProps) {
  const { data: liff } = useLineLiff();
  
  return useQuery({
    queryKey: ["advanceProfiles"],
    queryFn: () => fetchAdvanceProfile({uid}),
    enabled: enabled && liff?.isLoggedIn(), // Use the passed enabled parameter
    // staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
