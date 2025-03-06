import React, { useState } from "react";

interface FollowButtonProps {
  language: string;
  onClick: () => void;
  className?: string;
  color?: string;
  isFollowed: boolean;
}

const FollowButton: React.FC<FollowButtonProps> = ({
  language,
  onClick,
  className = "",
  color,
  isFollowed = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const followText = {
    th: "ติดตาม",
    en: "Follow",
  }
  const unfollowText = {
    th: "ยกเลิกติดตาม",
    en: "Unfollow",
  }
  const followingText = {
    th: "กำลังติดตาม",
    en: "Following",
  }

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (onClick) onClick();
    }, 1000);
  };

  const cursor = isLoading ? "cursor-not-allowed" : "cursor-pointer";

  const getButtonStyles = () => {
    // if (isLoading) return "opacity-70 cursor-not-allowed";

    if (isFollowed) {
      return color ? "" : "bg-primary text-white border-primary";
    }
    return color ? "" : "border-primary text-primary";
  };

  const getButtonStyle = () => {
    if (!color) return {};

    if (isFollowed) {
      return {
        backgroundColor: color,
        color: "#ffffff",
        borderColor: color,
      };
    }

    return {
      color: color,
      borderColor: color,
    };
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`px-3 py-1 border rounded-lg font-medium text-sm transition-colors flex items-center justify-center ${getButtonStyles()} ${cursor} ${className}`}
      style={getButtonStyle()}
    >
      {isLoading ? (
        <span className="flex items-center">
          <h4>{isFollowed ? unfollowText[language]  : `${followingText[language]}...`}</h4>
          <svg
            className={`animate-spin ml-2 h-4 w-4 ${isFollowed ? "text-white" : "text-gray-600"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      ) : isFollowed ? (
        followingText[language]
      ) : (
        followText[language]
      )}
    </button>
  );
};

export default FollowButton;
