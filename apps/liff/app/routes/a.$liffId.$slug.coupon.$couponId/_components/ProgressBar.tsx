import React from "react";

interface ProgressBarProps {
  percentage: number;
  color?: string;
  className?: string;
  label?: React.ReactNode;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color,
  className = '',
  label,
}) => {
//   const percentage = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
      <div
        className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${percentage > 0 ? "bg-primary" : "bg-gray-500"}`}
        style={{
          width: `${percentage}%`,
          backgroundColor: percentage > 0 ? color : undefined,
        }}
      ></div>
      {label && (
        <div className="mt-1 text-center text-xs text-gray-700">{label}</div>
      )}
    </div>
  );
};

export default ProgressBar;
