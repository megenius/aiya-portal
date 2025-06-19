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
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["voucher-user",res.userId],
        exact: true,
        refetchType: "active",
      });
    },
  });
}
