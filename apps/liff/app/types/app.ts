import { components } from "./directus";

export type Voucher = Omit<components["schemas"]["ItemsVouchers"], "metadata"> & {
    metadata: Metadata;
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
