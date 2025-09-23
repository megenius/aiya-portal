import React, { useState, useCallback } from "react";
import { Search, X } from "lucide-react";
import { t } from "~/i18n/messages";

interface SearchBarProps {
  language: string;
  primaryColor?: string;
  onSearch?: (query: string) => void;
  isLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  language,
  primaryColor,
  onSearch,
  isLoading = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const placeholder = t(language as "th" | "en", "searchBar.placeholder");

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch?.(query);
    },
    [onSearch],
  );

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
    onSearch?.("");
  }, [onSearch]);

  return (
    <div className="relative" role="search">
      <label htmlFor="search-input" className="sr-only">
        {placeholder}
      </label>
      <Search
        className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
        aria-hidden="true"
      />
      <input
        id="search-input"
        type="text"
        role="searchbox"
        aria-label={placeholder}
        aria-describedby={searchQuery ? "search-results-count" : undefined}
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full rounded-xl border-0 border-transparent bg-gray-100 py-2 pl-10 pr-10 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
        style={{
          boxShadow: isFocused
            ? `0 0 0 2px ${primaryColor}` // Ring effect แบบ Dynamic
            : "none",
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={isLoading}
        autoComplete="off"
        spellCheck="false"
      />
      {searchQuery && !isLoading && (
        <button
          onClick={handleClearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform rounded text-gray-400 transition-colors hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2"
          aria-label={t(language as "th" | "en", "searchBar.clear")}
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      {isLoading && (
        <div
          className="absolute right-3 top-1/2 -translate-y-1/2 transform"
          aria-label={t(language as "th" | "en", "searchBar.searching")}
        >
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"></div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
