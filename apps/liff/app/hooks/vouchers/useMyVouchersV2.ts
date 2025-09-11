import { useQuery } from "@tanstack/react-query";
import { fetchMyVouchersV2 } from "~/services/vouchers";
import { useAppSelector } from "~/store";

export function useMyVouchersV2({ tab }: { tab?: string }) {
  const isAuthed = useAppSelector((state) => state.auth.isAuthenticated);
  return useQuery({
    queryKey: ["my-vouchers-v2", tab ?? "all"],
    queryFn: () => fetchMyVouchersV2({ tab }),
    enabled: isAuthed,
  });
}
