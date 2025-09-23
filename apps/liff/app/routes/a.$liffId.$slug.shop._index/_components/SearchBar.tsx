import React, { useState, useCallback } from "react";
import { Search, X } from "lucide-react";
import { t } from "~/i18n/messages";

interface SearchBarProps {
  language: string;
  primaryColor?: string;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
  isLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  language,
  primaryColor,
  showSearch = false,
  onSearch,
  isLoading = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const placeholder = t(language as "th" | "en", "searchBar.placeholder");

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  }, [onSearch]);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
    onSearch?.("");
  }, [onSearch]);

  if (!showSearch) return null;

  return (
    <div className="relative" role="search">
      <label htmlFor="search-input" className="sr-only">
        {placeholder}
      </label>
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
        className="w-full pl-10 pr-10 py-2 bg-gray-100 border-transparent rounded-xl border-0
               focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
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
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 rounded"
          aria-label={t(language as "th" | "en", "searchBar.clear")}
          type="button"
        >
          <X className="w-4 h-4" />
        </button>
      )}
      {isLoading && (
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          aria-label={t(language as "th" | "en", "searchBar.searching")}
        >
          <div className="animate-spin w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
