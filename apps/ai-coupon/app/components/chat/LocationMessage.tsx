import React from "react";

interface LocationMessageProps {
  latitude: number;
  longitude: number;
  locationName?: string;
  address?: string;
  timestamp: string;
  isOwn: boolean;
  staticMapUrl?: string;
  status?: "sent" | "delivered" | "read";
}

const LocationMessage: React.FC<LocationMessageProps> = ({ 
  latitude, 
  longitude, 
  locationName,
  address,
  timestamp, 
  isOwn,
  staticMapUrl,
  status = "sent" 
}) => {
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  const googleMapsLink = `https://maps.google.com/?q=${latitude},${longitude}`;
  
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`max-w-[75%] rounded-2xl overflow-hidden ${
        isOwn 
          ? 'bg-blue-600 text-white rounded-br-none' 
          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-bl-none'
      }`}>
        <a 
          href={googleMapsLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative h-40 w-full">
            {staticMapUrl ? (
              <img 
                src={staticMapUrl} 
                alt="Location map" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            
            <div className="absolute top-2 right-2">
              <div className={`rounded-full p-1 ${
                isOwn ? 'bg-blue-700' : 'bg-white dark:bg-gray-800'
              }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  {locationName && <p className="font-medium text-white">{locationName}</p>}
                  {address && <p className="text-xs text-white/80">{address}</p>}
                  <p className="text-xs text-white/80 mt-0.5">
                    {latitude.toFixed(6)}, {longitude.toFixed(6)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
        
        <div className={`text-xs px-3 py-2 flex items-center gap-1 ${
          isOwn ? 'text-blue-200' : 'text-gray-500'
        }`}>
          <span>{timestamp}</span>
          {isOwn && (
            <span>
              {status === "read" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022z"/>
                </svg>
              )}
              {status === "delivered" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                </svg>
              )}
              {status === "sent" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationMessage;
