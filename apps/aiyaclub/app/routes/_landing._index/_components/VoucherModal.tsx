import React, { useEffect, useState } from "react";
import { FieldData, Voucher, VoucherStats } from "~/@types/app.type";
import { getDirectusFileUrl } from "~/utils/files";
import Tabs from "../../../components/Tabs";


interface VoucherModalProps {
  voucher: Voucher;
  isOpen: boolean;
  onClose: () => void;
  codeStats?: VoucherStats;
  language?: string;
  pageState?: string;
  onFormValidationChange?: (isValid: boolean) => void;
  onFormDataChange?: (formData: FieldData[]) => void;
}

const VoucherModal: React.FC<VoucherModalProps> = ({ 
  voucher, 
  isOpen, 
  onClose,
  codeStats,
  language = "en",
  pageState = "landing",
  onFormValidationChange,
  onFormDataChange
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const [activeTab, setActiveTab] = useState("details");
  const [formData, setFormData] = useState<FieldData[]>([]);

  // Handle form field changes
  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => {
      const existingFieldIndex = prev.findIndex((field) => field.name === name);
      if (existingFieldIndex >= 0) {
        // Update existing field
        const updatedFields = [...prev];
        updatedFields[existingFieldIndex] = { name, value };
        return updatedFields;
      } else {
        // Add new field
        return [...prev, { name, value }];
      }
    });
  };

  // Validate form fields when formData changes
  useEffect(() => {
    if (pageState === "form" && onFormValidationChange) {
      const requiredFields = voucher?.metadata?.form?.fields
        .filter(field => field.required)
        .map(field => ({ name: field.name, type: field.type }));
      
      const isValid = requiredFields?.every(field => {
        const fieldData = formData.find(data => data.name === field.name);
        const value = fieldData?.value;
        
        // For telephone fields, require exactly 10 digits
        if (field.type === 'tel') {
          return value !== undefined && value.length === 10;
        }
        
        // For other field types, just check if they're non-empty
        return value !== undefined && value.trim() !== '';
      }) ?? true;
      
      onFormValidationChange(isValid);
    }
    
    // Send form data to parent component when it changes
    if (onFormDataChange) {
      onFormDataChange(formData);
    }
  }, [formData, pageState, voucher?.metadata?.form, onFormValidationChange, onFormDataChange]);

  if (!isOpen) return null;
  
  const title = pageState === "landing" 
    ? (voucher.metadata?.title?.["en"] || "Unnamed Voucher")
    : (voucher.metadata?.title?.en || "Unnamed Voucher");
    
  const description = pageState === "landing"
    ? (voucher.metadata?.description?.["en"]?.replace(/\\n/g, "\n") || "No description available")
    : (voucher.metadata?.description?.en || "No description available");
    
  const condition = voucher.metadata?.condition?.["en"]?.replace(/\\n/g, "\n") || "";
  
  const navigateToLineLiff = () => {
    window.location.href = `https://liff.aiya.me/a/1660709265-AGO88yJB/shop/voucher/${voucher.id}`;
  };

  const tabs = [
    {
      id: "details",
      label: {
        th: "รายละเอียด",
        en: "Details",
      },
    },
    {
      id: "conditions",
      label: {
        th: "เงื่อนไข",
        en: "Conditions",
      },
    },
  ];
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden shadow-xl animate-fadeIn"
        style={{
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          animation: "fadeIn 0.3s ease-out forwards, slideUp 0.3s ease-out forwards"
        }}
      >
        {/* Close button */}
        <div className="absolute right-4 top-4 z-10">
          <button 
            onClick={onClose}
            className="bg-white/70 backdrop-blur-sm rounded-full p-2 text-gray-700 hover:text-gray-900 hover:bg-white/90 transition-all duration-200"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Voucher Image */}
        <div className="h-56 relative">
          {voucher.cover ? (
            <img 
              src={getDirectusFileUrl(voucher.cover as string)}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
              <span className="text-white text-xl font-semibold px-4 text-center">
                {title}
              </span>
            </div>
          )}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div> */}
        </div>
        
        {/* Content Area */}
        <div className="flex flex-col overflow-hidden" style={{ maxHeight: 'calc(90vh - 224px)' }}>
          {/* Title Section */}
          <div className="p-4 pb-2">
            {/* Brand */}
            <div className="flex items-center mb-2">
              <div className="w-14 h-14 rounded-full overflow-hidden mr-4 bg-gray-100 border-2 border-white shadow-md flex items-center justify-center">
                {voucher?.voucher_brand_id?.logo ? (
                  <img 
                    src={getDirectusFileUrl(voucher?.voucher_brand_id?.logo as string)}
                    alt={voucher?.voucher_brand_id?.name || ""}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 font-bold text-xl">
                    {(voucher?.voucher_brand_id?.name || "").charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {voucher?.voucher_brand_id?.name}
                </h3>
                <div className="text-sm text-gray-500">Exclusive Offer</div>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-1">{title}</h2>
          </div>
          
          {/* Main Content Area */}
          {pageState === "landing" && (
            <div className="flex-1 flex flex-col overflow-hidden">
              
              <div className="mt-3 flex-1 flex flex-col overflow-hidden">
                <div className="border-b-0"> {/* Added wrapper with border-b-0 to override any default border */}
                  <Tabs
                    language={language}
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    primaryColor={""}
                  />
                </div>

                <div className="p-4 text-gray-700 overflow-y-auto flex-1">
                  {activeTab === "details" && (
                    <p className="whitespace-pre-wrap">
                      {description}
                    </p>
                  )}
                  {activeTab === "conditions" && (
                    <p className="whitespace-pre-wrap">{condition}</p>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* {pageState === "form" && (
            <form className="p-4 space-y-4 flex-1 overflow-y-auto">
              {voucher?.metadata?.form?.fields.map((field, index) => (
                <FormField
                  key={index}
                  label={field.label["en"]}
                  type={field.type}
                  required={field.required}
                  primaryColor={voucher?. || ""}
                  value={formData.find(data => data.name === field.name)?.value || ""}
                  onChange={(value) => handleFieldChange(field.name, value)}
                  name={field.name}
                />
              ))}
            </form>
          )} */}
          
          {pageState === "landing" && (
            <div className="p-4 pt-2 mt-auto">
              {/* Collect Button */}
              <button
                onClick={navigateToLineLiff}
                className="w-full bg-gradient-to-r from-[#06c755] to-[#04ad4c] hover:from-[#05b34c] hover:to-[#049340] text-white font-medium py-3.5 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M19.952 12.003c0-3.863-3.873-7.009-8.637-7.009-4.764 0-8.637 3.146-8.637 7.009 0 3.467 3.074 6.372 7.23 6.923.282.061.666.187.762.429.088.22.057.563.028.786 0 0-.114.682-.138.827-.042.244-.194.954.835.52.1.029 4.15-2.441 5.664-4.178 1.043-1.144 1.893-2.31 1.893-4.307z"/>
                </svg>
                Collect on LINE
              </button>
            </div>
          )}
        </div>

        {/* Add CSS for animations */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px); }
            to { transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default VoucherModal;
