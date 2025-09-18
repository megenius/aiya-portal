import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CollectVoucher } from "~/types/app";
import { collectVoucherV2 } from "~/services/vouchers";

// interface TrackingMethods {
//   tracking: Tracking;
//   data: any;
// }
interface MutationFn {
  variables: CollectVoucher;
}

export function useCollectVoucher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ variables }: MutationFn) => {
      const res = await collectVoucherV2(variables);
      return res.data;
    },
    onSuccess: (_res, { variables }) => {
      // New unified page v2
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
      // Refetch profile so voucherUserStats is up to date
      queryClient.invalidateQueries({
        queryKey: ["me"],
        exact: true,
        refetchType: "active",
      });
    },
  });
}

// export function useCollectVoucher() {
//   return useMutation({
//     mutationFn: ({ tracking, data }: TrackingMethods) =>
//       sendTracking(tracking, data),
//   });
// }

// const sendTracking = (tracking: Tracking, data: any) => {
//   const { onClick } = tracking.button;
//   const timestamp = new Date().toISOString();
//   const trackingBody = mustache.render(JSON.stringify(onClick.body), {
//     TIMESTAMP: timestamp,
//     ...data,
//   });

//   return axios(onClick.url, {
//     method: "POST",
//     data: trackingBody,
//   });
// };
