import React, { useState, ChangeEvent } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  id,
  error = "",
  className,
  maxLength,
  onChange,
  ...rest
}) => {
  // initialize count from defaultValue or value if present
  const [charCount, setCharCount] = useState<number>(
    typeof rest.defaultValue === "string"
      ? rest.defaultValue.length
      : typeof rest.value === "string"
        ? rest.value.length
        : 0
  );

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    onChange?.(e);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-800"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:ring-2 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none ${className || ""} ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-200 focus:ring-blue-500"
        }`}
        maxLength={maxLength}
        onChange={handleChange}
        {...rest}
      />
      <div className="w-full flex justify-between mt-1">
        <span className="text-red-500 text-xs">{error || ""}</span>
        {maxLength && (
          <span className="text-gray-500 text-xs">
            {charCount}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextArea;
