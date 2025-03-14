import React, { useState } from "react";
import { BotLog } from "~/@types/app";
import { useBotMutedUsersDelete } from "~/hooks/bot/useBotMutedUsersDelete";
import { useBotMutedUsersInsert } from "~/hooks/bot/useBotMutedUsersInsert";
import BotDeactivateModal from "./BotDeactivateModal";
import { toMillisecond } from "~/utils/utils";

interface ToggleButtonProps {
  contact: BotLog;
  initialChecked?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  contact,
  initialChecked = false,
}) => {
  const insertBotMutedUser = useBotMutedUsersInsert();
  const deleteBotMutedUser = useBotMutedUsersDelete();
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(initialChecked);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeactivateBot = (duration: number | "permanent") => {
    console.log(
      `Bot will be deactivated for: ${
        duration === "permanent" ? "forever" : `${duration} hours`
      }`
    );
    insertBotMutedUser.mutate({
      variables: {
        id: "",
        bot: contact.bot_id,
        provider_id: contact.provider_id,
        uid: contact.social_id,
        expires_on: duration === "permanent" 
          ? new Date(Date.now() + toMillisecond(30,'day')).toISOString() 
          : new Date(Date.now() + toMillisecond(duration,'minute')).toISOString(),
      },
    });
    setIsChecked(false);
  };

  const handleClick = () => {
    setIsLoading(true);
    const newChecked = !isChecked;
    handleBot(newChecked);
  };

  const handleBot = (checked: boolean) => {
    try {
      if (!checked) {
        setIsModalOpen(true);
      } else {
        deleteBotMutedUser.mutate({
          botId: contact.bot_id,
          uid: contact.social_id,
        });
        setIsChecked(checked);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className={`p-2 rounded-lg ease-in-out duration-500 hover:brightness-90 border flex items-center justify-center ${
          isChecked ? "bg-blue-600" : "bg-gray-300"
        }`}
        onClick={handleClick}
      >
        {isLoading && (
          <div
            className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {!isLoading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-bot ${isChecked ? "text-white" : "text-gray-600"}`}
          >
            {isChecked ? (
              <>
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </>
            ) : (
              <>
                <path d="M13.67 8H18a2 2 0 0 1 2 2v4.33" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M22 22 2 2" />
                <path d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" />
                <path d="M9 13v2" />
                <path d="M9.67 4H12v2.33" />
              </>
            )}
          </svg>
        )}
      </button>
      <BotDeactivateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeactivateBot}
      />
    </>
  );
};

export default ToggleButton;
