import { Category } from "~/types/page";

interface Props {
  isThaiLanguage: boolean;
  categories: Category[];
  selected: string;
  onSelect: (id: string) => void;
}

export function CategoryList({ isThaiLanguage, categories, selected, onSelect }: Props) {
  return (
    <div
      className="flex overflow-x-auto px-4 py-3 gap-3"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`p-3 flex flex-col items-center gap-2 rounded-full shadow-sm border border-gray-50 ${
            category.id === selected ? "bg-indigo-600" : "bg-white"
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
            {isThaiLanguage ? category.nameTH : category.nameEN}
          </span>
        </button>
      ))}
    </div>
  );
}
