import React, { useState, useRef, useEffect } from "react";
import { Bot } from "~/@types/app";
import { useBotUpdate } from "~/hooks/bot";
import { useBotModels } from "~/hooks/bot/useBotModels";

interface DropdownProps {
  bot?: Bot;
}

const Dropdown: React.FC<DropdownProps> = ({ bot }) => {
  const { data: models, isLoading: isModelsLoading } = useBotModels();
  const updateBot = useBotUpdate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>(
    bot?.metadata?.llm?.model || "google/gemini-2.0-flash-001"
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    const model = models?.find((model) => model.model === item);
    updateBot.mutateAsync({
      variables: {
        key: bot?.id as string,
        data: {
          metadata: {
            llm: {
              provider: model?.provider || "google",
              model: model?.model || "google/gemini-2.0-flash-001",
              max_input_tokens: model?.max_input_tokens || 16000,
              max_output_tokens: model?.max_output_tokens || 4096,
              temperature: 0,
            },
            mode: bot?.metadata?.mode || "generative",
            max_search_results: bot?.metadata?.max_search_results || 10,
            min_confidence: bot?.metadata?.min_confidence || 0.8,
            enabled: bot?.metadata?.enabled || 1,
            agent_type: bot?.metadata?.agent_type || "FAQ",
            temperature: bot?.metadata?.temperature || 0,
            embedding_model: bot?.metadata?.embedding_model || "aiya",
            waiting_message: bot?.metadata?.waiting_message || "🔍 กำลังค้นหาข้อมูล กรุณารอสักครู่นะคะ 🙏",
            fallback: bot?.metadata?.fallback || {
              mode: "llm",
              provider: "google",
              model: "google/gemini-2.0-flash-001",
              confidence: 0.8,
              support_languages: ["th", "en"],
              title: "ไม่พบข้อมูล",
              message:
                "ขออภัยในความไม่สะดวกค่ะ ไม่ทราบว่าคุณกำลังค้นหาข้อมูลเหล่านี้อยู่ใช่ไหมคะ?",
            },
            greeting_message_enabled:
              bot?.metadata?.greeting_message_enabled || true,
              routing_enabled: bot?.metadata?.routing_enabled || false,
              fallback_enabled: bot?.metadata?.fallback_enabled || true,
              show_name_enabled: bot?.metadata?.show_name_enabled || false,
          },
        },
      },
    });
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const items = [
  //   "Claude-3-5-haiku-20241022-v1",
  //   "Gemini-2.0-flash-001",
  //   "GPT4o-mini",
  // ];

  return (
    <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
      <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
        <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
          <label
            htmlFor="dropdown-button"
            className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
          >
            Bot Model
          </label>
        </div>
        <div className="sm:col-span-8 xl:col-span-6 2xl:col-span-4">
          <div
            className="relative inline-block text-left w-full"
            ref={dropdownRef}
          >
            <button
              type="button"
              id="dropdown-button"
              className={`inline-flex justify-between w-full rounded-lg border border-gray-200 shadow-sm px-4 py-2 bg-white text-sm hover:bg-gray-50 focus:outline-none 
                ${selectedItem ? "text-gray-800" : "text-gray-400"}`}
              onClick={handleToggle}
              disabled={isModelsLoading}
            >
              {selectedItem || "Select model"}
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {models?.map((item, index) => (
                    <button
                      key={index}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      role="menuitem"
                      onClick={() => handleItemClick(item.model || "google/gemini-2.0-flash-001")}
                    >
                      {item.model}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
