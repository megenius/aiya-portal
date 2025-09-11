import React, { useEffect, useState } from "react";
import { formatDateTimeShort } from "../../../utils/helpers";

interface TimeCountdownProps {
  seconds: number;
  expiredDate: string;
  language: string;
  className?: string;
}

const pad = (n: number) => n.toString().padStart(2, "0");

export const TimeCountdown: React.FC<TimeCountdownProps> = ({
  seconds,
  expiredDate,
  language,
  className,
}) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    setTimeLeft(seconds); // reset when seconds changes
  }, [seconds]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;

  const expiresInText = {
    th: "ใช้ภายใน",
    en: "Expires in",
  };

  //ใช้ได้ถึง
  const usedInText = {
    th: "ใช้ได้ถึง",
    en: "Used in",
  };

  return (
    <div
      className={`flex items-center justify-between bg-gray-800 bg-opacity-50 px-4 py-2 ${className ?? ""}`}
    >
      <span className="text-lg font-semibold text-white">
        {timeLeft >= 86400 ? usedInText[language] : expiresInText[language]}
      </span>
      {timeLeft >= 86400 ? (
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">
            {formatDateTimeShort(expiredDate, language === "th" ? "th" : "en", {
              includeTime: false,
            })}
          </span>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <span className="rounded bg-[#181C22] px-2 py-1 text-xl font-bold text-white">
            {pad(hours)}
          </span>
          <span className="text-2xl font-bold text-black">:</span>
          <span className="rounded bg-[#181C22] px-2 py-1 text-xl font-bold text-white">
            {pad(minutes)}
          </span>
          <span className="text-2xl font-bold text-black">:</span>
          <span className="rounded bg-[#181C22] px-2 py-1 text-xl font-bold text-white">
            {pad(secs)}
          </span>
        </div>
      )}
    </div>
  );
};
