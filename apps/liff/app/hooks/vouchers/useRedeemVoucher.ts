import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redeemVoucher } from "~/services/vouchers";
import { VoucherUser } from "~/types/app";


interface MutationFn {
  variables: Partial<VoucherUser>;
}

export function useRedeemVoucher() {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ variables }: MutationFn ) => 
      redeemVoucher(variables).then((response) => response.data),
    onSuccess: (res) => {
        queryClient.invalidateQueries({
          queryKey: ["vouchersUser",res.collected_by ],
          exact: true,
          refetchType: "active",
        });
        queryClient.invalidateQueries({
          queryKey: ["vouchers","voucher-users","stats",res.collected_by ],
          exact: true,
          refetchType: "active",
        });
      },
  });
}
