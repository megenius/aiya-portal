import React, { useCallback, useEffect, useState } from "react";
import business_types_json from "../business_types.json";
import { BotDetails, BotType } from "~/@types/app";
import Dropdown from "./Dropdown";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextArea from "~/components/TextArea";
import FileUploader from "~/components/FileUploader";
import UrlInput from "~/components/UrlInput";

interface AddBotModalProps {
  workspaceId: string;
  botTypes: BotType[];
  isOpen: boolean;
  onOk: (values: BotDetails & { documentFile: File[] | null }) => void;
  onClose: () => void;
}

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

const businessTypes: BusinessType[] = business_types_json;

const AddBotModal: React.FC<AddBotModalProps> = ({
  isOpen,
  botTypes,
  onOk,
  onClose,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedBot, setSelectedBot] = useState<(typeof botTypes)[0] | null>(
    null
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(0);
      setSelectedBot(null);
      reset();
    }
  }, [isOpen]);

  const handleSelectBotType = (botType: string, bot: (typeof botTypes)[0]) => {
    setSelectedBot(bot);
    setValue("bot_type", botType);
    setCurrentPage(1); // Go to bot details page
  };

  //page 2
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    control,
    trigger,
    formState: { errors, isValid },
    reset,
  } = useForm<BotDetails>({
    mode: "onChange",
    defaultValues: {
      name: "",
      bot_type: "",
      business_type: "",
      business_category: "",
      user_prompt: "",
      source_type: "",
      url: "",
      text: "",
    },
  });
  const businessTypeValue = watch("business_type");
  const [categories, setCategories] = useState<BusinessCategory[]>([]);
  const [selectedImportOption, setSelectedImportOption] = useState<string>("");

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

  const handleImportOptionSelect = async (optionId: string) => {
    // Clear previous selections when changing import option
    setValue("url", "");
    setSelectedFile(null);
    setValue("text", "");
    clearErrors("url");
    clearErrors("text");

    setSelectedImportOption(optionId);
    setValue("source_type", optionId, { shouldValidate: true });

    // Trigger validation after changing the source type
    await trigger(["source_type"]);
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  //create bot
  const onSubmit: SubmitHandler<BotDetails> = (data) => {
    console.log("Form data:", data);
    const botDetails: BotDetails & { documentFile: File[] | [] } = {
      ...data,
      documentFile: selectedFile ? [selectedFile] : [],
    };
    onOk(botDetails);
    reset(); // Reset form
  };

  const handleBack = () => {
    setCurrentPage(0); // Go back to bot type selection
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Close modal"
        />
        <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
          {/* Close button */}
          <button
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal title */}
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              {currentPage === 0 ? "Select Bot Type" : "Bot Details"}
            </h3>
          </div>

          {/* Page 1: Bot Type Selection */}
          {currentPage === 0 && (
            <div className="grid grid-cols-2 gap-3">
              {botTypes.map((botType) => (
                <button
                  key={botType.type}
                  type="button"
                  disabled={botType.status === "inactive"}
                  onClick={() => handleSelectBotType(botType.type, botType)}
                  className={`w-full p-6 rounded-lg border border-gray-200
                    hover:border-blue-500 hover:bg-blue-50 transition-colors
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    cursor-pointer disabled:opacity-50 disabled:pointer-events-none`}
                >
                  <div className="flex flex-col justify-center items-center gap-2">
                    {botType.icon && (
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {/* <img src={botType.icon} alt={botType.name} className="w-6 h-6" /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={30}
                          height={30}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-message-square-more-icon lucide-message-square-more"
                        >
                          {botType.icon}
                        </svg>
                      </div>
                    )}
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {botType.name}
                      </h4>
                      {/* <p className="text-sm text-gray-500">{botType.description}</p> */}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Page 2: Bot Details */}
          {currentPage === 1 && selectedBot && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="py-2">
                <div className="mb-4 flex items-center">
                  {selectedBot.icon && (
                    <div className="mr-3 p-2 bg-blue-100 rounded-lg">
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
                        className="lucide lucide-message-square-more-icon lucide-message-square-more"
                      >
                        {selectedBot.icon}
                      </svg>
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {selectedBot.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {selectedBot.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
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
                      className={`py-2.5 px-3 block w-full rounded-lg text-sm placeholder:text-gray-400 focus:ring-2 focus:border-transparent ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-200 focus:ring-blue-500"
                      }`}
                      placeholder="My Bot"
                      {...register("name", {
                        required: "Bot name is required",
                        minLength: {
                          value: 1,
                          message: "Bot name is required",
                        },
                      })}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="business-type"
                      className="block mb-2 text-sm font-medium text-gray-800"
                    >
                      Business Type
                    </label>
                    <Dropdown
                      items={businessTypes.map((t) => t.name)}
                      selected={businessTypeValue}
                      placeholder="Select business type"
                      onSelect={(value) => {
                        setValue("business_type", value);
                      }}
                      disabled={false}
                    />
                    {errors.business_type && (
                      <span className="text-red-500 text-xs mt-1">
                        Business type is required
                      </span>
                    )}
                  </div>

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
                        selected={watch("business_category")}
                        placeholder="Select business category"
                        onSelect={(value) => {
                          setValue("business_category", value, {
                            shouldValidate: true,
                          });
                        }}
                        disabled={false}
                      />
                    </div>
                  )}
                  <Controller
                    name="user_prompt"
                    control={control}
                    render={({ field }) => (
                      <TextArea
                        id="user_prompt"
                        label="User prompt (optional)"
                        placeholder="Details about your bot and its usage..."
                        maxLength={1000}
                        rows={4}
                        {...field}
                      />
                    )}
                  />

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
                          <span className="text-sm font-medium">
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>{" "}
                    {/* URL Input */}
                    {selectedImportOption === "url" && (
                      <div className="mt-3">
                        <UrlInput
                          name="url"
                          value={watch("url")}
                          onChange={(url, isValid) => {
                            setValue("url", url, { shouldValidate: true });
                            if (!isValid) {
                              setError("url", { 
                                type: "manual",
                                message: "Please enter a valid URL" 
                              });
                            } else {
                              clearErrors("url");
                            }
                          }}
                          placeholder="https://example.com"
                          error={errors.url}
                          className="w-full"
                        />
                        {/* {errors.url && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.url.message}
                          </p>
                        )} */}
                      </div>
                    )}
                    {/* Document Upload */}
                    {selectedImportOption === "document" && (
                      <div className="mt-3">
                        <FileUploader
                          onFileChange={handleFileChange}
                          initialFile={selectedFile}
                          accept=".pdf,.doc,.docx,.txt,.xlsx,.jpg,.jpeg,.png,.tiff,.bmp,.gif"
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
                              error={
                                errors.text ? "Content is required" : undefined
                              }
                            />
                          )}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* Navigation buttons */}
          <div className="mt-6 flex justify-between">
            {currentPage > 0 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {currentPage === 0 ? (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            ) : (
              <button
                type="submit"
                disabled={
                  !isValid ||
                  (watch("source_type") === "document" && !selectedFile)
                }
                onClick={handleSubmit(onSubmit)}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none`}
              >
                Create
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBotModal;
