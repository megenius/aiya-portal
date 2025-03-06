import React from "react";

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (id: string) => void;
  primaryColor: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab, primaryColor }) => {
  return (
    <div className="flex w-full border-b">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`relative flex-1 py-2 text-sm ${
            activeTab === tab.id ? "text-primary" : "text-gray-500"
          } transition-all duration-300 ease-in-out`}
          style={{
            color: activeTab === tab.id ? primaryColor : undefined,
          }}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 bg-primary
                ${activeTab === tab.id ? "transform scale-x-100" : "transform scale-x-0"}`}
            style={{ backgroundColor: primaryColor }}
          />
        </button>
      ))}
    </div>
  );
};

export default Tabs;
