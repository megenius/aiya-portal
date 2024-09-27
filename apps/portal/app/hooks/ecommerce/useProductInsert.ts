// hooks/useProducts.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "~/@types/app";
import { insertProduct } from "~/services/products";

export const useProductInsert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["product:insert"],
    mutationFn: (data: Product) =>
      insertProduct(data).then((response) => response.data),
    onSuccess: (product: Product) => {
      queryClient.invalidateQueries({
        queryKey: ["workspaces", product.team, "products"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
