import React from "react";

interface NavigationTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: "available", label: "ใช้ได้" },
    { key: "used", label: "ใช้แล้ว" },
    { key: "expired", label: "หมดอายุ" },
  ];

  return (
    <nav className="flex border-b  bg-white">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`flex-1 py-3 text-center text-sm font-medium ${
            activeTab === tab.key
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default NavigationTabs;
