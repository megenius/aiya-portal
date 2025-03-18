import React from "react";
import { Category } from "~/types/page";

interface CategoryListProps {
  language: string;
  categories: Category[];
  selected: string;
  onSelect: (id: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  language,
  categories,
  selected,
  onSelect,
}) => {
  const allCategoryId = "all";
  const allText = {
    th: "ทั้งหมด",
    en: "All",
  };

  return (
    <div
      className="px-4 flex overflow-x-auto whitespace-nowrap"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* All category button */}

      <div className="flex gap-3">
        <button
          onClick={() => onSelect(allCategoryId)}
          className={`flex-none flex flex-col items-center gap-2`}
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors border-4 ${
              allCategoryId === selected ? "border-primary" : "border-white"
            }`}
          >
            <span className="text-2xl">🏠</span>
          </div>
          <span
            className={`text-xs text-gray-700 ${
              allCategoryId === selected ? "font-bold" : "font-normal"
            }`}
          >
            {allText[language]}
          </span>
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={`flex-none flex flex-col items-center gap-2`}
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors border-4 ${
                category.id === selected ? "border-primary" : "border-white"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
            </div>
            <h4
              className={`text-xs text-gray-700 ${
                category.id === selected ? "font-bold" : "font-normal"
              }`}
            >
              {category.name[language]}
            </h4>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
