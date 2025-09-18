import { Brand } from "~/types/app";
import api from "./api";

export const fetchBrand = ({ brandId }) =>
  api.get<Brand>(`/vouchers/voucher-brands/${brandId}`).then((res) => res.data);

export const fetchBrandPageV2 = ({
  brandId,
  lang,
}: {
  brandId: string;
  lang: string;
}) =>
  api
    .get<Brand>(`/vouchers/v2/brands/${brandId}/page`, { params: { lang } })
    .then((res) => res.data);
