import React, { useMemo } from "react";

interface ChatHeaderProps {
  channels: Array<{
    name: string;
    providerId: string;
  }>;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  channels,
  activeFilter,
  onFilterChange
}) => {
  // Use memoization to store channel options and only recalculate when channels change
  const channelOptions = useMemo(() => {
    return channels?.map(channel => (
      <option key={channel.providerId} value={channel.name}>
        {channel.name}
      </option>
    ));
  }, [channels]);

  return (
    <div className="py-2 px-5 flex justify-between items-center gap-x-2 border-b border-gray-200 dark:border-neutral-700">
      <span id="hs-pro-chat-sidebar-label" className="block truncate font-semibold text-gray-800 dark:text-neutral-200">
        Inbox
      </span>
      <div className="flex items-center">
        {/* Channel Dropdown */}
        <div className="relative inline-block">
          <select
            id="hs-pro-select-channel"
            value={activeFilter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="py-2 ps-2.5 pe-6 text-xs text-gray-500 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0"
            data-hs-select="{
              &quot;placeholder&quot;: &quot;Select channel...&quot;,
              &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
              &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 before:absolute before:inset-0 before:z-1 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700&quot;,
              &quot;dropdownClasses&quot;: &quot;mt-2 z-50 w-32 p-1 space-y-0.5 bg-white rounded-xl shadow-xl dark:bg-neutral-900&quot;,
              &quot;optionClasses&quot;: &quot;hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-[13px] text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800&quot;,
              &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;
            }"
          >
            <option value="all">All Channels</option>
            {channelOptions}
          </select>
        </div>
      </div>
    </div>
  );
};
