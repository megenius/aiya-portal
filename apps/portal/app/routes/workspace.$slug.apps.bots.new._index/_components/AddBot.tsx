import React, { useEffect, useState } from "react";
import { HttpsUrlInput } from "./UrlInput";
import BasicModal from "~/components/BasicModal";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAdAccounts } from "~/hooks/adaccount";
import { useOutletContext } from "@remix-run/react";
import { Workspace } from "~/@types/app";
import Dropdown from "./Dropdown";
import business_types_json from "../business_types.json"; // Assuming this is the path to your business data
import FileUploader from "~/components/FileUploader";
import TextArea from "~/components/TextArea";

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
    id: "text",
    icon: (
      <>
        <path d="M12 4v16" />
  <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
  <path d="M9 20h6" />
      </>
    ),
    label: "Text",
  },
];

type Inputs = {
  name: string;
  type: string;
  ad_account: string;
  business_type: string;
  business_category: string;
  user_prompt: string;
  source_type: string;
  url: string;
  text: string;
};

interface AddBotProps {
  id: string;
  type: any;
  onOk: (values: Inputs & { documentFile: File | null }) => void;
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
    setError,
    clearErrors,
    trigger,
    formState: { errors, isValid },
    control,
    reset,
  } = useForm<Inputs>({ 
    mode: "onChange",
    defaultValues: {
      name: "",
      type: props.type,
      source_type: "",
      business_type: "",
      business_category: "",
      user_prompt: "",
      url: "",
      text: ""
    }
  });
  
  // Get the current URL value from form and remove https:// prefix for the input
  const currentUrl = (watch("url") || '').replace(/^https?:\/\//, '');

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
      setValue("business_category", "", { shouldValidate: true });
    } else {
      setCategories([]);
    }
  }, [businessTypeValue, setValue]);

  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    e?.preventDefault();

    // Validate based on source type
    if (selectedImportOption === "url" && !data.url) {
      setError("url", { type: "required", message: "URL is required" });
      return;
    } else if (selectedImportOption === "text" && !data.text) {
      setError("text", { type: "required", message: "Text content is required" });
      return;
    } else if (selectedImportOption === "document" && !selectedFile) {
      setError("source_type", { type: "required", message: "Please upload a document" });
      return;
    }

    // Include file data if document option was selected
    const formData = {
      ...data,
      documentFile: selectedImportOption === "document" ? selectedFile : null,
    };

    onOk(formData);
  };

  const handleImportOptionSelect = async (optionId: string) => {
    // Clear previous selections when changing import option
    if (selectedImportOption === "url") {
      setValue("url", "");
    } else if (selectedImportOption === "document") {
      setSelectedFile(null);
    } else if (selectedImportOption === "text") {
      setValue("text", "");
    }
    
    setSelectedImportOption(optionId);
    setValue("source_type", optionId, { shouldValidate: true });
    
    // Trigger validation after changing the source type
    await trigger(["source_type"]);
  };

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  useEffect(() => {
    reset({
      name: "",
      type: props.type,
      source_type: "",
      business_type: "",
      business_category: "",
      user_prompt: "",
      url: "",
      text: "",
    });
  }, [props.type, reset]);

  
  return (
    <BasicModal id={id} title="Add Bot">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* hidden registrations */}
        <input
          type="hidden"
          {...register("type", { required: true })}
          value={props.type}
        />
        <input
          type="hidden"
          {...register("source_type", { required: true })}
        />
        <input
          type="hidden"
          {...register("business_type", { required: true })}
        />
        <input
          type="hidden"
          {...register("business_category", { required: true })}
        />

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
              className={`py-2.5 px-3 block w-full rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="My Bot"
              {...register("name", { 
                required: "Bot name is required",
                minLength: {
                  value: 1,
                  message: "Bot name is required"
                }
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

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
                  setValue("business_category", name, { shouldValidate: true });
                }}
                disabled={false}
                // error={!!errors.business_category}
              />
              {/* {errors.business_category && (
                <span className="text-red-500 text-xs mt-1">
                  Business category is required
                </span>
              )} */}
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
            </div>
          )}

          {/* User prompt */}
          <TextArea
            id="user_prompt"
            label="User prompt (optional)"
            placeholder="Details about your bot and its usage..."
            maxLength={1000}
            rows={4}
            {...register("user_prompt")}
            error={errors.user_prompt ? "User prompt is required" : undefined}
          />

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
                <HttpsUrlInput
                  value={currentUrl}
                  onChange={(url, isValid) => {
                    setValue("url", url, { shouldValidate: true });
                    if (!isValid) {
                      setError("url", { 
                        type: "manual",
                        message: "Please enter a valid URL starting with https://" 
                      });
                    } else {
                      clearErrors("url");
                    }
                  }}
                  placeholder="example.com/path"
                  required
                  className={errors.url ? 'border-red-500' : ''}
                />
              </div>
            )}

            {/* Document Upload */}
            {selectedImportOption === "document" && (
              <div className="mt-3">
                <FileUploader
                  onFileChange={handleFileChange}
                  initialFile={selectedFile}
                  accept=".pdf,.doc,.docx,.txt,.md,.rtf"
                  maxSize={5}
                />
                {!selectedFile &&
                  selectedImportOption === "document" &&
                  errors.source_type && (
                    <span className="text-red-500 text-xs mt-1">
                      Please upload a document
                    </span>
                  )}
              </div>
            )}

            {/* Text Textarea */}
            {selectedImportOption === "text" && (
              <div className="mt-3">
                <Controller
                  name="text"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextArea
                      id="text"
                      placeholder="Write initial data for your bot..."
                      rows={4}
                      maxLength={20000}
                      {...field}
                      error={errors.text ? "Content is required" : undefined}
                    />
                  )}
                />
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
            disabled={!isValid || (selectedImportOption === "document" && !selectedFile)}
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
