import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateVoucherCode } from "~/services/vouchers";
import { VoucherCodeUpdate } from "~/types/app";

interface MutationFn {
  variables: VoucherCodeUpdate;
}

export function useUpdateVoucherCode() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      updateVoucherCode(variables).then((response) => response.data),
    onSuccess: (_res, { variables }) => {
      queryClient.invalidateQueries({
        queryKey: ["coupon-page-v2", variables.voucher_id],
        exact: true,
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["voucher-user"],
        exact: true,
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["my-vouchers-v2"],
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["vouchers", "voucher-users", "stats"],
        exact: true,
        refetchType: "active",
      });
    },
  });
}
