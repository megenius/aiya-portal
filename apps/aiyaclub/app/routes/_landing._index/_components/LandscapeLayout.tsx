import React from "react";

interface LandscapeLayoutProps {
  children: React.ReactNode;
  user?: {
    name?: string;
    points?: number;
    vouchersCollected?: number;
    vouchersUsed?: number;
  };
  onsearch?: (search: string) => void;
}

const LandscapeLayout: React.FC<LandscapeLayoutProps> = ({ children, user, onsearch }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Landscape Header */}
      <div 
        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 lg:p-8 mb-6 shadow-md flex flex-col items-center justify-center text-center"
      >
        <div className="text-white mb-6">
          <h2 className="text-4xl font-bold mb-2">AIYA CLUB</h2>
          <p className="text-lg">Discover great deals</p>
          <h1 className="text-2xl font-semibold mt-4">Welcome to Our Voucher Collection</h1>
        </div>
        
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-md">
          <span className="text-gray-400 mr-2">🔍</span>
          <input 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const search = (e.target as HTMLInputElement).value;
                
                if (search && search.trim().length > 0) {
                  onsearch && onsearch(search);
                }
              }
            } }
            type="text" 
            placeholder="Find Voucher, Shop..." 
            className="bg-transparent border-none w-full focus:outline-none focus:ring-0 active:outline-none active:border-none text-gray-700"
          />
        </div>
      </div>
      
      {/* Main Content */}
      {children}
    </div>
  );
};

export default LandscapeLayout;
