import React from "react";

interface KPICardProps {
  label: string;
  value: React.ReactNode;
  color?: "blue" | "green" | "purple" | "orange" | "red";
}

const KPICard: React.FC<KPICardProps> = ({ label, value, color = "blue" }) => {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    purple: "bg-purple-50 border-purple-200",
    orange: "bg-orange-50 border-orange-200",
    red: "bg-red-50 border-red-200",
  };

  return (
    <div
      className={`border rounded-lg p-3 ${colorClasses[color] || colorClasses.blue}`}
    >
      <p className="text-xs text-gray-600 mb-1">{label}</p>
      <p className="text-lg font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default KPICard;
