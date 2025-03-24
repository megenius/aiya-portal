import { ca } from "date-fns/locale";
import { Category } from "~/types/page";

interface Props {
  language: string;
  categories: Category[];
  selected: string;
  onSelect: (id: string) => void;
}

export function CategoryList({ language, categories, selected, onSelect }: Props) {
  const allCategoryId = "all";
  const allText = {
    th: "ทั้งหมด",
    en: "All",
  };
  
  return (
    <div
      className="flex overflow-x-auto pb-2 gap-3"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* All category button */}
      <button
        onClick={() => onSelect(allCategoryId)}
        className={`p-3 max-w-16 flex flex-col items-center gap-2 rounded-2xl shadow-sm border border-gray-100 transition ${
          allCategoryId === selected ? "bg-primary" : "bg-white"
        }`}
      >
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center ${
            allCategoryId === selected ? "bg-white" : "bg-gray-100"
          }`}
        >
          <span className="text-base">🏠</span>
        </div>
        <span
          className={`text-xs font-medium ${
            allCategoryId === selected ? "text-white" : "text-gray-700"
          }`}
        >
          {allText[language]}
        </span>
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`p-3 max-w-16 flex flex-col items-center gap-2 rounded-2xl shadow-sm border border-gray-100 transition ${
            category.id === selected ? "bg-primary" : "bg-white"
          }`}
        >
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              category.id === selected ? "bg-white" : "bg-gray-100"
            }`}
          >
            <span className="text-base">{category.icon}</span>
          </div>
          <span
            className={`text-xs font-medium ${
              category.id === selected ? "text-white" : "text-gray-700"
            }`}
          >
            {category.name[language]}
          </span>
        </button>
      ))}
    </div>
  );
}
