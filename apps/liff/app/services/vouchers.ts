import { Voucher } from "~/types/app";
import api from "./api";

export const fetchVouchers = () =>
  api.get<Array<Voucher>>(`/vouchers`);