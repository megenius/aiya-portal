import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetMyVouchers } from "~/services/me";

export function useResetMyVouchers() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resetMyVouchers,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["voucher-user"],
        exact: true,
        refetchType: "active",
      });

      queryClient.invalidateQueries({
        queryKey: ["vouchers", "voucher-users", "stats"],
        exact: true,
        refetchType: "active",
      });

      // Refetch profile so voucherUserStats is up to date
      queryClient.invalidateQueries({
        queryKey: ["me"],
        exact: true,
        refetchType: "active",
      });
    },
  });
}
