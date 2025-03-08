import { Brand } from "~/types/app";
import api from "./api";

export const fetchBrands = () =>
    api.get<Array<Brand>>(`/vouchers/voucher-brands`);