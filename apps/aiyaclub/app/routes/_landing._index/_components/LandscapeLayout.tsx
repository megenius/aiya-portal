import React from "react";
import Sidebar from "./Sidebar";

interface User {
  name: string;
  points: number;
  vouchersCollected: number;
  vouchersUsed: number;
}

interface LandscapeLayoutProps {
  children: React.ReactNode;
  user: User;
}

const LandscapeLayout: React.FC<LandscapeLayoutProps> = ({ children, user }) => {
  return (
    <div className="container max-w-[1200px] mx-auto p-5 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-5">
      {/* Sidebar */}
      <Sidebar user={user} />
      
      {/* Main Content */}
      <div className="main-content flex flex-col gap-6">
        <div className="search-bar flex items-center bg-white rounded-full p-3 shadow-sm">
          <span className="search-icon text-gray-400 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </span>
          <input 
            type="text" 
            placeholder="Find Voucher, Shop..." 
            className="search-input flex-1 border-none bg-transparent outline-none text-gray-700"
          />
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default LandscapeLayout;
