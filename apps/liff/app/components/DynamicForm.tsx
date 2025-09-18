import React from "react";
import { FormField } from "~/types/campaign";
import FileUpload from "./FileUpload";

interface DynamicFormProps {
  fields: FormField[];
  values: Record<string, string>;
  errors: Record<string, string>;
  language: string;
  onChange: (name: string, value: string) => void;
  onBlur?: (name: string) => void;
  onFileChange?: (name: string, file: File | null) => void; // optional for deferred upload
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  values,
  errors,
  language,
  onChange,
  onBlur,
  onFileChange,
}) => {
  const lang = language as "th" | "en";

  const renderField = (field: FormField) => {
    const value = values[field.name] || "";
    const error = errors[field.name];
    const label = field.label[lang] || field.label.th;
    const placeholder =
      field.placeholder?.[lang] || field.placeholder?.th || "";

    const commonProps = {
      id: field.name,
      name: field.name,
      value,
      onChange: (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
      ) => onChange(field.name, e.target.value),
      onBlur: () => onBlur?.(field.name),
      className: `w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 transition-colors ${
        error
          ? "border-red-300 focus:ring-red-500 focus:border-red-500"
          : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      }`,
      placeholder,
      required: field.required,
    };

    switch (field.type) {
      case "text":
      case "email":
      case "tel": {
        const isPhone = field.type === "tel" || field.name === "phone";
        return (
          <input
            {...commonProps}
            type={field.type}
            autoComplete={
              field.type === "tel"
                ? "tel"
                : field.type === "email"
                  ? "email"
                  : "name"
            }
            {...(isPhone ? { inputMode: "numeric" } : {})}
          />
        );
      }

      case "textarea":
        return (
          <textarea
            {...commonProps}
            rows={4}
            style={{ resize: "vertical", minHeight: "80px" }}
          />
        );

      case "select":
        return (
          <select {...commonProps}>
            <option value="">{placeholder || `เลือก${label}`}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label[lang] || option.label.th}
              </option>
            ))}
          </select>
        );

      case "file":
      case "image_upload":
        return (
          <FileUpload
            name={field.name}
            value={value}
            accept={field.accept ?? (field.type === "image_upload" ? "image/*" : undefined)}
            maxSize={field.max_size}
            required={field.required}
            error={error}
            language={language}
            onChange={onChange}
            onFileChange={onFileChange}
            onBlur={onBlur}
          />
        );

      case "checkbox":
        return (
          <div className="flex items-center space-x-2">
            <input
              id={field.name}
              name={field.name}
              type="checkbox"
              checked={value === "true"}
              onChange={(e) =>
                onChange(field.name, e.target.checked ? "true" : "false")
              }
              onBlur={() => onBlur?.(field.name)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              required={field.required}
            />
            <label htmlFor={field.name} className="text-sm text-gray-700">
              {label}
            </label>
          </div>
        );

      default:
        return <input {...commonProps} type="text" />;
    }
  };

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="space-y-1">
          {field.type !== "checkbox" && (
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label[lang] || field.label.th}
              {field.required && <span className="text-red-500">*</span>}
            </label>
          )}

          {renderField(field)}

          {field.description?.[lang] && (
            <p className="text-xs text-gray-500">{field.description[lang] || field.description.th}</p>
          )}

          {errors[field.name] && (
            <p className="text-sm text-red-600">{errors[field.name]}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
