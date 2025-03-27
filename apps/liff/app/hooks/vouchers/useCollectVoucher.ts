import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CollectVoucher } from "~/types/app";
import { collectVoucher } from "~/services/vouchers";

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
    mutationFn: ({ variables }: MutationFn) =>
      collectVoucher(variables).then((response) => response.data),
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["vouchersUser",res.collected_by ],
        exact: true,
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["vouchers","voucher-codes","stats",res.voucher ],
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
