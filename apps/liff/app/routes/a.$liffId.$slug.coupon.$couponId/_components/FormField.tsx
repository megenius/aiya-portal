import React, { useState } from "react";

interface FormFieldProps {
  label: string;
  type: string;
  required: boolean;
  primaryColor?: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  isValid?: boolean;
  language?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  required,
  primaryColor,
  value = "",
  onChange,
  name,
  isValid,
  language = "en",
}) => {
  // For internal tracking of validation state
  const [touched, setTouched] = useState(false);
  
  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !required || email === "" || emailRegex.test(email);
  };
  
  const validatePhone = (phone: string): boolean => {
    const rawPhone = phone.replace(/[^0-9]/g, '');
    return !required || rawPhone === "" || rawPhone.length === 10;
  };
  
  // Determine if input is valid
  const determineValidity = (): boolean => {
    // If external validity is provided, use that
    if (isValid !== undefined) return isValid;
    
    // Otherwise calculate based on input type and value
    if (!touched) return true;
    
    if (type === 'email') return validateEmail(value);
    if (type === 'tel') return validatePhone(value);
    
    // For other types, just check if required and has a value
    return !required || value.trim() !== '';
  };
  
  const valid = determineValidity();

  // Input change handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched(true);
    if (onChange) onChange(e.target.value);
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    
    // Only allow numeric input
    let numericValue = e.target.value.replace(/[^0-9]/g, '');
    numericValue = numericValue.slice(0, 10); // Limit to 10 digits
    
    // Format for display
    let formattedValue = numericValue;
    if (numericValue.length > 3) {
      formattedValue = numericValue.slice(0, 3) + '-' + numericValue.slice(3);
    }
    if (numericValue.length > 6) {
      formattedValue = formattedValue.slice(0, 7) + '-' + formattedValue.slice(7);
    }
    
    // For phone, we need to set directly to show the formatted value
    e.target.value = formattedValue;
    
    if (onChange) onChange(numericValue);
  };
  
  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    if (onChange) onChange(numericValue);
  };

  // Styling based on validation
  const inputClassName = `w-full p-2 border rounded-md focus:outline-none ${!valid && touched ? 'border-red-500' : ''}`;
  const inputStyle = {
    borderColor: valid || !touched ? (primaryColor || "#ccc") : "#f56565",
  };
  
  // Error messages with language support
  const getErrorMessage = (): string => {
    if (valid || !touched) return '';
    
    if (type === 'email') {
      return language === 'en' ? 'Please enter a valid email address' : 'กรุณากรอกอีเมลให้ถูกต้อง';
    }
    if (type === 'tel') {
      return language === 'en' ? 'Please enter a 10-digit phone number' : 'กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลัก';
    }
    if (required) {
      return language === 'en' ? 'This field is required' : 'กรุณากรอกข้อมูลในช่องนี้';
    }
    
    return '';
  };
  
  const errorMessage = getErrorMessage();

  // Labels for accessibility with language support
  // const getPlaceholder = (): string => {
  //   if (type === 'tel') {
  //     return language === 'en' ? 'Phone number' : 'เบอร์โทรศัพท์';
  //   }
  //   if (type === 'email') {
  //     return language === 'en' ? 'Email address' : 'อีเมล';
  //   }
  //   if (type === 'text') {
  //     return language === 'en' ? 'Enter text' : 'กรอกข้อความ';
  //   }
  //   return '';
  // };

  return (
    <div className="form-field mb-3">
      <label className="block mb-2 text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Text input */}
      {type === "text" && (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={() => setTouched(true)}
          required={required}
          className={inputClassName}
          style={inputStyle}
          // placeholder={getPlaceholder()}
          aria-invalid={!valid && touched}
        />
      )}

      {/* Email input */}
      {type === "email" && (
        <input
          type="email"
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={() => setTouched(true)}
          required={required}
          className={inputClassName}
          style={inputStyle}
          // placeholder={getPlaceholder()}
          aria-invalid={!valid && touched}
        />
      )}

      {/* Phone input */}
      {type === "tel" && (
        <input
          type="tel"
          name={name}
          value={formatPhoneNumber(value)}
          onChange={handlePhoneInput}
          onBlur={() => setTouched(true)}
          onInput={handlePhoneInput}
          required={required}
          className={inputClassName}
          style={inputStyle}
          maxLength={12}
          inputMode="numeric"
          // placeholder={language === 'en' ? '0xx-xxx-xxxx' : '0xx-xxx-xxxx'}
          aria-invalid={!valid && touched}
        />
      )}

      {/* Number input */}
      {type === "number" && (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleNumericInput}
          onBlur={() => setTouched(true)}
          required={required}
          className={inputClassName}
          style={inputStyle}
          inputMode="numeric"
        />
      )}

      {/* Date input */}
      {type === "date" && (
        <input
          type="date"
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={() => setTouched(true)}
          required={required}
          className={inputClassName}
          style={inputStyle}
        />
      )}

      {/* Textarea */}
      {type === "textarea" && (
        <textarea
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={() => setTouched(true)}
          required={required}
          className={inputClassName}
          style={inputStyle}
          rows={4}
        />
      )}
      
      {/* Error message with language support */}
      {errorMessage && <div className="text-red-500 text-xs mt-1">{errorMessage}</div>}
    </div>
  );
};

// Helper function to format phone number for display
const formatPhoneNumber = (value: string): string => {
  if (!value) return '';
  
  // Format with dashes (0xx-xxx-xxxx)
  let formattedValue = value;
  if (value.length > 3) {
    formattedValue = value.slice(0, 3) + '-' + value.slice(3);
  }
  if (value.length > 6) {
    formattedValue = formattedValue.slice(0, 7) + '-' + formattedValue.slice(7);
  }
  
  return formattedValue;
};

export default FormField;
