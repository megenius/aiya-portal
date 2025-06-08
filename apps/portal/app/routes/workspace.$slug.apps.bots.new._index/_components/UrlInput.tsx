import { Globe, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useCallback } from "react";

interface UrlInputProps {
    value: string;
    onChange: (value: string, isValid: boolean) => void;
    placeholder?: string;
    label?: string;
    className?: string;
    required?: boolean;
    disabled?: boolean;
}

export const HttpsUrlInput = ({ 
    value = '', 
    onChange, 
    placeholder = 'example.com/path',
    label,
    className = '',
    required = false,
    disabled = false 
  }: UrlInputProps) => {
    const [inputValue, setInputValue] = useState(value);
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [errorMessage, setErrorMessage] = useState('');
  
    // ตรวจสอบความถูกต้องของ domain/URL
    const validateUrl = useCallback((input: string) => {
      if (!input.trim()) {
        setIsValid(null);
        setErrorMessage('');
        return '';
      }
  
      // ตัด protocol ออกก่อน
      const cleanInput = input.trim().replace(/^https?:\/\//, '');
      
      // ตัด www. ออก (optional - ขึ้นกับความต้องการ)
      // cleanInput = cleanInput.replace(/^www\./, '');
  
      // Basic domain validation - allow domain with optional path and trailing slash
      const domainPattern = /^[a-zA-Z0-9][a-zA-Z0-9-_.]*[a-zA-Z0-9]*(\.[a-zA-Z]{2,})(\/.*|\/?)?$/;
      const isValidDomain = domainPattern.test(cleanInput);
  
      if (isValidDomain) {
        // Preserve the exact input but ensure it starts with a single slash if there's a path
        const normalizedInput = cleanInput.replace(/^\/+/g, ''); // Only remove leading slashes
        const fullUrl = `https://${normalizedInput}`;
        
        // ตรวจสอบด้วย URL constructor
        try {
          new URL(fullUrl);
          setIsValid(true);
          setErrorMessage('');
          return normalizedInput;
        } catch (e) {
          setIsValid(false);
          setErrorMessage('Invalid URL format');
          return cleanInput;
        }
      } else {
        setIsValid(false);
        setErrorMessage('Please enter a valid domain or URL');
        return cleanInput;
      }
    }, []);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      const cleanValue = validateUrl(rawValue);
      
      setInputValue(cleanValue);
      
      // Send back full HTTPS URL
      if (onChange) {
        const fullUrl = cleanValue ? `https://${cleanValue}` : '';
        // Ensure we're passing a boolean (false if null/undefined)
        onChange(fullUrl, Boolean(isValid));
      }
    };
  
    const handleBlur = () => {
      // อาจจะทำ final validation หรือ formatting เพิ่มเติมตอน blur
      if (inputValue && isValid) {
        // Format final value if needed
      }
    };
  
    const getInputClassName = () => {
      let classes = `
        w-full pl-20 pr-12 py-3 text-base border-2 rounded-lg
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500/20
        ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}
      `;
  
      if (isValid === true) {
        classes += ' border-green-500 bg-green-50/30';
      } else if (isValid === false) {
        classes += ' border-red-500 bg-red-50/30';
      } else {
        classes += ' border-gray-300 hover:border-gray-400 focus:border-blue-500';
      }
  
      return classes;
    };
  
    return (
      <div className={`space-y-2 ${className}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {/* HTTPS Prefix */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 text-gray-600 bg-white z-10">
            <Globe size={16} />
            <span className="text-sm font-medium">https://</span>
          </div>
  
          {/* Input Field */}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={getInputClassName()}
            autoComplete="url"
          />
  
          {/* Status Icon */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {isValid === true && (
              <CheckCircle size={20} className="text-green-500" />
            )}
            {isValid === false && (
              <AlertCircle size={20} className="text-red-500" />
            )}
          </div>
        </div>
  
        {/* Feedback Message */}
        {isValid === true && inputValue && (
          <div className="flex items-center space-x-2 text-sm text-green-600">
            <CheckCircle size={16} />
            <span>URL: https://{inputValue}</span>
          </div>
        )}
        
        {isValid === false && errorMessage && (
          <div className="flex items-center space-x-2 text-sm text-red-600">
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}
  
        {/* Help Text */}
        {/* <p className="text-xs text-gray-500">
          Enter domain or URL without https:// (it will be added automatically)
        </p> */}
      </div>
    );
  };
  