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
    <div className="w-full mx-auto bg-white min-h-screen">
      {/* Landscape Header */}
      <div 
        className="relative bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 p-6 lg:p-10 mb-6 shadow-lg flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-5 left-5 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-yellow-300"></div>
          <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-blue-300"></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-purple-300"></div>
        </div>
        
        <div className="relative text-white mb-8 z-10">
          <h2 className="text-5xl font-bold mb-3 text-shadow-sm">AIYA CLUB</h2>
          <p className="text-xl font-light mb-4">Discover great deals</p>
          <h1 className="text-2xl font-semibold mt-4 px-4 py-2 bg-white/10 inline-block rounded-lg backdrop-blur-sm">
            Welcome to Our Voucher Collection
          </h1>
        </div>
        
        <div className="relative flex items-center bg-white rounded-full px-5 py-3 w-full max-w-md shadow-xl z-10">
          <span className="text-blue-500 mr-2">🔍</span>
          <input 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const search = (e.target as HTMLInputElement).value;
                
                if (search && search.trim().length > 0) {
                  onsearch && onsearch(search);
                }
              }
            }}
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
