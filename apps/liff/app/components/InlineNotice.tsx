import React from "react";

type Language = "th" | "en";

type DeniedReason = "group_quota_full" | "already_collected";

type Level = "soft" | "medium" | "strong";

interface InlineNoticeProps {
  language: Language;
  className?: string;
  // If message is provided, it overrides deniedReason mapping
  message?: string;
  deniedReason?: DeniedReason | null;
  level?: Level;
}

const levelClasses: Record<Level, { container: string; text: string; border: string }> = {
  soft: {
    container: "bg-yellow-50",
    text: "text-yellow-800",
    border: "border-yellow-200",
  },
  medium: {
    container: "bg-yellow-100",
    text: "text-yellow-900",
    border: "border-yellow-300",
  },
  strong: {
    container: "bg-yellow-200",
    text: "text-yellow-900",
    border: "border-yellow-400",
  },
};

function mapReasonToMessage(language: Language, reason?: DeniedReason | null): string {
  if (reason === "already_collected") {
    return language === "th" ? "คุณเคยรับคูปองนี้ไปแล้ว" : "You have already collected this voucher.";
  }
  // default and group_quota_full
  return language === "th"
    ? "คุณใช้สิทธิ์ในแคมเปญนี้ครบแล้ว"
    : "You have reached the claim limit for this campaign.";
}

const InlineNotice: React.FC<InlineNoticeProps> = ({
  language,
  className,
  message,
  deniedReason,
  level = "soft",
}) => {
  const palette = levelClasses[level];
  const text = message ?? mapReasonToMessage(language, deniedReason ?? undefined);
  return (
    <div
      className={
        `rounded-lg border p-3 text-center text-sm sm:text-base ${palette.container} ${palette.text} ${palette.border}` +
        (className ? ` ${className}` : "")
      }
      role="status"
      aria-live="polite"
    >
      {text}
    </div>
  );
};

export default InlineNotice;
