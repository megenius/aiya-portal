import { Brand } from "~/types/app";
import api from "./api";

export const fetchBrands = ({status}) =>
    api.get<Array<Brand>>(`/vouchers/voucher-brands?status=${status}`);

export const fetchBrand = ({brandId}) =>
    api.get<Brand>(`/vouchers/voucher-brands/${brandId}`).then((res) => res.data);