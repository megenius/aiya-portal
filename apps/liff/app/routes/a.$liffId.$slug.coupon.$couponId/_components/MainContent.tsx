import React, { useEffect, useState } from "react";
import { FieldData, Voucher, VoucherStats, VoucherUser } from "~/types/app";
import { TimeCountdown } from "./TimeCountdown";
import { getDirectusFileUrl } from "~/utils/files";
import Tabs from "../../../components/Tabs";
import FormField from "./FormField";
import VoucherProgressBar from "./VoucherProgressBar";

interface MainContentProps {
  voucher: Voucher;
  voucherUser?: VoucherUser;
  codeStats: VoucherStats;
  language: string;
  pageState: string;
  status?: string;
  onFormValidationChange?: (isValid: boolean) => void;
  onFormDataChange?: (formData: FieldData[]) => void; // Add new prop
  // Server-computed flags (optional)
  canCollect?: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  voucher,
  voucherUser,
  codeStats,
  language,
  pageState,
  status = "collected",
  onFormValidationChange,
  onFormDataChange, // Receive new prop
  canCollect,
}) => {
  const title = voucherUser
    ? voucher.metadata.title[language].replace(
        /\$\{value\}/g,
        getVoucherValueWithType(voucherUser),
      )
    : voucher.metadata.title[language];
  const description = voucher.metadata.description[language]?.replace(
    /\\n/g,
    "\n",
  );
  const condition = voucher.metadata.condition[language]?.replace(/\\n/g, "\n");

  const [activeTab, setActiveTab] = useState("details");
  // Add formData state to store form values using FieldData type
  const [formData, setFormData] = useState<FieldData[]>([]);

  // Handle form field changes
  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => {
      const existingFieldIndex = prev.findIndex((field) => field.name === name);
      if (existingFieldIndex >= 0) {
        // Update existing field
        const updatedFields = [...prev];
        updatedFields[existingFieldIndex] = { name, value };
        return updatedFields;
      } else {
        // Add new field
        return [...prev, { name, value }];
      }
    });
  };

  // Validate form fields when formData changes
  useEffect(() => {
    if (pageState === "form" && onFormValidationChange) {
      const requiredFields = voucher?.metadata.form?.fields
        .filter((field) => field.required)
        .map((field) => ({ name: field.name, type: field.type }));

      const isValid =
        requiredFields?.every((field) => {
          const fieldData = formData.find((data) => data.name === field.name);
          const value = fieldData?.value;

          // For telephone fields, require exactly 10 digits
          if (field.type === "tel") {
            return value !== undefined && value.length === 10;
          }

          // For other field types, just check if they're non-empty
          return value !== undefined && value.trim() !== "";
        }) ?? true;

      onFormValidationChange(isValid);
    }

    // Send form data to parent component when it changes
    if (onFormDataChange) {
      onFormDataChange(formData);
    }
  }, [
    formData,
    pageState,
    voucher?.metadata.form,
    onFormValidationChange,
    onFormDataChange,
  ]);

  const tabs = [
    { id: "details", label: { th: "รายละเอียด", en: "Details" } },
    { id: "conditions", label: { th: "เงื่อนไข", en: "Conditions" } },
    // { id: "locations", label: "สาขา" },
  ];
  const statusText = {
    expired: { th: "คูปองหมดอายุ", en: "Coupons expired" },
    fully_collected: { th: "คูปองหมดแล้ว", en: "Coupons fully collected" },
  };

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {pageState === "landing" && (
        <>
          {/* ratio="16/9" */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            {/* Background Image */}
            <img
              src={getDirectusFileUrl(voucher?.banner as string)}
              alt={voucher?.id}
              className="absolute left-0 top-0 h-full w-full object-cover"
            />
            {/* Gray Overlay */}
            {(status === "fully_collected" || status === "expired") && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-2xl font-bold text-white">
                {statusText[status][language]}
              </div>
            )}

            {voucher.metadata.redemptionType === "limited_time" &&
              status === "collected" &&
              voucherUser?.expired_date && (
                <div className="absolute bottom-0 z-10 w-full">
                  <TimeCountdown
                    seconds={getSecondsLeft(voucherUser?.expired_date)}
                    expiredDate={voucherUser?.expired_date}
                    language={language}
                  />
                </div>
              )}
          </div>

          <div className="space-y-2 px-4 pb-2 pt-3">
            {/* <Header
          language={language}
          voucher={voucher}
          color={voucher.voucher_brand_id?.primaryColor ?? ""}
        /> */}

            <h3 className="block text-lg font-semibold">{title}</h3>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            {(() => {
              const hideProgress = !voucherUser && canCollect === false; // e.g., group_quota_full
              const shouldShowStatus =
                status === "instant" ||
                status === "form" ||
                status === "fully_collected";
              return !hideProgress && shouldShowStatus ? (
                <VoucherProgressBar
                  totalVouchers={codeStats?.total}
                  availableVouchers={codeStats?.available}
                  language={language}
                  primaryColor={voucher?.voucher_brand_id.primaryColor || ""}
                />
              ) : null;
            })()}
            <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden">
              <Tabs
                language={language}
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                primaryColor={voucher?.voucher_brand_id.primaryColor || ""}
              />

              <div className="min-h-0 flex-1 overflow-y-auto p-4 text-gray-700">
                {activeTab === "details" && (
                  <p className="whitespace-pre-wrap">{description}</p>
                )}
                {activeTab === "conditions" && (
                  <p className="whitespace-pre-wrap">{condition}</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {pageState === "form" && (
        <form className="flex-1 space-y-4 overflow-y-auto p-4">
          {voucher?.metadata.form?.fields.map((field, index) => (
            <FormField
              key={index}
              language={language}
              label={field.label[language]}
              type={field.type}
              required={field.required}
              primaryColor={voucher?.voucher_brand_id.primaryColor || ""}
              value={
                formData.find((data) => data.name === field.name)?.value || ""
              }
              onChange={(value) => handleFieldChange(field.name, value)}
              name={field.name}
            />
          ))}
        </form>
      )}
    </div>
  );
};

function getVoucherValueWithType(voucherUser: VoucherUser) {
  if (!voucherUser.discount_value && !voucherUser.discount_type) return "";
  return `${voucherUser.discount_value}${voucherUser.discount_type === "percentage" ? "%" : ""}`;
}

function getSecondsLeft(expiredDate?: string): number {
  if (!expiredDate) return 0;
  const expired = new Date(expiredDate).getTime();
  const now = new Date().getTime();
  const seconds = Math.floor((expired - now) / 1000);
  return seconds > 0 ? seconds : 0;
}

export default MainContent;
