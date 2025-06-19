import { useQuery } from "@tanstack/react-query";
import { fetchVouchersUser } from "~/services/vouchers";
import { useLineLiff } from "../useLineLiff";

interface UseVouchersUserProps {
  userId: string;
}

export function useVouchersUser({ userId }: UseVouchersUserProps) {
  const { data: liff } = useLineLiff();
  
  return useQuery({
    queryKey: ["voucher-user", userId],
    queryFn: () => fetchVouchersUser({ userId }).then((res) => res.data),
    enabled: liff?.isLoggedIn()
  });
}
