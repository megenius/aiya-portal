import { useQuery } from "@tanstack/react-query";
import { fetchVouchersUser } from "~/services/vouchers";
import { useLineLiff } from "../useLineLiff";

interface UseVouchersUserProps {
  userId: string;
  enabled?: boolean;
}

export function useVouchersUser({ userId, enabled }: UseVouchersUserProps) {
  const { data: liff } = useLineLiff();
  
  return useQuery({
    queryKey: ["vouchersUser", userId],
    queryFn: () => fetchVouchersUser({ userId }).then((res) => res.data),
    enabled: enabled && liff?.isLoggedIn() && !!userId,
  });
}
