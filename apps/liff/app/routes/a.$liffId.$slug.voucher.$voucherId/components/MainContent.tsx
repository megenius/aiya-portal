import React, { useState } from "react";
import { getDirectusFileUrl } from "~/utils/files";
import { Voucher } from "~/types/app";
import Tabs from "../../../components/Tabs";
import VoucherProgressBar from "./VoucherProgressBar";
import FormField from "./FormField";

interface MainContentProps {
  voucher: Voucher;
  language: string;
  pageState: string;
}

const MainContent: React.FC<MainContentProps> = ({
  voucher,
  language,
  pageState,
}) => {
  const title = voucher.metadata.title[language];
  const description = voucher.metadata.description[language]?.replace(
    /\\n/g,
    "\n"
  );
  const condition = voucher.metadata.condition[language]?.replace(/\\n/g, "\n");

  const [activeTab, setActiveTab] = useState("details");

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
      <img
        src={getDirectusFileUrl(voucher?.cover as string)}
        alt={voucher?.id}
        className="w-full h-56 object-cover"
      />
      <h3 className="p-4 text-lg font-bold block">{title}</h3>

      {pageState === "landing" && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <VoucherProgressBar
            totalVouchers={10}
            collectedVouchers={0}
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
                <p className="whitespace-pre-wrap">
                  {description}
                </p>
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
              label={field.label[language]}
              type={field.type}
              required={field.required}
              primaryColor={voucher?.primaryColor || ""}
            />
          ))}
        </form>
      )}
    </div>
  );
};

export default MainContent;
