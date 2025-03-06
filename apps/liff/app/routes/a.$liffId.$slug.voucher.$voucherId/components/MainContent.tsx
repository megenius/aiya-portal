import React, { useState } from "react";
import { getDirectusFileUrl } from "~/utils/files";
import { Voucher } from "~/types/app";
import Tabs from "../../../components/Tabs";

interface MainContentProps {
  voucher: Voucher;
  isThaiLanguage: boolean;
  pageState: string;
}

const MainContent: React.FC<MainContentProps> = ({
  voucher,
  isThaiLanguage,
  pageState,
}) => {
  const title = isThaiLanguage ? voucher?.titleTH : voucher?.titleEN;
  const description = isThaiLanguage
    ? voucher?.descriptionTH?.replace(/\\n/g, "\n")
    : voucher?.descriptionEN?.replace(/\\n/g, "\n");
  const condition = isThaiLanguage
    ? voucher?.conditionTH?.replace(/\\n/g, "\n")
    : voucher?.conditionEN?.replace(/\\n/g, "\n");

  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { id: "details", label: "รายละเอียด" },
    { id: "conditions", label: "เงื่อนไข" },
    { id: "locations", label: "สาขา" },
  ];

  return (
    <>
      <img
        src={getDirectusFileUrl(voucher?.cover as string)}
        alt={voucher?.id}
        className="w-full h-56 object-cover"
      />
      <span className="p-4 text-lg font-bold block">{title}</span>

      {pageState === "landing" && (
        <>
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            primaryColor={voucher?.primaryColor || ""}
          />

          <div className="p-4 text-gray-700">
            {activeTab === "details" && (
              <p className="whitespace-pre-wrap">{description}</p>
            )}
            {activeTab === "conditions" && (
              <p className="whitespace-pre-wrap">{condition}</p>
            )}
            {activeTab === "locations" && (
              <ul className="space-y-2">
                <li>• สาขาเซ็นทรัลเวิลด์ ชั้น 7</li>
                <li>• สาขาสยามพารากอน ชั้น 4</li>
                <li>• สาขาเอ็มควอเทียร์ ชั้น 5</li>
              </ul>
            )}
          </div>
        </>
      )}

      {pageState === "form" && (
        <form className="p-4 space-y-4">
          {voucher?.metadata.form?.fields.map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                required={field.required}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary sm:text-sm"
                onFocus={(e) => (
                  (e.target.style.boxShadow = `0 0 0 1px ${voucher?.primaryColor}`),
                  (e.target.style.borderColor = voucher?.primaryColor || "")
                )}
                onBlur={(e) => (
                  (e.target.style.boxShadow = ""),
                  (e.target.style.borderColor = "")
                )}
              />
            </div>
          ))}
        </form>
      )}
    </>
  );
};

export default MainContent;
