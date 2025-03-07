import { components } from "./directus";

export type Voucher = Omit<components["schemas"]["ItemsVouchers"], "metadata"> & {
    metadata: Metadata;
  };

export type VoucherCode = Omit<components["schemas"]["ItemsVouchersCodes"], "voucher"> & {
  voucher: Voucher;
};

export type VoucherUser = Omit<components["schemas"]["ItemsVouchersUsers"], "code"> & {
  code: VoucherCode;
};

interface Metadata {
  title: language;
  description: language;
  condition: language;
  redemptionType: "instant" | "form";
  form?: Form;
}

interface Form {
  fields: Field[];
  submitLabel: string;
}

interface Field {
  name: string;
  label: language;
  type: 'text' | 'email' | 'number' | 'tel' | 'textarea';
  required: boolean;
}

export interface language {
  th: string;
  en: string;
}

export interface CollectVoucher{
  voucher:string;
  collected_by:string;
}
