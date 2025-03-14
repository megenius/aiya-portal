import React from "react";

interface FormFieldProps {
  label: string;
  type: string;
  required: boolean;
  primaryColor?: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  required,
  primaryColor,
  value = "",
  onChange,
  name,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  // Special handler for numeric inputs (number)
  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numeric values
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    if (onChange) {
      onChange(numericValue);
    }
  };

  // Special handler for phone number input
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numeric values
    let numericValue = e.target.value.replace(/[^0-9]/g, '');
    
    // Limit to 10 digits
    numericValue = numericValue.slice(0, 10);
    
    // Format with dashes (0xx-xxx-xxxx)
    let formattedValue = numericValue;
    if (numericValue.length > 3) {
      formattedValue = numericValue.slice(0, 3) + '-' + numericValue.slice(3);
    }
    if (numericValue.length > 6) {
      formattedValue = formattedValue.slice(0, 7) + '-' + formattedValue.slice(7);
    }
    
    if (onChange) {
      // Store the raw numeric value
      onChange(numericValue);
    }
    
    // Update the input display with formatted value
    e.target.value = formattedValue;
  };

  const inputClassName = "w-full p-2 border rounded-md focus:outline-none";
  const inputStyle = {
    borderColor: primaryColor || "#ccc",
  };

  return (
    <div className="form-field">
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
          required={required}
          className={inputClassName}
          style={inputStyle}
        />
      )}

      {/* Email input */}
      {type === "email" && (
        <input
          type="email"
          name={name}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={inputClassName}
          style={inputStyle}
        />
      )}

      {/* Phone input - only accepts numbers, limited to 10 digits with formatting */}
      {type === "tel" && (
        <input
          type="tel"
          name={name}
          value={formatPhoneNumber(value)}
          onInput={handlePhoneInput}
          required={required}
          className={inputClassName}
          style={inputStyle}
          maxLength={12} // 10 digits + 2 dashes
          // placeholder="0xx-xxx-xxxx"
          inputMode="numeric"
        />
      )}

      {/* Number input - only accepts numbers */}
      {type === "number" && (
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleNumericInput}
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
          required={required}
          className={inputClassName}
          style={inputStyle}
          rows={4}
        />
      )}
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
