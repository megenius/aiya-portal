import React, { useCallback, useEffect, useState } from "react";
import { BotModalDetails } from "~/@types/app";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import FileUploader from "~/components/FileUploader";
import UrlInput from "~/components/UrlInput";
import TextArea from "~/components/TextArea";

interface AddKnowledgeModalProps {
  isOpen: boolean;
  onOk: (values: BotModalDetails & { documentFile: File[] | null }) => void;
  onClose: () => void;
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
    id: "empty",
    icon: (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      </>
    ),
    label: "Empty",
  },
];

// const businessTypes: BusinessType[] = business_types_json;

const AddKnowledgeModal: React.FC<AddKnowledgeModalProps> = ({ isOpen, onOk, onClose }) => {
  const [selectedImportOption, setSelectedImportOption] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
  } = useForm<BotModalDetails>({
    mode: "onChange",
    defaultValues: {
      name: "",
      bot_type: "",
      user_prompt: "",
      source_type: "",
      url: "",
      text: "",
    },
  });

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setSelectedImportOption("");
      setSelectedFile(null);
      reset();
    }
  }, [isOpen, reset]);

  // Create a custom close handler to clear all states
  const handleClose = useCallback(() => {
    // Clear all states
    setSelectedImportOption("");
    setSelectedFile(null);
    reset();

    // Call the original onClose
    onClose();
  }, [onClose, reset]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // const handleSelectBotType = (botType: string, bot: (typeof botTypes)[0]) => {
  //   setSelectedBot(bot);
  //   setValue("bot_type", botType);
  //   setCurrentPage(1); // Go to bot details page
  // };

  // const businessTypeValue = watch("business_type");
  // const [categories, setCategories] = useState<BusinessCategory[]>([]);

  // useEffect(() => {
  //   if (businessTypeValue) {
  //     const selectedGroup = businessTypes.find(
  //       (group) => group.name === businessTypeValue
  //     );

  //     if (selectedGroup && selectedGroup.categories) {
  //       setCategories(selectedGroup.categories);
  //     } else {
  //       setCategories([]);
  //     }

  //     // Reset category selection when business type changes
  //     setValue("business_category", "", { shouldValidate: true });
  //   } else {
  //     setCategories([]);
  //   }
  // }, [businessTypeValue, setValue]);

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

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  //create bot
  const onSubmit: SubmitHandler<BotModalDetails> = (data) => {
    console.log("Form data:", data);
    const botDetails: BotModalDetails & { documentFile: File[] | [] } = {
      ...data,
      documentFile: selectedFile ? [selectedFile] : [],
    };
    onOk(botDetails);
    reset(); // Reset form
  };

  // const handleBack = () => {
  //   setCurrentPage(0); // Go back to bot type selection
  // };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Close modal"
        />
        <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
          {/* Close button */}
          <button
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={handleClose}
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
              Add Knowledge
            </h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="py-2">
              <div className="space-y-4">
                <div>
                  <div className="flex">
                    <label
                      htmlFor="knowledge-name"
                      className="block mb-2 text-sm font-medium text-gray-800"
                    >
                      Knowledge name
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    id="knowledge-name"
                    className={`py-2.5 px-3 block w-full rounded-lg text-stone-800 text-sm placeholder:text-gray-400 focus:ring-2 focus:border-transparent ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:ring-blue-500"
                    }`}
                    placeholder="My Knowledge"
                    {...register("name", {
                      required: "Knowledge name is required",
                      minLength: {
                        value: 1,
                        message: "Knowledge name is required",
                      },
                    })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                {/* Business Type and Category */}
                {/* <div>
                    <div className="flex">
                      <label
                        htmlFor="business-type"
                        className={`block mb-2 text-sm font-medium`}
                      >
                        Business Type
                      </label>
                      <span className="text-red-500">*</span>
                    </div>

                    <Dropdown
                      items={businessTypes.map((t) => t.name)}
                      selected={businessTypeValue}
                      placeholder="Select business type"
                      onSelect={(value) => {
                        setValue("business_type", value);
                      }}
                      disabled={false}
                    />
                    <input
                      type="hidden"
                      {...register("business_type", {
                        required: "Business type is required",
                      })}
                    />
                    {errors.business_type && (
                      <span className="text-red-500 text-xs mt-1">
                        Business type is required
                      </span>
                    )}
                  </div>

                  {businessTypeValue && categories.length > 0 && (
                    <div>
                      <div className="flex">
                        <label
                          htmlFor="business-category"
                          className={`block mb-2 text-sm font-medium`}
                        >
                          Business Category
                        </label>
                        <span className="text-red-500">*</span>
                      </div>

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
                      <input
                        type="hidden"
                        {...register("business_category", {
                          required: "Business category is required",
                        })}
                      />
                    </div>
                  )} */}
                <Controller
                  name="user_prompt"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      id="user_prompt"
                      label="User prompt (optional)"
                      placeholder='Such as "Translate this to Spanish" or "Write a product description"'
                      maxLength={1000}
                      rows={4}
                      {...field}
                    />
                  )}
                />

                <div>
                  <div className="flex">
                    <label
                      htmlFor="import-option"
                      className="block mb-2 text-sm font-medium text-gray-800"
                    >
                      Data Import Type
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

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
                    <input
                      type="hidden"
                      {...register("source_type", {
                        required: "Data import type is required",
                      })}
                    />
                  </div>
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
                              message:
                                "Invalid URL. Must start with http:// or https:// and not link directly to files (images, PDFs, docs).",
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
                  {/* {selectedImportOption === "text" && (
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
                    )} */}
                </div>
              </div>
            </div>
          </form>

          {/* Navigation buttons */}
          <div className="mt-6 flex justify-between">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddKnowledgeModal;
