import React from "react";
import ProgressBar from "../ProgressBar";

interface LimitedTimeProgressBarProps {
  percentage: number;
  timeLeft: number;
  primaryColor?: string;
  language: string;
}

const LimitedTimeProgressBar: React.FC<LimitedTimeProgressBarProps> = ({
  percentage,
  timeLeft,
  primaryColor,
  language,
}) => {
  const remainingText = {
    th: "เวลาคงเหลือ",
    en: "Time Left",
  };
  const warningText = {
    th: "คูปองจะหมดแล้ว! รีบเก็บเลย!",
    en: "Hurry! Coupons are expiring soon!",
  };

  return (
    <div className="w-full px-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">
          {remainingText[language]}
        </span>
        <span
          className={`text-sm font-bold ${percentage > 0 ? "text-primary" : "text-gray-500"}`}
          style={{ color: percentage > 0 ? primaryColor : undefined }}
        >
          {formatTimeLeft(timeLeft, language)}
        </span>
      </div>

      <ProgressBar percentage={percentage} color={primaryColor} />

      {percentage <= 20 && percentage > 0 && (
        <p className="text-xs text-red-500 mt-1">{warningText[language]}</p>
      )}
    </div>
  );

  function formatTimeLeft(seconds: number, language: string) {
    if (seconds <= 0) {
      return language === "th" ? "หมดเวลาแล้ว" : "Expired";
    }
    if (seconds >= 86400) {
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      if (language === "th") {
        return `${days} วัน${hours > 0 ? ` ${hours} ชม.` : ""}`;
      } else {
        return `${days} day${days > 1 ? "s" : ""}${
          hours > 0 ? ` ${hours} hour${hours > 1 ? "s" : ""}` : ""
        }`;
      }
    } else if (seconds >= 3600) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      if (language === "th") {
        return `${hours} ชม.${minutes > 0 ? ` ${minutes} นาที` : ""}`;
      } else {
        return `${hours} hour${hours > 1 ? "s" : ""}${
          minutes > 0 ? ` ${minutes} min${minutes > 1 ? "s" : ""}` : ""
        }`;
      }
    } else {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
  }
};

export default LimitedTimeProgressBar;
