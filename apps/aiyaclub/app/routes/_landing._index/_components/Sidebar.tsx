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
    <div className="sidebar bg-white rounded-xl p-5 shadow-sm h-[calc(100vh-40px)] sticky top-5 flex flex-col hidden lg:flex">
      {/* Profile Header */}
      <div className="profile-header flex items-center gap-4 mb-6">
        <div className="avatar w-15 h-15 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
          {user.name.charAt(0)}
        </div>
        <div className="user-info">
          <h2 className="text-lg font-semibold">Hello, {user.name}</h2>
          <p className="text-sm text-gray-500">Let's see the vouchers</p>
        </div>
      </div>
      
      {/* Points Button */}
      <button className="points-button flex items-center justify-center w-full bg-white border border-gray-200 rounded-full py-2 px-4 text-sm font-medium cursor-pointer mb-6">
        <span className="text-blue-500 mr-2">แต้มสะสม</span> {user.points} ★
      </button>
      
      {/* My Vouchers Card */}
      <div className="my-vouchers bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-5 text-white mb-6">
        <div className="my-vouchers-header flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="voucher-icon bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-3">
              🎟️
            </div>
            <div>
              <h3 className="text-xl font-medium">{user.vouchersCollected}</h3>
              <p className="text-sm opacity-90">Vouchers collected</p>
            </div>
          </div>
          <a href="#" className="text-sm font-medium">View All</a>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Available</span>
            <span className="text-sm">{user.vouchersCollected - user.vouchersUsed}</span>
          </div>
          <div className="status-bar h-1 bg-white bg-opacity-30 rounded-full mb-1 relative overflow-hidden">
            <div 
              className="status-progress absolute top-0 left-0 h-full bg-white rounded-full" 
              style={{ width: user.vouchersCollected > 0 ? `${(user.vouchersUsed / user.vouchersCollected) * 100}%` : '0%' }}
            ></div>
          </div>
          <div className="status-details flex justify-between text-xs">
            <span>Used: {user.vouchersUsed}</span>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="categories-sidebar flex-1 flex flex-col gap-3">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-item flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
              activeCategory === category.id 
                ? 'bg-blue-50 text-blue-500' 
                : 'hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <div className={`category-icon w-10 h-10 rounded-full flex items-center justify-center text-xl mr-3 ${
              activeCategory === category.id 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100'
            }`}>
              {category.icon}
            </div>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
