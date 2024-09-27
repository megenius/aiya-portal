// hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceBySlug } from "~/services/workspaces";
import { fetchProduct } from "~/services/products";

export const useProduct = ({ id }) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProduct(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
