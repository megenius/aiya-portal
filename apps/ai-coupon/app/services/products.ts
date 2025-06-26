import { Product } from "~/@types/app";
import api from "./api";

export const fetchProduct = (id: string) =>
  api.get<Product>(`/items/products/${id}`);

export const insertProduct = (data: Product) =>
  api.post<Product>("/items/products", data);

export const updateProduct = (id: string, data: Product) => {
  return api.patch(`/items/products/${id}`, data);
};

export const deleteProduct = (id: string) => {
  return api.delete(`/items/products/${id}`);
};
