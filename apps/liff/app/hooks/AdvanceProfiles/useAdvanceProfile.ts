import { useQuery } from "@tanstack/react-query";
import { useLineLiff } from "../useLineLiff";
import { fetchAdvanceProfile } from "~/services/advanceProfiles";

interface AdvanceProfileProps {
    uid: string;
}

export function useAdvanceProfile({ uid }: AdvanceProfileProps) {
  const { data: liff } = useLineLiff();
  
  return useQuery({
    queryKey: ["advanceProfiles"],
    queryFn: () => fetchAdvanceProfile({uid}),
    enabled: liff?.isLoggedIn(),
    // staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
