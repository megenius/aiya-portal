import React from "react";

interface FormFieldProps {
  label: string;
  type: string;
  required: boolean;
  primaryColor?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  required,
  primaryColor,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        required={required}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary sm:text-sm"
        onFocus={(e) => (
          (e.target.style.boxShadow = `0 0 0 1px ${primaryColor}`),
          (e.target.style.borderColor = primaryColor || "")
        )}
        onBlur={(e) => (
          (e.target.style.boxShadow = ""),
          (e.target.style.borderColor = "")
        )}
      />
    </div>
  );
};

export default FormField;
