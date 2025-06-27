import React, { useEffect, useRef, useState } from "react";

interface FilterButtonProps {
  filterOptions: string[];
  onSelectFilter: (key: "survey_type" | "rating" | "testResult" | "adminResult" | "medType" | "topic", values: string[]) => void;
  buttonName: string;
  selectedFilter?: string[];
  isCheckboxDropdown?: boolean;
  showSubFilters?: boolean;
  subFilters?: Record<string, { options: string[], mappingKey: string, isMultiSelect?: boolean }>;
  filterMappings?: Record<string, Record<string, string>>;
  currentFilters?: any;
  onSubFilterChange?: (key: string, values: string[]) => void;
  tooltip?: string; // Made optional with ?
  dropdownWidth?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  filterOptions,
  onSelectFilter,
  buttonName,
  selectedFilter: defaultFilters = [],
  isCheckboxDropdown = false,
  showSubFilters = false,
  subFilters = {},
  filterMappings = {},
  currentFilters = {},
  onSubFilterChange = () => {},
  tooltip,
  dropdownWidth,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(defaultFilters);
  const [selectedMainFilter, setSelectedMainFilter] = useState<string>("");
  const [selectedSubFilters, setSelectedSubFilters] = useState<Record<string, string[]>>({});
  const [tempSubFilters, setTempSubFilters] = useState<Record<string, string[]>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownAlignment, setDropdownAlignment] = useState<'left' | 'right'>('left');
  const [buttonWidth, setButtonWidth] = useState<number>(0);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (currentFilters && showSubFilters) {
      const initialFilters: Record<string, string[]> = {};
      Object.entries(subFilters).forEach(([filterName, filterData]) => {
        const currentValue = currentFilters[filterData.mappingKey];
        if (currentValue) {
          const values = currentValue.split(',')
            .map(value => {
              const entry = Object.entries(filterMappings[filterData.mappingKey])
                .find(([_, v]) => v === value.trim());
              return entry ? entry[0] : '';
            })
            .filter(Boolean);
          initialFilters[filterData.mappingKey] = values.length ? values : ['ทั้งหมด'];
        } else {
          initialFilters[filterData.mappingKey] = ['ทั้งหมด'];
        }
      });
      setSelectedSubFilters(initialFilters);
      setTempSubFilters(initialFilters);
    }
  }, [currentFilters, showSubFilters, subFilters, filterMappings]);

  const handleCheckboxChange = (item: string) => {
    let newFilters: string[];
    
    if (item === "ทั้งหมด") {
        newFilters = selectedFilters.includes("ทั้งหมด") ? [] : ["ทั้งหมด"];
    } else {
        if (selectedFilters.includes("ทั้งหมด")) {
            newFilters = [item];
        } else {
            newFilters = selectedFilters.includes(item)
                ? selectedFilters.filter(filter => filter !== item)
                : [...selectedFilters, item];
        }
    }
    if (newFilters.length === 0) {
        newFilters = ["ทั้งหมด"];
    }

    setSelectedFilters(newFilters);
    onSelectFilter(buttonName === "กรองประเภทรีวิว" ? "survey_type" : buttonName ===  "กรองเรตติ้ง" ? "rating" : buttonName ===  "ผลตรวจ" ? "testResult" : buttonName ===  "หมวดหมู่" ? "topic" : "adminResult" , newFilters);
  };

  const handleItemClick = (item: string) => {
    if (isCheckboxDropdown) {
      handleCheckboxChange(item);
    } else {
      const newFilters = [item];
      setSelectedFilters(newFilters);
      // Convert "ทั้งหมด" to empty string for non-checkbox filters
      const valueToSend = item === "ทั้งหมด" ? [""] : newFilters;
      onSelectFilter(
        buttonName === "กรองประเภทรีวิว" ? "survey_type" : 
        buttonName === "กรองเรตติ้ง" ? "rating" : 
        buttonName === "ผลตรวจ" ? "testResult" : 
        buttonName === "ติดตามผล" ? "medType" : 
        buttonName === "หมวดหมู่" ? "topic" :
        "adminResult", 
        valueToSend
      );
      setIsDropdownOpen(false);
    }
  };

  const handleMainFilterClick = (filterName: string) => {
    setSelectedMainFilter(filterName === selectedMainFilter ? "" : filterName);
  };

  const handleSubFilterChange = (mainFilter: string, subFilterValue: string) => {
    const subFilter = subFilters[mainFilter];
    
    if (!subFilter.isMultiSelect) {
      // For single-select filters like medType
      setTempSubFilters(prev => ({
        ...prev,
        [subFilter.mappingKey]: [subFilterValue]
      }));
      return;
    }
  
    // For multi-select filters
    const currentValues = [...(tempSubFilters[subFilter.mappingKey] || [])];
    let newValues: string[];
  
    if (subFilterValue === "ทั้งหมด") {
      newValues = currentValues.includes("ทั้งหมด") ? [] : ["ทั้งหมด"];
    } else {
      if (currentValues.includes("ทั้งหมด")) {
        newValues = [subFilterValue];
      } else {
        const valueIndex = currentValues.indexOf(subFilterValue);
        if (valueIndex === -1) {
          newValues = [...currentValues, subFilterValue];
        } else {
          currentValues.splice(valueIndex, 1);
          newValues = currentValues;
        }
      }
    }
  
    if (newValues.length === 0) {
      newValues = ["ทั้งหมด"];
    }
  
    setTempSubFilters(prev => ({
      ...prev,
      [subFilter.mappingKey]: newValues
    }));
  };

  const handleApplyFilters = () => {
    setSelectedSubFilters(tempSubFilters);
    Object.entries(tempSubFilters).forEach(([mappingKey, values]) => {
      if (onSubFilterChange) {
        const filteredValues = values.filter(v => v !== "ทั้งหมด");
        onSubFilterChange(mappingKey, filteredValues.length ? filteredValues : ["ทั้งหมด"]);
      }
    });
    setIsDropdownOpen(false);
  };

  const handleClearAllFilters = () => {
    const resetFilters: Record<string, string[]> = {};
    Object.entries(subFilters).forEach(([_, filterData]) => {
      resetFilters[filterData.mappingKey] = ['ทั้งหมด'];
    });
    setSelectedSubFilters(resetFilters);
    setTempSubFilters(resetFilters);
    Object.keys(resetFilters).forEach(key => {
      if (onSubFilterChange) {
        onSubFilterChange(key, ['ทั้งหมด']);
      }
    });
  };

  const getActiveFilterCount = () => {
    if (!isCheckboxDropdown && !showSubFilters) return 0;
    
    if (showSubFilters) {
      return Object.values(selectedSubFilters).reduce((count, filters) => 
        count + (filters?.filter(f => f !== "ทั้งหมด").length || 0), 0);
    }
    return selectedFilters.filter(f => f !== "ทั้งหมด").length;
  };

  const renderActiveFilters = () => {
    if (!showSubFilters) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {Object.entries(selectedSubFilters).map(([key, values]) => 
          values?.filter(v => v !== "ทั้งหมด").map(value => (
            <span key={`${key}-${value}`} 
              className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
              {value}
              <button
                onClick={() => handleRemoveFilter(key, value)}
                className="hover:text-blue-900"
              >
                ✕
              </button>
            </span>
          ))
        )}
      </div>
    );
  };

  const handleRemoveFilter = (key: string, value: string) => {
    const newValues = selectedSubFilters[key]?.filter(v => v !== value) || [];
    if (newValues.length === 0) newValues.push("ทั้งหมด");
    
    setSelectedSubFilters(prev => ({
      ...prev,
      [key]: newValues
    }));
    
    if (onSubFilterChange) {
      onSubFilterChange(key, newValues);
    }
  };

  useEffect(() => {
    const checkAlignment = () => {
      if (!buttonRef.current) return;

      const buttonRect = buttonRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      const spaceOnRight = windowWidth - buttonRect.right;
      const spaceOnLeft = buttonRect.left;

      setDropdownAlignment(spaceOnRight > spaceOnLeft ? 'left' : 'right');
    };

    const setInitialButtonWidth = () => {
      if (buttonRef.current) {
        setButtonWidth(buttonRef.current.getBoundingClientRect().width);
      }
    };

    if (isDropdownOpen) {
      checkAlignment();
      setInitialButtonWidth();
      window.addEventListener('resize', checkAlignment);
      window.addEventListener('resize', setInitialButtonWidth);
    } else {
      window.removeEventListener('resize', checkAlignment);
      window.removeEventListener('resize', setInitialButtonWidth);
    }

    return () => {
      window.removeEventListener('resize', checkAlignment);
      window.removeEventListener('resize', setInitialButtonWidth);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative w-full md:w-[200px]">
      <div className="flex gap-2">
        <button
          ref={buttonRef}
          onClick={toggleDropdown}
          title={tooltip} // Add simple tooltip
          data-tooltip-target={tooltip ? "tooltip-default" : undefined}
          className="w-full inline-flex justify-between items-center px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none group"
        >
          <div className="flex items-center gap-2">
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="21" x2="14" y1="4" y2="4" />
            <line x1="10" x2="3" y1="4" y2="4" />
            <line x1="21" x2="12" y1="12" y2="12" />
            <line x1="8" x2="3" y1="12" y2="12" />
            <line x1="21" x2="16" y1="20" y2="20" />
            <line x1="12" x2="3" y1="20" y2="20" />
            <line x1="14" x2="14" y1="2" y2="6" />
            <line x1="8" x2="8" y1="10" y2="14" />
            <line x1="16" x2="16" y1="18" y2="22" />
          </svg>
            <span>{buttonName}</span>
          </div>
          {(isCheckboxDropdown || showSubFilters) && getActiveFilterCount() > 0 && (
            <span className="ml-2 font-medium text-[10px] py-0.5 px-[5px] bg-gray-800 text-white leading-3 rounded-full dark:bg-neutral-500">
              {getActiveFilterCount()}
            </span>
          )}
        </button>
      </div>

      {/* Custom Tooltip */}
      {tooltip && (
        <div
          className="absolute z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-sm rounded-lg py-2 px-3 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2"
          style={{ whiteSpace: 'nowrap' }}
        >
          {tooltip}
          <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0"></div>
        </div>
      )}

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className={`absolute ${dropdownAlignment === 'left' ? 'left-0' : 'right-0'} md:left-auto md:right-0 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50`}
          style={{ 
            top: 'calc(100% + 4px)',
            maxHeight: '80vh',
            overflowY: 'auto',
            minWidth: `${buttonWidth}px`,
            width: 'max-content',
          }}
        >
          <div className="p-3">
            {showSubFilters ? (
              <>
                {Object.entries(subFilters).map(([filterName, filterData]) => (
                  <div key={filterName} className="mb-3">
                    <button
                      onClick={() => handleMainFilterClick(filterName)}
                      className="w-full flex justify-between items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>{filterName}</span>
                      <svg className={`w-4 h-4 transition-transform ${selectedMainFilter === filterName ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {selectedMainFilter === filterName && (
                      <div className="mt-2 pl-2 space-y-1 border-l-2 border-gray-100">
                        {filterData.options.map((option) => (
                          <label key={option} className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                            <input
                              type={filterData.isMultiSelect ? "checkbox" : "radio"}
                              checked={tempSubFilters[filterData.mappingKey]?.includes(option) || false}
                              onChange={() => handleSubFilterChange(filterName, option)}
                              className={`w-4 h-4 text-blue-600 border-gray-300 ${filterData.isMultiSelect ? 'rounded' : 'rounded-full'} focus:ring-blue-500`}
                              name={filterData.mappingKey}
                            />
                            <span className="ml-3 text-sm text-gray-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 mt-3 border-t border-gray-200 flex gap-2">
                  {getActiveFilterCount() > 0 && (
                    <button
                      onClick={handleClearAllFilters}
                      className="w-1/3 px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-md hover:bg-blue-50 focus:outline-none"
                    >
                      รีเซ็ต
                    </button>
                  )}
                  <button
                    onClick={handleApplyFilters}
                    className={`px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${getActiveFilterCount() > 0 ? 'w-2/3' : 'w-full'}`}
                  >
                    นำไปใช้
                  </button>
                </div>
              </>
            ) : (
              <div className="p-1">
                {filterOptions.map((item) => {
                  const isSelected = selectedFilters.includes(item);
                  return (
                    <div key={item} className="mb-1">
                      <label 
                        className={`flex items-center p-2 rounded-md cursor-pointer transition-colors
                          `}
                      >
                        <input
                          type={isCheckboxDropdown ? "checkbox" : "radio"}
                          checked={isSelected}
                          onChange={() => handleItemClick(item)}
                          className={`w-4 h-4 text-blue-600 border-gray-300 
                            ${isCheckboxDropdown ? 'rounded' : 'rounded-full'} 
                            focus:ring-blue-500`}
                          name="filterOption"
                        />
                        <span className={`text-start ml-3 text-sm ${isSelected && !isCheckboxDropdown ? 'text-blue-700 font-medium' : 'text-gray-700'}`}>
                          {item}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;