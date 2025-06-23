import React, { ChangeEvent, useState, useEffect } from 'react';
import { FieldError } from 'react-hook-form';

interface UrlInputProps {
  name: string;
  value?: string;
  onChange: (url: string, isValid: boolean) => void;
  placeholder?: string;
  error?: FieldError;
  className?: string;
  inputClassName?: string;
  errorClassName?: string;
}

export const UrlInput: React.FC<UrlInputProps> = ({
  name,
  value = '',
  onChange,
  placeholder = 'https://example.com',
  error,
  className = '',
  inputClassName = '',
  errorClassName = '',
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const validateUrl = (url: string): boolean => {
    if (!url) return false;
    
    try {
      const urlObj = new URL(url);
      const path = urlObj.pathname.toLowerCase();
      
      // Check if URL points to a file with unsupported extension
      const fileExtensions = [
        '.jpg', '.jpeg', '.png', '.gif', '.svg',
        '.pdf', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'
      ];
      
      const hasUnsupportedExtension = fileExtensions.some(ext => path.endsWith(ext));
      if (hasUnsupportedExtension) {
        return false;
      }
      
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    const urlIsValid = validateUrl(url);
    setIsValid(urlIsValid);
    onChange(url, urlIsValid);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  // Validate initial value
  useEffect(() => {
    if (value) {
      const urlIsValid = validateUrl(value);
      setIsValid(urlIsValid);
    }
  }, [value]);

  const showError = isTouched && (!isValid || error);

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <input
          type="url"
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded-md ${
            showError ? 'border-red-500' : 'border-gray-300'
          } focus:border-transparent focus:ring-2 ${showError ? 'focus:ring-red-500' : 'focus:ring-blue-500'} ${inputClassName}`}
          autoComplete="off"
          spellCheck="false"
        />
        {/* {isValid && value && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )} */}
      </div>
      {showError && (
        <p className={`mt-1 text-sm text-red-600 ${errorClassName}`}>
          {error?.message || 'Invalid URL. Must start with http:// or https:// and not link directly to files (images, PDFs, docs).'}
        </p>
      )}
    </div>
  );
};

export default UrlInput;
