import React from "react";
import { DynamicIcon, IconName } from "~/components/DynamicIcon";
import { Category } from "~/types/app";

interface CategoryListProps {
  language: string;
  categories: Category[];
  selected: Category | null;
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
      role="tablist"
      aria-label={language === "th" ? "หมวดหมู่สินค้า" : "Product categories"}
    >
      {/* All category button */}
      {/* Left/Right fade to hint scrollable area */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent" />

      <div className="flex gap-3">
        {categories.map((category, index) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={category.id === selected?.id}
            aria-controls={`category-panel-${category.id}`}
            aria-label={`${language === "th" ? "เลือกหมวดหมู่" : "Select category"} ${category.name[language as keyof typeof category.name]}`}
            tabIndex={category.id === selected?.id ? 0 : -1}
            title={category.name[language as keyof typeof category.name]}
            onClick={() => onSelect(category)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" && index < categories.length - 1) {
                const nextButton = e.currentTarget.parentElement?.children[
                  index + 1
                ] as HTMLButtonElement;
                nextButton?.focus();
              } else if (e.key === "ArrowLeft" && index > 0) {
                const prevButton = e.currentTarget.parentElement?.children[
                  index - 1
                ] as HTMLButtonElement;
                prevButton?.focus();
              } else if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(category);
              }
            }}
            className={`flex w-16 flex-none snap-start flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2`}
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white transition-all duration-200 ease-out ${
                category.id === selected?.id
                  ? "scale-105 shadow-md"
                  : "shadow-sm hover:-translate-y-0.5 hover:shadow-md"
              }`}
              style={{
                borderColor:
                  category.id === selected?.id
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
              className={`mt-1 text-center text-balance text-[11px] leading-tight text-gray-700 ${
                category.id === selected?.id ? "font-semibold" : "font-normal"
              }`}
            >
              {category.name[language as keyof typeof category.name]}
            </h4>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
