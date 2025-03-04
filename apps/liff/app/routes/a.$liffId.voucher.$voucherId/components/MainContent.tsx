import React, { useState } from "react";
import { getDirectusFileUrl } from "~/utils/files";
import { Voucher } from "~/types/app";
import Tabs, { TabItem } from "./Tabs";

interface MainContentProps {
  voucher: Voucher;
  isThaiLanguage: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  voucher,
  isThaiLanguage,
}) => {
  const title = isThaiLanguage ? voucher?.titleTH : voucher?.titleEN;
  const description = isThaiLanguage
    ? voucher?.descriptionTH?.replace(/\\n/g, "\n")
    : voucher?.descriptionEN?.replace(/\\n/g, "\n");
  const condition = isThaiLanguage
    ? voucher?.conditionTH?.replace(/\\n/g, "\n")
    : voucher?.conditionEN?.replace(/\\n/g, "\n");
  const primaryColor = voucher?.primaryColor || "#0056b3"; // Default to a blue color if not provided

  const [activeTab, setActiveTab] = useState("details");

  const tabs: TabItem[] = [
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

      <Tabs 
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        primaryColor={primaryColor}
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
  );
};

export default MainContent;
