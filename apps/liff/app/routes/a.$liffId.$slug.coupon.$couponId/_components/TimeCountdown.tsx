import React, { useEffect, useState } from "react";

interface TimeCountdownProps {
  label: string;
  seconds: number;
  className?: string;
}

const pad = (n: number) => n.toString().padStart(2, "0");

export const TimeCountdown: React.FC<TimeCountdownProps> = ({ label, seconds, className }) => {
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

  return (
    <div className={`flex items-center justify-between bg-white bg-opacity-50 px-4 py-2 ${className ?? ""}`}>
      <span className="text-white font-semibold text-lg">{label}</span>
      <div className="flex items-center space-x-2">
        <span className="bg-[#181C22] text-white font-bold text-xl px-2 py-1 rounded">{pad(hours)}</span>
        <span className="text-black font-bold text-2xl">:</span>
        <span className="bg-[#181C22] text-white font-bold text-xl px-2 py-1 rounded">{pad(minutes)}</span>
        <span className="text-black font-bold text-2xl">:</span>
        <span className="bg-[#181C22] text-white font-bold text-xl px-2 py-1 rounded">{pad(secs)}</span>
      </div>
    </div>
  );
};
