import { memo } from "react";
import { Category } from "~/@types/page.type";

interface Props {
  language: string;
  categories: Category[];
  selected: string;
  onSelect: (id: string) => void;
}


export const CategoryList = memo(function CategoryList({ 
  language, 
  categories, 
  selected, 
  onSelect 
}: Props) {
  const allCategoryId = "all";
  const allText = {
    th: "ทั้งหมด",
    en: "All",
  };
  
  return (
    <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar px-2 mb-2">
      <CategoryItem 
        id={allCategoryId}
        icon="🏠"
        name={allText[language as keyof typeof allText] || allText.en}
        isSelected={allCategoryId === selected}
        onSelect={onSelect}
      />
      
      {categories?.map((category) => (
        <CategoryItem
          key={category.id}
          id={category.id}
          icon={category.icon}
          name={category.name[language as keyof typeof category.name] || category.name.en}
          isSelected={category.id === selected}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
});

interface CategoryItemProps {
  id: string;
  icon: string;
  name: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

// Also memoize the CategoryItem for performance
const CategoryItem = memo(function CategoryItem({ 
  id, 
  icon, 
  name, 
  isSelected, 
  onSelect 
}: CategoryItemProps) {
  return (
    <div className="flex flex-col items-center min-w-[70px]">
      <button
        onClick={() => onSelect(id)}
        className={`w-14 h-14 rounded-full flex items-center justify-center mb-1.5 shadow-sm ${
          isSelected 
            ? "bg-white border-2 border-primary"
            : "bg-white text-gray-700 border border-gray-100"
        }`}
        aria-label={`Select ${name} category`}
      >
        <span className="text-2xl">{icon}</span>
      </button>
      <span className={`text-xs font-medium text-center w-full px-1 truncate ${
        isSelected ? "text-primary font-semibold" : "text-gray-600"
      }`}>
        {name}
      </span>
    </div>
  );
});
