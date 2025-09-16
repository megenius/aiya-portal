import React from "react";
import { DynamicIcon, IconName } from "~/components/DynamicIcon";
import { Category } from "~/types/app";

interface CategoryListProps {
  language: string;
  categories: Category[];
  selected: Category;
  primaryColor?: string;
  onSelect: (category: Category) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  language,
  categories,
  selected,
  primaryColor,
  onSelect,
}) => {
  return (
    <div
      className="relative flex snap-x snap-mandatory overflow-x-auto overflow-y-visible whitespace-nowrap px-4 pt-2"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* All category button */}
      {/* Left/Right fade to hint scrollable area */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent" />

      <div className="flex gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-pressed={category.id === selected.id}
            title={category.name[language]}
            onClick={() => onSelect(category)}
            className={`flex flex-none snap-start flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2`}
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white transition-all duration-200 ease-out ${
                category.id === selected.id
                  ? "scale-105 shadow-md"
                  : "shadow-sm hover:-translate-y-0.5 hover:shadow-md"
              }`}
              style={{
                borderColor:
                  category.id === selected.id
                    ? (category.color ?? primaryColor)
                    : undefined,
              }}
            >
              <DynamicIcon
                name={category.icon_name as IconName}
                color={category.color ?? primaryColor}
                size={22}
                strokeWidth={1.75}
              />
            </div>
            <h4
              className={`mt-1 max-w-20 truncate text-[11px] text-gray-700 ${
                category.id === selected.id ? "font-semibold" : "font-normal"
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
