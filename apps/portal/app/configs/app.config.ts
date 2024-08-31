import { Language } from "@repo/ui/types";

export type AppConfig = {
  apiPrefix: string;
  authenticatedEntryPath: string;
  unAuthenticatedEntryPath: string;
  tourPath: string;
  locale: string;
  enableMock: boolean;
  languages: Language[];
};

const appConfig: AppConfig = {
  apiPrefix: "/api",
  // authenticatedEntryPath: '/app/sales/dashboard',
  authenticatedEntryPath: "/test",
  unAuthenticatedEntryPath: "/auth/sign-in",
  tourPath: "/app/account/kyc-form",
  locale: "en",
  enableMock: false,
  languages: [
    { code: "en-US", name: "English (US)", flag: "us", enabled: true },
    { code: "th-TH", name: "ไทย (ประเทศไทย)", flag: "th", enabled: true },
  ],
};

export default appConfig;
