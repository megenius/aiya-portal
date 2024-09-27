// hooks/useProducts.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "~/@types/app";
import { updateProduct } from "~/services/products";

export const useProductUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Product) =>
      updateProduct(data.id as string, data).then((response) => response.data),
    onSuccess: (product: Product) => {
      queryClient.invalidateQueries({
        queryKey: ["products", product.id],
        exact: true,
        refetchType: "active",
      });

      queryClient.invalidateQueries({
        queryKey: ["workspaces", product.team, "products"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
