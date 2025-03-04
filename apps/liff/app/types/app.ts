import { components } from "./directus";

export type Voucher = Omit<components["schemas"]["ItemsVouchers"], "metadata"> & {
    metadata: Metadata;
  };

interface Metadata {
}