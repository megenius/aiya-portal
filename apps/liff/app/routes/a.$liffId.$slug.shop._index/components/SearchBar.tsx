import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="p-4">
      <div className="relative">
        {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> */}
        <input
          type="text"
          placeholder="ค้นหาคูปอง ร้านค้า..."
          className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-xl"
        />
      </div>
    </div>
  );
}
