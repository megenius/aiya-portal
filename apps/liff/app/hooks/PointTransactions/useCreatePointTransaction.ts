import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPointTransaction } from "~/services/pointTransaction";
import { PointTransaction } from "~/types/app";

interface MutationFn {
  variables: Partial<PointTransaction>;
}

export function useCreatePointTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      createPointTransaction(variables).then((response) => response),
    onSuccess: (res) => {
      // Invalidate relevant queries to refetch data

      queryClient.invalidateQueries({
        queryKey: ["profiles",{uid: 'U4bbbb492c98d894f48559ea93b77fa96', liff_id: '2006392276-1qv3Lnpm'}],
        exact: true,
        refetchType: "active",
      });
    },
  });
}
