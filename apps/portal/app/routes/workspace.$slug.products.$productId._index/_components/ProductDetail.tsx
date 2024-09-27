import { Image, Upload } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { Product } from '~/@types/app';
import { useFileDelete } from '~/hooks/useFileDelete';
import { useFileUpload } from '~/hooks/useFileUpload';
import { getDirectusFileUrl } from '~/utils/files';

interface ProductDetailProps {
  item: Product
  onSave: (values: Product) => void
}

const ProductDetail: React.FC<ProductDetailProps> = ({ item, onSave }) => {
  const methods = useForm<Product>({
    defaultValues: {
      ...item,
    }
  });

  // use react hook form
  const { register, handleSubmit, formState: { errors } } = methods
  const onSubmit = (data: Product) => {
    onSave && onSave(data)
  }


  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-5 pb-2">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-stone-800 dark:text-neutral-200">
                {item?.name}
              </h1>
            </div>
          </div>
          {/* End Header */}
          <div className="inline-flex sm:justify-end items-center gap-x-3">
            {/* save button */}
            <button
              type="submit"
              className="py-2 px-3 inline-flex items-center gap-x-1.5 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500" >
              Save
            </button>
          </div>
        </div>
        {/* End Page Header */}
        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          <div className="lg:col-span-4 space-y-4">
            {/* Products Card */}
            <div className="flex flex-col bg-white border border-stone-200 overflow-hidden rounded-xl shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
              {/* Header */}
              <div className="py-3 px-5 flex justify-between items-center gap-x-5 border-b border-stone-200 dark:border-neutral-700">
                <h2 className="inline-block font-semibold text-stone-800 dark:text-neutral-200">
                  Product info
                </h2>
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="p-5 space-y-4">
                <Thumbnail />

                {/* Input */}
                <div>
                  <label
                    htmlFor="hs-pro-epdnm"
                    className="block mb-2 text-sm font-medium text-stone-800 dark:text-neutral-200"
                  >
                    Name
                    <span className="hs-tooltip inline-block align-middle">
                      <svg
                        className="shrink-0 size-4 text-stone-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      <span
                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-[60] max-w-60 py-1 px-2 bg-stone-900 text-xs font-normal text-white rounded-lg shadow-sm dark:bg-neutral-700"
                        role="tooltip"
                      >
                        Give your product a short and clear name.
                      </span>
                    </span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                  />
                </div>
                {/* End Input */}
                {/* Input Grid */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdsku"
                      className="block mb-2 text-sm font-medium text-stone-800 dark:text-neutral-200"
                    >
                      SKU
                    </label>
                    <input
                      {...register("sku", { required: false })}
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      placeholder="eg. 348121032"
                    />
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdwe"
                      className="block mb-2 text-sm font-medium text-stone-800 dark:text-neutral-200"
                    >
                      Weight
                    </label>
                    <div className="relative w-full">
                      <input
                        {...register("weight", { required: false })}
                        type="text"
                        className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                        placeholder="0.0"
                      />
                      <div className="absolute inset-y-0 end-0 flex items-center z-20 pe-[5px] text-stone-400">
                        {/* Select */}
                        <div className="relative">
                          <select
                            data-hs-select='{
                        "placeholder": "Select option...",
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-stone-800 rounded-lg hover:bg-stone-100 focus:outline-none focus:bg-stone-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",
                        "dropdownClasses": "end-0 mt-2 p-1 z-50 w-20 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950",
                        "optionClasses": "hs-selected:bg-stone-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-stone-800 rounded-lg cursor-pointer hover:bg-stone-100 rounded-lg focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-stone-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                      }'
                            className="hidden"
                          >
                            <option value="">Choose</option>
                            <option>lb</option>
                            <option>oz</option>
                            <option selected="">kg</option>
                            <option>g</option>
                          </select>
                          <div className="absolute top-1/2 end-1.5 -translate-y-1/2">
                            <svg
                              className="shrink-0 size-3.5 text-stone-600 dark:text-neutral-400"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </div>
                        </div>
                        {/* End Select */}
                      </div>
                    </div>
                    <p className="mt-1.5 text-xs text-stone-500 dark:text-neutral-500">
                      Used to calculate shipping rates at checkout and label prices
                      during fulfillment.
                    </p>
                  </div>
                  {/* End Input */}
                </div>
                {/* End Input Grid */}
                {/* <Description /> */}
              </div>
              {/* End Body */}
            </div>
            {/* End Products Card */}
            {/* <MediaCard /> */}
            {/* <VariantTable /> */}

          </div>
          {/* End Col */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-5 space-y-4">

              <ProductPrice />
              {/* <Organization /> */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Products Grid */}
      </form>
    </FormProvider>
  );
};

export default ProductDetail;


const Thumbnail: React.FC = () => {
  const { register, getValues, setValue } = useFormContext() // retrieve all hook methods

  const fileUpload = useFileUpload()
  const fileDelete = useFileDelete()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<string>()

  const handleRemove = () => {
    setImage("")
    setValue("thumbnail", null)
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const current = getValues("thumbnail")
    if (current) {
      await fileDelete.mutateAsync(current)
    }

    fileUpload.mutateAsync(file, {
      onSuccess: (data) => {
        setValue("thumbnail", data.id)
      },
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  useEffect(() => {
    setImage(getDirectusFileUrl(getValues("thumbnail") as string))
  }, [getValues("thumbnail")])

  return (
    <>
      <div>
        <label className="block mb-2 text-sm font-medium text-stone-800 dark:text-neutral-200">
          Thumbnail
        </label>
        {/* Logo Upload Group */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {image ?
            <img
              src={image}
              className="shrink-0 size-20 rounded-full"
              alt="Avatar"
            />
            :
            <span className="flex shrink-0 justify-center items-center size-20 border-2 border-dotted border-gray-300 text-gray-400 rounded-full dark:border-neutral-700 dark:text-neutral-600">
              <Image />
            </span>
          }


          <div className="grow">
            <div className="flex items-center gap-x-2">
              <label className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileUpload} accept="image/*" disabled={fileUpload.isPending} />
                <Upload size={16} />
                {fileUpload.isPending ? 'Uploading...' : 'Upload photo'}
              </label>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-stone-200 bg-white text-red-500 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-red-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                onClick={handleRemove}
                disabled={!!!image}
              >
                Delete
              </button>
            </div>
            <p className="mt-2 text-xs text-stone-500 dark:text-neutral-500">
              Your image should be square, at least 100x100px, and JPG or
              PNG.
            </p>
          </div>
        </div>
        {/* End Logo Upload Group */}
      </div>
    </>
  )
}


const Description: React.FC = () => {
  const { register } = useFormContext() // retrieve all hook methods

  return (
    <>
      <div>
        <label className="block mb-2 text-sm font-medium text-stone-800 dark:text-neutral-200">
          Description
        </label>
        {/* Tiptap */}
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
          <div id="hs-editor-tiptap">
            <div className="flex align-middle gap-x-0.5 border-b border-stone-200 p-2 dark:border-neutral-700">
              <button
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                type="button"
                data-hs-editor-bold=""
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 12a4 4 0 0 0 0-8H6v8" />
                  <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
                </svg>
              </button>
              <button
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                type="button"
                data-hs-editor-italic=""
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={19} x2={10} y1={4} y2={4} />
                  <line x1={14} x2={5} y1={20} y2={20} />
                  <line x1={15} x2={9} y1={4} y2={20} />
                </svg>
              </button>
              <button
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                type="button"
                data-hs-editor-underline=""
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 4v6a6 6 0 0 0 12 0V4" />
                  <line x1={4} x2={20} y1={20} y2={20} />
                </svg>
              </button>
              <button
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                type="button"
                data-hs-editor-strike=""
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4H9a3 3 0 0 0-2.83 4" />
                  <path d="M14 12a4 4 0 0 1 0 8H6" />
                  <line x1={4} x2={20} y1={12} y2={12} />
                </svg>
              </button>
              <button
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                type="button"
                data-hs-editor-link=""
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </button>
              <button
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                type="button"
                data-hs-editor-ol=""
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={10} x2={21} y1={6} y2={6} />
                  <line x1={10} x2={21} y1={12} y2={12} />
                  <line x1={10} x2={21} y1={18} y2={18} />
                  <path d="M4 6h1v4" />
                  <path d="M4 10h2" />
                  <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                </svg>
              </button>
              <button
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                type="button"
                data-hs-editor-ul=""
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={8} x2={21} y1={6} y2={6} />
                  <line x1={8} x2={21} y1={12} y2={12} />
                  <line x1={8} x2={21} y1={18} y2={18} />
                  <line x1={3} x2="3.01" y1={6} y2={6} />
                  <line x1={3} x2="3.01" y1={12} y2={12} />
                  <line x1={3} x2="3.01" y1={18} y2={18} />
                </svg>
              </button>
              <button
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                type="button"
                data-hs-editor-blockquote=""
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 6H3" />
                  <path d="M21 12H8" />
                  <path d="M21 18H8" />
                  <path d="M3 12v6" />
                </svg>
              </button>
              <button
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                type="button"
                data-hs-editor-code=""
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </button>
            </div>
            <div className="h-[10rem]" data-hs-editor-field="" />
          </div>
        </div>
        {/* End Tiptap */}
      </div>
    </>
  )
}

const MediaCard: React.FC = () => {
  return (
    <>
      {/* Media Card */}
      <div className="flex flex-col bg-white border border-stone-200 overflow-hidden rounded-xl shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
        {/* Header */}
        <div className="py-3 px-5 flex justify-between items-center gap-x-5 border-b border-stone-200 dark:border-neutral-700">
          <h2 className="inline-block font-semibold text-stone-800 dark:text-neutral-200">
            Media
          </h2>
          <div className="flex justify-end items-center gap-x-2">
            <button
              type="button"
              className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="M12 12v9" />
                <path d="m16 16-4-4-4 4" />
              </svg>
              Upload from URL
            </button>
          </div>
        </div>
        {/* End Header */}
        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Card */}
            <div id="dismiss-img1" className="relative">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-44">
                <img
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80"
                  alt="Avatar"
                />
              </div>
              <div className="absolute top-2 end-2 z-10">
                <button
                  type="button"
                  className="size-7 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-full border border-stone-200 bg-white text-stone-600 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-remove-element="#dismiss-img1"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div id="dismiss-img2" className="relative">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-44">
                <img
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1549298916-acc8271f8b8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80"
                  alt="Avatar"
                />
              </div>
              <div className="absolute top-2 end-2 z-10">
                <button
                  type="button"
                  className="size-7 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-full border border-stone-200 bg-white text-stone-600 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-remove-element="#dismiss-img2"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div id="dismiss-img3" className="relative">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-44">
                <img
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1549298916-c6c5f85fa167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80"
                  alt="Avatar"
                />
              </div>
              <div className="absolute top-2 end-2 z-10">
                <button
                  type="button"
                  className="size-7 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-full border border-stone-200 bg-white text-stone-600 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-remove-element="#dismiss-img3"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div id="dismiss-img4" className="relative">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-44">
                <img
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80"
                  alt="Avatar"
                />
              </div>
              <div className="absolute top-2 end-2 z-10">
                <button
                  type="button"
                  className="size-7 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-full border border-stone-200 bg-white text-stone-600 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-remove-element="#dismiss-img4"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            {/* End Card */}
          </div>
          {/* End Grid */}
          {/* Drag 'n Drop */}
          <div className="space-y-2">
            <label className="hidden mb-2 text-sm font-medium text-stone-800 dark:text-neutral-200">
              Upload images
            </label>
            <div className="p-12 h-56 flex justify-center bg-white border border-dashed border-stone-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-600">
              <div className="text-center">
                <svg
                  className="w-16 text-stone-400 mx-auto dark:text-neutral-400"
                  width={70}
                  height={46}
                  viewBox="0 0 70 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.05172 9.36853L17.2131 7.5083V41.3608L12.3018 42.3947C9.01306 43.0871 5.79705 40.9434 5.17081 37.6414L1.14319 16.4049C0.515988 13.0978 2.73148 9.92191 6.05172 9.36853Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="fill-white stroke-stone-400 dark:fill-neutral-800 dark:stroke-neutral-500"
                  />
                  <path
                    d="M63.9483 9.36853L52.7869 7.5083V41.3608L57.6982 42.3947C60.9869 43.0871 64.203 40.9434 64.8292 37.6414L68.8568 16.4049C69.484 13.0978 67.2685 9.92191 63.9483 9.36853Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="fill-white stroke-stone-400 dark:fill-neutral-800 dark:stroke-neutral-500"
                  />
                  <rect
                    x="17.0656"
                    y="1.62305"
                    width="35.8689"
                    height="42.7541"
                    rx={5}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="fill-white stroke-stone-400 dark:fill-neutral-800 dark:stroke-neutral-500"
                  />
                  <path
                    d="M47.9344 44.3772H22.0655C19.3041 44.3772 17.0656 42.1386 17.0656 39.3772L17.0656 35.9161L29.4724 22.7682L38.9825 33.7121C39.7832 34.6335 41.2154 34.629 42.0102 33.7025L47.2456 27.5996L52.9344 33.7209V39.3772C52.9344 42.1386 50.6958 44.3772 47.9344 44.3772Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="stroke-stone-400 dark:stroke-neutral-500"
                  />
                  <circle
                    cx="39.5902"
                    cy="14.9672"
                    r="4.16393"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="stroke-stone-400 dark:stroke-neutral-500"
                  />
                </svg>
                <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-stone-600">
                  <span className="pe-1 font-medium text-stone-800 dark:text-neutral-200">
                    Drop your files here or
                  </span>
                  <label
                    htmlFor="hs-pro-epdupb"
                    className="relative cursor-pointer bg-white font-semibold text-green-600 hover:text-green-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 dark:bg-neutral-800 dark:text-green-500 dark:hover:text-green-600"
                  >
                    <span>browse</span>
                    <input
                      id="hs-pro-epdupb"
                      type="file"
                      className="sr-only"
                      name="hs-pro-deuuf"
                    />
                  </label>
                </div>
                <p className="mt-1 text-xs text-stone-400 dark:text-neutral-400">
                  CSV, XLS, DOCX
                </p>
              </div>
            </div>
          </div>
          {/* End Drag 'n Drop */}
          <p className="text-sm text-stone-500 dark:text-neutral-500">
            Add up to 10 images to your product.
          </p>
        </div>
        {/* End Body */}
      </div>
      {/* End Media Card */}
    </>
  )
}

const VariantTable: React.FC = () => {
  return (
    <>
      {/* Variants Card */}
      <div className="flex flex-col bg-white border border-stone-200 overflow-hidden rounded-xl shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
        {/* Header */}
        <div className="py-3 px-5 flex justify-between items-center gap-x-5 border-b border-stone-200 dark:border-neutral-700">
          <h2 className="inline-block font-semibold text-stone-800 dark:text-neutral-200">
            Variants
          </h2>
        </div>
        {/* End Header */}
        {/* Body */}
        <div className="py-3 px-5 space-y-2">
          {/* Heading */}
          <div className="hidden md:grid grid-cols-12 gap-x-5">
            <div className="col-span-2">
              <span className="text-xs uppercase text-stone-500 dark:text-neutral-500">
                Size
              </span>
            </div>
            <div className="col-span-2">
              <span className="text-xs uppercase text-stone-500 dark:text-neutral-500">
                Color
              </span>
            </div>
            <div className="col-span-3">
              <span className="text-xs uppercase text-stone-500 dark:text-neutral-500">
                Price
              </span>
            </div>
            <div className="col-span-2">
              <span className="text-xs uppercase text-stone-500 dark:text-neutral-500">
                Quantity
              </span>
            </div>
            <div className="col-span-2">
              <span className="sr-only">Actions</span>
            </div>
          </div>
          {/* End Heading */}
          {/* List */}
          <div id="hs-wrapper-for-copy">
            {/* Card */}
            <div
              id="hs-content-for-copy"
              className="hidden [--ignore-for-count] pt-5 mt-5 border-t border-stone-200 first:pt-0 first:mt-0 first:border-t-0 md:pt-0 md:border-t-0 dark:border-neutral-700"
            >
              <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-5 items-center">
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvts"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Size
                    </label>
                    <input
                      id="hs-pro-epdvts"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 uppercase placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtc"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Color
                    </label>
                    <input
                      id="hs-pro-epdvtc"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-3">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtp"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Price
                    </label>
                    <div className="relative w-full">
                      <input
                        id="hs-pro-epdvtp"
                        type="text"
                        className="py-2 ps-3 pe-12 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      />
                      <div className="absolute inset-y-0 end-2.5 flex items-center z-20 ps-[5px] text-sm text-stone-400 dark:text-neutral-600">
                        USD
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-4">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtq"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Quantity
                    </label>
                    <div
                      className="py-1.5 px-3 bg-white border border-stone-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                      data-hs-input-number=""
                    >
                      <div className="w-full flex justify-between items-center gap-x-3">
                        <input
                          id="hs-pro-epdvtq"
                          className="w-full min-w-12 p-0 bg-transparent border-0 text-stone-800 focus:ring-0 dark:text-white"
                          type="text"
                          defaultValue={0}
                          data-hs-input-number-input=""
                        />
                        <div className="flex justify-end items-center gap-x-1.5">
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-decrement=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-increment=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-full md:col-span-1 md:text-end">
                  <button
                    type="button"
                    className="py-1 px-3 md:px-1 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-full bg-stone-100 border border-transparent text-stone-600 hover:bg-stone-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-200 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                    data-hs-copy-markup-delete-item=""
                  >
                    <svg
                      className="hidden md:block shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span className="md:hidden">Delete</span>
                  </button>
                </div>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="pt-5 mt-5 border-t border-stone-200 first:pt-0 first:mt-0 first:border-t-0 md:pt-0 md:border-t-0 dark:border-neutral-700">
              <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-5 items-center">
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvts-1"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Size
                    </label>
                    <input
                      id="hs-pro-epdvts-1"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 uppercase placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      defaultValue={39}
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtc-1"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Color
                    </label>
                    <input
                      id="hs-pro-epdvtc-1"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      defaultValue="Yellow"
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-3">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtp-1"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Price
                    </label>
                    <div className="relative w-full">
                      <input
                        id="hs-pro-epdvtp-1"
                        type="text"
                        className="py-2 ps-3 pe-12 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                        defaultValue={45.0}
                      />
                      <div className="absolute inset-y-0 end-2.5 flex items-center z-20 ps-[5px] text-sm text-stone-400 dark:text-neutral-600">
                        USD
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-4">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtq-1"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Quantity
                    </label>
                    <div
                      className="py-1.5 px-3 bg-white border border-stone-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                      data-hs-input-number=""
                    >
                      <div className="w-full flex justify-between items-center gap-x-3">
                        <input
                          id="hs-pro-epdvtq-1"
                          className="w-full min-w-12 p-0 bg-transparent border-0 text-stone-800 focus:ring-0 dark:text-white"
                          type="text"
                          defaultValue={10}
                          data-hs-input-number-input=""
                        />
                        <div className="flex justify-end items-center gap-x-1.5">
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-decrement=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-increment=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-full md:col-span-1 md:text-end">
                  <button
                    type="button"
                    className="py-1 px-3 md:px-1 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-full bg-stone-100 border border-transparent text-stone-600 hover:bg-stone-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-200 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                    data-hs-copy-markup-delete-item=""
                  >
                    <svg
                      className="hidden md:block shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span className="md:hidden">Delete</span>
                  </button>
                </div>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="pt-5 mt-5 border-t border-stone-200 first:pt-0 first:mt-0 first:border-t-0 md:pt-0 md:border-t-0 dark:border-neutral-700">
              <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-5 items-center">
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvts-2"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Size
                    </label>
                    <input
                      id="hs-pro-epdvts-2"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 uppercase placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      defaultValue={40}
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtc-2"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Color
                    </label>
                    <input
                      id="hs-pro-epdvtc-2"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      defaultValue="Yellow"
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-3">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtp-2"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Price
                    </label>
                    <div className="relative w-full">
                      <input
                        id="hs-pro-epdvtp-2"
                        type="text"
                        className="py-2 ps-3 pe-12 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                        defaultValue={45.0}
                      />
                      <div className="absolute inset-y-0 end-2.5 flex items-center z-20 ps-[5px] text-sm text-stone-400 dark:text-neutral-600">
                        USD
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-4">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtq-2"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Quantity
                    </label>
                    <div
                      className="py-1.5 px-3 bg-white border border-stone-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                      data-hs-input-number=""
                    >
                      <div className="w-full flex justify-between items-center gap-x-3">
                        <input
                          id="hs-pro-epdvtq-2"
                          className="w-full min-w-12 p-0 bg-transparent border-0 text-stone-800 focus:ring-0 dark:text-white"
                          type="text"
                          defaultValue={10}
                          data-hs-input-number-input=""
                        />
                        <div className="flex justify-end items-center gap-x-1.5">
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-decrement=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-increment=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-full md:col-span-1 md:text-end">
                  <button
                    type="button"
                    className="py-1 px-3 md:px-1 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-full bg-stone-100 border border-transparent text-stone-600 hover:bg-stone-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-200 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                    data-hs-copy-markup-delete-item=""
                  >
                    <svg
                      className="hidden md:block shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span className="md:hidden">Delete</span>
                  </button>
                </div>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="pt-5 mt-5 border-t border-stone-200 first:pt-0 first:mt-0 first:border-t-0 md:pt-0 md:border-t-0 dark:border-neutral-700">
              <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-5 items-center">
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvts-3"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Size
                    </label>
                    <input
                      id="hs-pro-epdvts-3"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 uppercase placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      defaultValue={41}
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtc-3"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Color
                    </label>
                    <input
                      id="hs-pro-epdvtc-3"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      defaultValue="Yellow"
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-3">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtp-3"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Price
                    </label>
                    <div className="relative w-full">
                      <input
                        id="hs-pro-epdvtp-3"
                        type="text"
                        className="py-2 ps-3 pe-12 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                        defaultValue={45.0}
                      />
                      <div className="absolute inset-y-0 end-2.5 flex items-center z-20 ps-[5px] text-sm text-stone-400 dark:text-neutral-600">
                        USD
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-4">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtq-3"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Quantity
                    </label>
                    <div
                      className="py-1.5 px-3 bg-white border border-stone-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                      data-hs-input-number=""
                    >
                      <div className="w-full flex justify-between items-center gap-x-3">
                        <input
                          id="hs-pro-epdvtq-3"
                          className="w-full min-w-12 p-0 bg-transparent border-0 text-stone-800 focus:ring-0 dark:text-white"
                          type="text"
                          defaultValue={10}
                          data-hs-input-number-input=""
                        />
                        <div className="flex justify-end items-center gap-x-1.5">
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-decrement=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-increment=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-full md:col-span-1 md:text-end">
                  <button
                    type="button"
                    className="py-1 px-3 md:px-1 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-full bg-stone-100 border border-transparent text-stone-600 hover:bg-stone-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-200 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                    data-hs-copy-markup-delete-item=""
                  >
                    <svg
                      className="hidden md:block shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span className="md:hidden">Delete</span>
                  </button>
                </div>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="pt-5 mt-5 border-t border-stone-200 first:pt-0 first:mt-0 first:border-t-0 md:pt-0 md:border-t-0 dark:border-neutral-700">
              <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-5 items-center">
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvts-4"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Size
                    </label>
                    <input
                      id="hs-pro-epdvts-4"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 uppercase placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      defaultValue={42}
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtc-4"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Color
                    </label>
                    <input
                      id="hs-pro-epdvtc-4"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      defaultValue="Yellow"
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-3">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtp-4"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Price
                    </label>
                    <div className="relative w-full">
                      <input
                        id="hs-pro-epdvtp-4"
                        type="text"
                        className="py-2 ps-3 pe-12 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                        defaultValue={45.0}
                      />
                      <div className="absolute inset-y-0 end-2.5 flex items-center z-20 ps-[5px] text-sm text-stone-400 dark:text-neutral-600">
                        USD
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-4">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtq-4"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Quantity
                    </label>
                    <div
                      className="py-1.5 px-3 bg-white border border-stone-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                      data-hs-input-number=""
                    >
                      <div className="w-full flex justify-between items-center gap-x-3">
                        <input
                          id="hs-pro-epdvtq-4"
                          className="w-full min-w-12 p-0 bg-transparent border-0 text-stone-800 focus:ring-0 dark:text-white"
                          type="text"
                          defaultValue={10}
                          data-hs-input-number-input=""
                        />
                        <div className="flex justify-end items-center gap-x-1.5">
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-decrement=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-increment=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-full md:col-span-1 md:text-end">
                  <button
                    type="button"
                    className="py-1 px-3 md:px-1 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-full bg-stone-100 border border-transparent text-stone-600 hover:bg-stone-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-200 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                    data-hs-copy-markup-delete-item=""
                  >
                    <svg
                      className="hidden md:block shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span className="md:hidden">Delete</span>
                  </button>
                </div>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="pt-5 mt-5 border-t border-stone-200 first:pt-0 first:mt-0 first:border-t-0 md:pt-0 md:border-t-0 dark:border-neutral-700">
              <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-5 items-center">
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvts-5"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Size
                    </label>
                    <input
                      id="hs-pro-epdvts-5"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 uppercase placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      defaultValue={43}
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-2">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtc-5"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Color
                    </label>
                    <input
                      id="hs-pro-epdvtc-5"
                      type="text"
                      className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                      defaultValue="Yellow"
                    />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-3">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtp-5"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Price
                    </label>
                    <div className="relative w-full">
                      <input
                        id="hs-pro-epdvtp-5"
                        type="text"
                        className="py-2 ps-3 pe-12 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                        defaultValue={45.0}
                      />
                      <div className="absolute inset-y-0 end-2.5 flex items-center z-20 ps-[5px] text-sm text-stone-400 dark:text-neutral-600">
                        USD
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-1 md:col-span-4">
                  {/* Input */}
                  <div>
                    <label
                      htmlFor="hs-pro-epdvtq-5"
                      className="md:hidden mb-1.5 block text-xs uppercase text-stone-500 dark:text-neutral-500"
                    >
                      Quantity
                    </label>
                    <div
                      className="py-1.5 px-3 bg-white border border-stone-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                      data-hs-input-number=""
                    >
                      <div className="w-full flex justify-between items-center gap-x-3">
                        <input
                          id="hs-pro-epdvtq-5"
                          className="w-full min-w-12 p-0 bg-transparent border-0 text-stone-800 focus:ring-0 dark:text-white"
                          type="text"
                          defaultValue={10}
                          data-hs-input-number-input=""
                        />
                        <div className="flex justify-end items-center gap-x-1.5">
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-decrement=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-input-number-increment=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-span-full md:col-span-1 md:text-end">
                  <button
                    type="button"
                    className="py-1 px-3 md:px-1 inline-flex justify-center items-center gap-x-1.5 font-medium text-sm rounded-full bg-stone-100 border border-transparent text-stone-600 hover:bg-stone-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-200 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                    data-hs-copy-markup-delete-item=""
                  >
                    <svg
                      className="hidden md:block shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    <span className="md:hidden">Delete</span>
                  </button>
                </div>
              </div>
            </div>
            {/* End Card */}
          </div>
          {/* End List */}
        </div>
        {/* End Body */}
        {/* Footer */}
        <div className="py-3 px-5 flex justify-between items-center gap-x-5 border-b border-stone-200 dark:border-neutral-700">
          {/* Add Variant */}
          <p>
            <button
              id="copy-markup"
              type="button"
              data-hs-copy-markup='{
                "targetSelector": "#hs-content-for-copy",
                "wrapperSelector": "#hs-wrapper-for-copy"
              }'
              className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-stone-200 bg-white text-stone-800 hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              <svg
                className="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Add variant
            </button>
          </p>
          {/* End Add Variant */}
        </div>
        {/* End Footer */}
      </div>
      {/* End Variants Card */}
    </>
  )
}

const ProductPrice: React.FC = () => {
  const { register } = useFormContext()

  return (
    <>
      {/* Product Pricing Card */}
      <div className="flex flex-col bg-white border border-stone-200 overflow-hidden rounded-xl shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
        {/* Header */}
        <div className="py-3 px-5 flex justify-between items-center gap-x-5 border-b border-stone-200 dark:border-neutral-700">
          <h2 className="inline-block font-semibold text-stone-800 dark:text-neutral-200">
            Pricing
          </h2>
        </div>
        {/* End Header */}
        {/* Body */}
        <div
          id="hs-product-details-pricing-card-body"
          className="p-5 space-y-4"
        >
          {/* Input */}
          <div>
            <label
              htmlFor="hs-pro-daufpr"
              className="block mb-2 text-sm font-medium text-stone-800 dark:text-neutral-200"
            >
              Price
            </label>
            <div className="relative w-full">
              <input
                {...register('price')}
                type="text"
                className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
                placeholder="0.0"
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-[5px] text-stone-400">
                {/* Select */}
                <div className="relative">
                  <select
                    data-hs-select='{
                        "placeholder": "Select option...",
                        "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-stone-800 rounded-lg hover:bg-stone-100 focus:outline-none focus:bg-stone-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",
                        "dropdownClasses": "end-0 mt-2 p-1 z-50 w-24 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950",
                        "optionClasses": "hs-selected:bg-stone-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-stone-800 rounded-lg cursor-pointer hover:bg-stone-100 rounded-lg focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-stone-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                        "viewport": "#hs-product-details-pricing-card-body"
                      }'
                    className="hidden"
                  >
                    <option value="">Choose</option>
                    <option selected value="USD">
                      USD
                    </option>
                    <option value="EURO">EURO</option>
                    <option value="YUAN">YUAN</option>
                  </select>
                  <div className="absolute top-1/2 end-1.5 -translate-y-1/2">
                    <svg
                      className="shrink-0 size-3.5 text-stone-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
                {/* End Select */}
              </div>
            </div>
          </div>
          {/* End Input */}
          {/* Switch/Toggle */}
          <div className="py-2 px-3 flex justify-between items-center border border-stone-200 rounded-lg dark:border-neutral-700">
            <label
              htmlFor="hs-pro-epdas"
              className="inline-block flex-1 text-sm text-stone-800 dark:text-neutral-200"
            >
              Availability
            </label>
            <div className="relative inline-block">
              <input
                {...register("is_available")}
                type="checkbox"
                id="hs-pro-epdas"
                className="relative w-11 h-6 p-px bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                before:inline-block before:size-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
              />
            </div>
          </div>
          {/* End Switch/Toggle */}
          {/* Links List */}
          {/* <div>
            <p>
              <span className="inline-flex items-center gap-x-2 text-sm">
                <svg
                  className="shrink-0 size-4 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <a
                  className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                  href="#"
                >
                  Set "Compare to" price
                </a>
              </span>
            </p>
            <p>
              <span className="inline-flex items-center gap-x-2 text-sm">
                <svg
                  className="shrink-0 size-4 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <a
                  className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                  href="#"
                >
                  Bulk discount pricing
                </a>
              </span>
            </p>
          </div> */}
          {/* End Links List */}
        </div>
        {/* End Body */}
      </div>
      {/* End Product Pricing Card */}
    </>
  )
}

const Organization: React.FC = () => {
  return (
    <>
      {/* Organization Card */}
      <div className="flex flex-col bg-white border border-stone-200 overflow-hidden rounded-xl shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
        {/* Header */}
        <div className="py-3 px-5 flex justify-between items-center gap-x-5 border-b border-stone-200 dark:border-neutral-700">
          <h2 className="inline-block font-semibold text-stone-800 dark:text-neutral-200">
            Organization
          </h2>
        </div>
        {/* End Header */}
        {/* Body */}
        <div
          id="hs-add-product-organization-card-body"
          className="p-5 space-y-4"
        >
          {/* Input */}
          <div>
            <label
              htmlFor="hs-pro-daufvd"
              className="block mb-2 text-sm font-medium text-stone-800 dark:text-neutral-200"
            >
              Vendor
            </label>
            <input
              id="hs-pro-daufvd"
              type="text"
              className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
              placeholder="eg. Nike"
            />
          </div>
          {/* End Input */}
          {/* Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-stone-800 dark:text-neutral-200">
              Category
            </label>
            {/* Select */}
            <div className="relative">
              <select
                data-hs-select='{
                    "placeholder": "Select option...",
                    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-stone-200 rounded-lg text-start text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600",
                    "dropdownClasses": "mt-2 z-50 w-full min-w-36 max-h-72 z-50 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-900",
                    "optionClasses": "hs-selected:bg-stone-100 dark:hs-selected:bg-neutral-800 py-2 px-4 w-full text-sm text-stone-800 cursor-pointer hover:bg-stone-100 rounded-lg focus:outline-none focus:bg-stone-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-stone-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                  }'
                className="hidden"
              >
                <option value="">Choose</option>
                <option>Clothing</option>
                <option>Shoes</option>
                <option>Electronics</option>
                <option>Others</option>
              </select>
              <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
                <svg
                  className="shrink-0 size-3.5 text-stone-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m7 15 5 5 5-5" />
                  <path d="m7 9 5-5 5 5" />
                </svg>
              </div>
            </div>
            {/* End Select */}
          </div>
          {/* End Input */}
          {/* Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-stone-800 dark:text-neutral-200">
              Collections
            </label>
            {/* Select */}
            <div className="relative">
              <select
                data-hs-select='{
                    "placeholder": "Select option...",
                    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-stone-200 rounded-lg text-start text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600",
                    "dropdownClasses": "mt-2 z-50 w-full min-w-36 max-h-72 z-50 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-900",
                    "optionClasses": "hs-selected:bg-stone-100 dark:hs-selected:bg-neutral-800 py-2 px-4 w-full text-sm text-stone-800 cursor-pointer hover:bg-stone-100 rounded-lg focus:outline-none focus:bg-stone-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-stone-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                    "viewport": "#hs-add-product-organization-card-body"
                  }'
                className="hidden"
              >
                <option value="">Choose</option>
                <option>Winter</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Autumn</option>
              </select>
              <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
                <svg
                  className="shrink-0 size-3.5 text-stone-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m7 15 5 5 5-5" />
                  <path d="m7 9 5-5 5 5" />
                </svg>
              </div>
            </div>
            {/* End Select */}
            <p className="mt-1.5 text-xs text-stone-500 dark:text-neutral-500">
              Add this product to a collection so it’s easy to find in your
              store.
            </p>
          </div>
          {/* End Input */}
          {/* Input */}
          <div>
            <label
              htmlFor="hs-pro-dauftg"
              className="block mb-2 text-sm font-medium text-stone-800 dark:text-neutral-200"
            >
              Tags
            </label>
            <input
              id="hs-pro-dauftg"
              type="text"
              className="py-2 px-3 block w-full border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-500 focus:z-10 focus:border-green-600 focus:ring-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
              placeholder="Enter tags"
            />
          </div>
          {/* End Input */}
        </div>
        {/* End Body */}
      </div>
      {/* End Organization Card */}
    </>
  )
}