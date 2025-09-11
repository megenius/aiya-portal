import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CollectVoucher } from "~/types/app";
import { collectVoucher, collectVoucherV2 } from "~/services/vouchers";

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
      // Try v2 first; fallback to legacy on unsupported
      try {
        const res = await collectVoucherV2(variables);
        return res.data;
      } catch (err: unknown) {
        // Extract HTTP status safely from unknown error (Axios-like)
        let status: number | undefined;
        if (
          typeof err === "object" &&
          err !== null &&
          "response" in err &&
          (err as { response?: { status?: number } }).response
        ) {
          status = (err as { response?: { status?: number } }).response?.status;
        }
        if (status === 404 || status === 405) {
          const legacy = await collectVoucher(variables);
          return legacy.data;
        }
        throw err;
      }
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
        queryKey: ["vouchers", "voucher-users", "stats"],
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
