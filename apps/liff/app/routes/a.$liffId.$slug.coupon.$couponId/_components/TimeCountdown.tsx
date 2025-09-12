import React, { useEffect, useState } from "react";
import { formatDateTimeShort } from "../../../utils/helpers";

interface TimeCountdownProps {
  seconds: number;
  expiredDate: string; // backward-compat: target date for "end" variant
  targetDate?: string; // optional: overrides expiredDate for both variants
  language: string;
  className?: string;
  variant?: "end" | "start"; // default: "end"
  onComplete?: () => void; // called when countdown hits 0
  offsetMs?: number; // optional client - server offset in ms; now_server ≈ Date.now() - offsetMs
  phase?: "collect" | "use"; // wording context for 'end' variant
}

const pad = (n: number) => n.toString().padStart(2, "0");

export const TimeCountdown: React.FC<TimeCountdownProps> = ({
  seconds,
  expiredDate,
  targetDate,
  language,
  className,
  variant = "end",
  onComplete,
  offsetMs = 0,
  phase = "use",
}) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [completed, setCompleted] = useState(false);

  // Determine the authoritative target timestamp if provided
  const target = targetDate ?? expiredDate;
  const targetMs = target ? new Date(target).getTime() : null;

  useEffect(() => {
    // Reset timeLeft from authoritative source
    if (typeof targetMs === "number") {
      const nowAligned = Date.now() - (offsetMs || 0);
      const diff = Math.ceil((targetMs - nowAligned) / 1000);
      setTimeLeft(diff);
    } else {
      setTimeLeft(seconds);
    }
    setCompleted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, targetMs, offsetMs]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    // If we have a target date, recompute from now to avoid interval drift
    if (typeof targetMs === "number") {
      const timer = setInterval(() => {
        const nowAligned = Date.now() - (offsetMs || 0);
        const remaining = Math.ceil((targetMs - nowAligned) / 1000);
        setTimeLeft(remaining);
      }, 500);
      return () => clearInterval(timer);
    }
    // Fallback: decrement by 1 second when no target is known
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, targetMs, offsetMs]);

  // Fire completion callback once when countdown reaches 0
  useEffect(() => {
    if (timeLeft <= 0 && !completed && typeof onComplete === "function") {
      setCompleted(true);
      onComplete();
    }
  }, [timeLeft, completed, onComplete]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;

  // Labels for both variants (dynamic by phase for 'end')
  const labels = {
    end: {
      within: {
        th: phase === "collect" ? "เก็บภายใน" : "ใช้ภายใน",
        en: phase === "collect" ? "Collect within" : "Expires in",
      },
      on: {
        th: phase === "collect" ? "เก็บได้ถึง" : "ใช้ได้ถึง",
        en: phase === "collect" ? "Collect by" : "Expires on",
      },
    },
    start: {
      within: { th: "เริ่มใน", en: "Starts in" },
      on: { th: "เริ่มวันที่", en: "Starts on" },
    },
  };

  // target already defined above

  return (
    <div
      className={`flex items-center justify-between bg-gray-800 bg-opacity-50 px-4 py-2 ${className ?? ""}`}
    >
      <span className="text-lg font-semibold text-white">
        {timeLeft >= 86400
          ? labels[variant].on[language as "th" | "en"]
          : labels[variant].within[language as "th" | "en"]}
      </span>
      {timeLeft >= 86400 ? (
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">
            {formatDateTimeShort(target, language === "th" ? "th" : "en", {
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
