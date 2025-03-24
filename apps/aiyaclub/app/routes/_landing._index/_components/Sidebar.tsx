import React, { useState } from "react";

interface User {
  name: string;
  points: number;
  vouchersCollected: number;
  vouchersUsed: number;
}

interface SidebarProps {
  user: User;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All", icon: "🏠" },
    { id: "food", name: "Food", icon: "🍜" },
    { id: "beverage", name: "Beverage", icon: "🍹" },
    { id: "technology", name: "Technology", icon: "💻" },
    { id: "beauty", name: "Beauty", icon: "💄" },
    { id: "entertainment", name: "Entertainment", icon: "🎭" },
  ];
  
  return (
    <div className="hidden lg:flex flex-col bg-white rounded-2xl p-5 shadow-sm sticky top-5 max-h-[calc(100vh-40px)] overflow-y-auto">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-xl font-semibold text-blue-600">
          {user.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-lg font-semibold">Hello, {user.name}</h2>
          <p className="text-sm text-gray-500">Let's see the vouchers</p>
        </div>
      </div>
      
      {/* Points Button */}
      <button className="flex items-center justify-center w-full bg-white border border-gray-200 rounded-full py-2 px-4 text-sm font-medium cursor-pointer mb-6 hover:bg-gray-50">
        <span className="text-blue-500 mr-2">score</span> {user.points} ★
      </button>
      
      {/* My Vouchers Card */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-5 text-white mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3">
              🎟️
            </div>
            <div>
              <h3 className="text-xl font-medium">{user.vouchersCollected}</h3>
              <p className="text-sm opacity-90">Vouchers collected</p>
            </div>
          </div>
          <a href="#" className="text-sm font-medium hover:underline">View All</a>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Available</span>
            <span className="text-sm">{user.vouchersCollected - user.vouchersUsed}</span>
          </div>
          <div className="h-1 bg-white/30 rounded-full mb-1 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-white rounded-full" 
              style={{ width: user.vouchersCollected > 0 ? `${(user.vouchersUsed / user.vouchersCollected) * 100}%` : '0%' }}
            ></div>
          </div>
          <div className="flex justify-between text-xs">
            <span>Used: {user.vouchersUsed}</span>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="flex-1 flex flex-col gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition ${
              activeCategory === category.id 
                ? 'bg-blue-50 text-blue-500' 
                : 'hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl mr-3 ${
              activeCategory === category.id 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100'
            }`}>
              {/* {category.icon} */}
            </div>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
