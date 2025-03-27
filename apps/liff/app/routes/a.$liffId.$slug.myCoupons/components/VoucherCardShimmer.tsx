import React from "react";

const VoucherCardShimmer: React.FC = () => {
  return (
    <div className="p-4 space-y-2">
      {[...Array(3)].map((_, index) => (
        <div key={`shimmer-${index}`} className="space-y-2">
          <div className="w-full animate-pulse relative">
            <div className="flex w-full border rounded-lg overflow-hidden bg-gray-200">
              <div className="flex-1 bg-white rounded-l-lg">
                <div className="flex">
                  <div className="w-24 h-24 bg-gray-300 mr-3"></div>
                  <div className="py-3 flex flex-1 flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              <div className="w-20 bg-gray-400 border-l-2 border-white border-dotted flex items-center justify-center">
                <div className="transform -rotate-90">
                  <div className="text-center space-y-2 overflow-hidden">
                    {/* <p className="text-xs">COUPON</p> */}
                    <div className="h-6 w-20 bg-gray-300 rounded"></div>
                    <div className="w-7 h-7 mx-auto flex justify-center items-center rounded-full object-cover bg-gray-300"></div>
                    {/* <QrCode className="h-6 w-6 mx-auto mt-1" /> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Perforation effect */}
            <div className="absolute left-0 top-0 h-full">
              {[...Array(10)].map((_, i) => (
                <div
                  key={`left-perf-${i}`}
                  className="absolute w-2 h-2 bg-gray-50 border-r border-gray-400 rounded-full -translate-x-1"
                  style={{ top: `${(i * 100) / 10}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VoucherCardShimmer;
