import { Voucher } from "./app.type";
import { components } from "./directus";
import { Category } from "./page.type";

export type VoucherBrand = Omit<
  components["schemas"]["ItemsVouchersBrands"],
  "vouchers" | "Metadata"
> & { vouchers: Voucher[], metadata: Metadata };

export type Metadata = {
    category : Category;
};