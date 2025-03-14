import { Check, Copy, ExternalLink } from "lucide-react";
import React, { useState } from "react";
import { Bot } from "~/@types/app";

interface PlaygroundProps {
  bot?: Bot;
}

const Playground: React.FC<PlaygroundProps> = ({ bot }) => {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const url = `https://webchat.aiya.me/?id=P${bot?.id}&embed=true&compact=true&playground=1&_t=${Date.now()}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setShowTooltip(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

      setTimeout(() => {
        setShowTooltip(false);
      }, 1500);
    });
  };

  return (
    <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
      <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
        <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
          <label
            htmlFor="playground"
            className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
          >
            Playground
          </label>
        </div>
        <div className="sm:col-span-8 xl:col-span-6 2xl:col-span-4">
          <div className="relative flex items-center w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-sm text-blue-600 hover:text-blue-800 font-medium truncate"
            >
              {url}
            </a>
            <div className="flex items-center border-l border-gray-200">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-gray-700"
                title="Open link"
              >
                <ExternalLink size={18} />
              </a>
              <div className="relative">
                <button
                  onClick={handleCopy}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  title="Copy URL"
                >
                  {copied ? (
                    <Check size={18} className="text-green-500" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>

                {showTooltip && (
                  <div className="absolute right-0 top-full mt-2 w-32 bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 text-center">
                    คัดลอกแล้ว!
                    <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-800 transform rotate-45"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
