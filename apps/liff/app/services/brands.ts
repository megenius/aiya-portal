import { Brand } from "~/types/app";
import api from "./api";

export const fetchBrands = ({status}) =>
    api.get<Array<Brand>>(`/vouchers/voucher-brands?status=${status}`);

export const fetchBrand = (id: string) =>
    api.get<Brand>(`/vouchers/voucher-brands/${id}`);