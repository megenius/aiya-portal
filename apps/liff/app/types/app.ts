import { components } from "./directus";

export type Voucher = Omit<components["schemas"]["ItemsVouchers"], "metadata"> & {
    metadata: Metadata;
  };

interface Metadata {
  redemptionType: "instant" | "form";
  form?: Form;
}

interface Form {
  fields: Field[];
  submitLabel: string;
}

interface Field {
  name: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'tel' | 'textarea';
  required: boolean;
}
