import React, { useEffect, useState } from "react";
import BasicModal from "~/components/BasicModal";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAdAccounts } from "~/hooks/adaccount";
import { useOutletContext } from "@remix-run/react";
import { Workspace } from "~/@types/app";
import Dropdown from "./Dropdown";
import business_types_json from "../business_types.json"; // Assuming this is the path to your business data
import FileUploader from "~/components/FileUploader";

interface BusinessCategory {
  value: number;
  name: string;
}

interface BusinessType {
  value: number;
  name: string;
  categories: BusinessCategory[];
}

const importOptions = [
  {
    id: "url",
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    ),
    label: "URL",
  },
  {
    id: "document",
    icon: (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </>
    ),
    label: "Document",
  },
  {
    id: "scratch",
    icon: (
      <>
        <path d="M10 8h.01" />
        <path d="M12 12h.01" />
        <path d="M14 8h.01" />
        <path d="M16 12h.01" />
        <path d="M18 8h.01" />
        <path d="M6 8h.01" />
        <path d="M7 16h10" />
        <path d="M8 12h.01" />
        <rect width={20} height={16} x={2} y={4} rx={2} />
      </>
    ),
    label: "Scratch",
  },
];

type Inputs = {
  name: string;
  type: string;
  ad_account: string;
  business_type: string;
  business_category: string;
  description: string;
  import_option: string;
  url_input: string;
  scratch_input: string;
};

interface AddBotProps {
  id: string;
  type: any;
  onOk: (values: Inputs) => void;
}

const businessTypes: BusinessType[] = business_types_json;

const AddBot: React.FC<AddBotProps> = ({ id, onOk, ...props }) => {
  const { workspace } = useOutletContext<{ workspace: Workspace }>();
  const adAccounts = useAdAccounts({
    variables: { workspaceId: workspace?.id as string },
  });
  const [categories, setCategories] = useState<BusinessCategory[]>([]);
  const [selectedImportOption, setSelectedImportOption] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const businessTypeValue = watch("business_type");
  const businessCategoryValue = watch("business_category");

  // Update categories when business type changes
  useEffect(() => {
    if (businessTypeValue) {
      const selectedGroup = businessTypes.find(
        (group) => group.name === businessTypeValue
      );

      if (selectedGroup && selectedGroup.categories) {
        setCategories(selectedGroup.categories);
      } else {
        setCategories([]);
      }

      // Reset category selection when business type changes
      setValue("business_category", "");
    } else {
      setCategories([]);
    }
  }, [businessTypeValue, setValue]);

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.preventDefault();

    // Include file data if document option was selected
    const formData = {
      ...data,
      documentFile: selectedImportOption === "document" ? selectedFile : null,
    };

    reset();
    onOk(formData);
  };

  const handleImportOptionSelect = (optionId: string) => {
    setSelectedImportOption(optionId);
    setValue("import_option", optionId);
  };

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  useEffect(() => {
    reset({
      name: "",
      type: props.type,
      import_option: "",
      business_type: "",
      business_category: "",
      description: "",
      url_input: "",
      scratch_input: "",
    });
  }, [props.type, reset]);

  return (
    <BasicModal id={id} title="Add Bot">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          {/* Bot name input */}
          <div>
            <label
              htmlFor="bot-name"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Bot name
            </label>
            <input
              type="text"
              id="bot-name"
              className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="My Bot"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-xs mt-1">
                Bot name is required
              </span>
            )}
          </div>

          {/* Business Type */}
          {/* Business Type */}
          <div>
            <label
              htmlFor="business-type"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Business Type
            </label>
            <Dropdown
              items={businessTypes.map((g) => g.name)}
              selected={businessTypeValue}
              placeholder="Select business type"
              onSelect={(name) => {
                setValue("business_type", name);
              }}
              disabled={false}
            />
            {errors.business_type && (
              <span className="text-red-500 text-xs mt-1">
                Business type is required
              </span>
            )}
          </div>

          {/* Business Category (shows only when business type is selected) */}
          {businessTypeValue && categories.length > 0 && (
            <div>
              <label
                htmlFor="business-category"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Business Category
              </label>
              <Dropdown
                items={categories.map((c) => c.name)}
                selected={businessCategoryValue}
                placeholder="Select business category"
                onSelect={(name) => {
                  setValue("business_category", name);
                }}
                disabled={false}
              />
              {/* <select
                id="business-category"
                className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                {...register("business_category", { required: true })}
              >
                <option value="" disabled selected>
                  Select business category
                </option>
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.name}
                  </option>
                ))}
              </select> */}
              {errors.business_category && (
                <span className="text-red-500 text-xs mt-1">
                  Business category is required
                </span>
              )}
            </div>
          )}

          {/* Additional Details */}
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Additional Details
            </label>
            <textarea
              id="description"
              className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Details about your bot and its usage..."
              rows={4}
              {...register("description")}
            ></textarea>
          </div>

          {/* Import Type */}
          <div>
            <label
              htmlFor="import-option"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Data Import Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {importOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`flex flex-col items-center justify-center p-3 border rounded-md transition-all ${
                    selectedImportOption === option.id
                      ? "border-blue-500 bg-blue-50 text-blue-600"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => handleImportOptionSelect(option.id)}
                >
                  <span className="text-2xl mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-link-icon lucide-link"
                    >
                      {option.icon}
                    </svg>
                  </span>
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              ))}
            </div>

            {/* URL Input */}
            {selectedImportOption === "url" && (
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter website URL"
                  className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  {...register("url_input", {
                    required: selectedImportOption === "url",
                  })}
                />
                {errors.url_input && (
                  <span className="text-red-500 text-xs mt-1">
                    URL is required
                  </span>
                )}
              </div>
            )}

            {/* Document Upload */}
            {selectedImportOption === "document" && (
              <div className="mt-3">
                <FileUploader
                  onFileChange={handleFileChange}
                  initialFile={selectedFile}
                  accept=".pdf,.doc,.docx,.txt,.md,.rtf"
                  maxSize={10}
                />
                {!selectedFile && selectedImportOption === "document" && errors.import_option && (
                  <span className="text-red-500 text-xs mt-1">
                    Please upload a document
                  </span>
                )}
              </div>
            )}

            {/* Scratch Textarea */}
            {selectedImportOption === "scratch" && (
              <div className="mt-3">
                <textarea
                  placeholder="Write initial data for your bot..."
                  className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={4}
                  {...register("scratch_input", {
                    required: selectedImportOption === "scratch",
                  })}
                ></textarea>
                {errors.scratch_input && (
                  <span className="text-red-500 text-xs mt-1">
                    Content is required
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Ad Account Selection - Only show for adbot type */}
          {props.type === "adbot" && (
            <div>
              <label
                htmlFor="ad-account"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Ad account
              </label>
              <select
                id="ad-account"
                className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                {...register("ad_account", { required: true })}
              >
                {adAccounts?.data?.items.map((ad) => (
                  <option key={ad.ad_account_id} value={ad.id as string}>
                    {ad.name}
                  </option>
                ))}
              </select>
              {errors.ad_account && (
                <span className="text-red-500 text-xs mt-1">
                  Ad account is required
                </span>
              )}
            </div>
          )}
        </div>

        <div className="mt-5 flex justify-end gap-x-2">
          <button
            type="button"
            className="py-2 px-3 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-xs align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-overlay={`#${id}`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-xs align-middle hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-1 focus:ring-blue-300"
            data-hs-overlay={`#${id}`}
          >
            Save
          </button>
        </div>
      </form>
    </BasicModal>
  );
};

export default AddBot;
