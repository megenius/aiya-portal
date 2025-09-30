import React, { useState, useCallback } from "react";
import { Search } from "lucide-react";

interface PageFilterProps {
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const PageFilter: React.FC<PageFilterProps> = ({ onSearchChange, onStatusChange }) => {
  const [searchValue, setSearchValue] = useState("");
  const [statusValue, setStatusValue] = useState("published");

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);
      onSearchChange(value);
    },
    [onSearchChange]
  );

  const handleStatusChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setStatusValue(value);
      onStatusChange(value);
    },
    [onStatusChange]
  );

  return (
    <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-4">
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search voucher apps..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <select
            value={statusValue}
            onChange={handleStatusChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PageFilter;