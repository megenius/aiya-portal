import { useQuery } from "@tanstack/react-query";
import { fetchVouchersUser } from "~/services/vouchers";
import { useAppSelector } from "~/store";

interface UseVouchersUserProps {
  userId: string;
}

export function useVouchersUser({ userId }: UseVouchersUserProps) {
  return useQuery({
    queryKey: ["voucher-user", userId],
    queryFn: () => fetchVouchersUser({ userId }).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated)
  });
}
