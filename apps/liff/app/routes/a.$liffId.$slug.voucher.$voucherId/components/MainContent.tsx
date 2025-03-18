import React, { useState, useEffect } from "react";
import { getDirectusFileUrl } from "~/utils/files";
import { FieldData, Voucher, VoucherStats } from "~/types/app";
import Tabs from "../../../components/Tabs";
import VoucherProgressBar from "./VoucherProgressBar";
import FormField from "./FormField";

interface MainContentProps {
  voucher: Voucher;
  codeStats: VoucherStats;
  language: string;
  pageState: string;
  onFormValidationChange?: (isValid: boolean) => void;
  onFormDataChange?: (formData: FieldData[]) => void; // Add new prop
}

const MainContent: React.FC<MainContentProps> = ({
  voucher,
  codeStats,
  language,
  pageState,
  onFormValidationChange,
  onFormDataChange, // Receive new prop
}) => {
  const title = voucher.metadata.title[language];
  const description = voucher.metadata.description[language]?.replace(
    /\\n/g,
    "\n"
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
    {
      id: "details",
      label: {
        th: "รายละเอียด",
        en: "Details",
      },
    },
    {
      id: "conditions",
      label: {
        th: "เงื่อนไข",
        en: "Conditions",
      },
    },
    // { id: "locations", label: "สาขา" },
  ];

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <img
          src={getDirectusFileUrl(voucher?.cover as string)}
          alt={voucher?.id}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <h3 className="px-4 pt-3 pb-2 text-lg font-bold block">{title}</h3>

      {pageState === "landing" && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <VoucherProgressBar
            totalVouchers={codeStats?.total}
            availableVouchers={codeStats?.available}
            language={language}
            primaryColor={voucher?.primaryColor || ""}
          />
          <div className="mt-4 flex-1 flex flex-col overflow-hidden">
            <Tabs
              language={language}
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              primaryColor={voucher?.primaryColor || ""}
            />

            <div className="p-4 text-gray-700 overflow-y-auto flex-1">
              {activeTab === "details" && (
                <p className="whitespace-pre-wrap">{description}</p>
              )}
              {activeTab === "conditions" && (
                <p className="whitespace-pre-wrap">{condition}</p>
              )}
              {/* {activeTab === "locations" && (
                <ul className="space-y-2">
                  <li>• สาขาเซ็นทรัลเวิลด์ ชั้น 7</li>
                  <li>• สาขาสยามพารากอน ชั้น 4</li>
                  <li>• สาขาเอ็มควอเทียร์ ชั้น 5</li>
                </ul>
              )} */}
            </div>
          </div>
        </div>
      )}

      {pageState === "form" && (
        <form className="p-4 space-y-4 flex-1 overflow-y-auto">
          {voucher?.metadata.form?.fields.map((field, index) => (
            <FormField
              key={index}
              language={language}
              label={field.label[language]}
              type={field.type}
              required={field.required}
              primaryColor={voucher?.primaryColor || ""}
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

export default MainContent;
