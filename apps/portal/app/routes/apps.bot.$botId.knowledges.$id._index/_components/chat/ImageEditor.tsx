import React, { useCallback, useEffect, useState } from 'react';
import { ImageMessageResponse, IntentResponse } from '~/@types/app';
import { useDropzone } from 'react-dropzone-esm'
import { useFileUpload } from '~/hooks/useFileUpload';
import { useFileDelete } from '~/hooks/useFileDelete';
import { getDirectusFileUrl } from '~/utils/files';
import Lightbox from 'yet-another-react-lightbox';
import { useBotMessageFileUpload } from '~/hooks/useBotMessageFileUpload';
import { useParams } from '@remix-run/react';

interface ImageEditorProps {
  id?: string;
  response?: ImageMessageResponse;
  onChanged?,
  onDelete?
}

const ImageEditor: React.FC<ImageEditorProps> = ({
  id,
  response,
  onChanged,
  onDelete
}) => {
  const { botId } = useParams()
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState<ImageMessageResponse>(response || { id: 'new-image', payload: { url: '', alt: "" } });
  const fileUpload = useBotMessageFileUpload()
  const fileDelete = useFileDelete()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      processFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png']
    },
    multiple: false
  });

  const processFile = async (file: File) => {
    console.log(file);
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    fileUpload.mutateAsync({
      path: `${botId}/images`,
      file
    }, {
      onSuccess: (data) => {
        setInput({ ...input, payload: { url: data.url, alt: data.filename_download } })
      }
    });

  }

  useEffect(() => {
    if (response) {
      setInput(response)
    }
  }, [response, id, onChanged, onDelete])

  return (
    <>
      <div
        id={`hs-offcanvas-${id || response?.id}`}
        className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full flex-1 flex flex-col fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xl w-full z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="hs-offcanvas-example-label"
      >
        <div className="flex justify-between items-center py-3 px-4 border-b">
          <h3 id="hs-offcanvas-example-label" className="font-bold text-gray-800">
            Image Message<span className='text-gray-400 ps-2'>{id || response?.id}</span>
          </h3>
          <button
            type="button"
            className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Close"
            data-hs-overlay={`#hs-offcanvas-${id || response?.id}`}
          >
            <span className="sr-only">Close</span>
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
        <div className="p-4 h-full overflow-hidden">
          {input.payload.url ? (
            <>
              <div>
                <img src={input.payload.url} alt={input.payload.alt} className="w-full h-auto cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              </div>
              <div className='pt-2'>
                {/* reset button */}
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-red-500 text-red-500 hover:border-red-400 focus:outline-none focus:border-red-400 focus:text-red-400 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() => setInput({ ...response, id: response?.id as string, payload: { url: '', alt: "" } })}>Reset</button>
              </div>
            </>
          ) :
            <div {...getRootProps()} className="cursor-pointer">
              <div className="flex items-center justify-center w-full p-12 bg-white border border-dashed border-gray-300 rounded-xl">
                <input {...getInputProps()} />
                <div className="text-center">
                  <svg
                    className="w-16 text-gray-400 mx-auto"
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
                      className="fill-white stroke-gray-400"
                    />
                    <path
                      d="M63.9483 9.36853L52.7869 7.5083V41.3608L57.6982 42.3947C60.9869 43.0871 64.203 40.9434 64.8292 37.6414L68.8568 16.4049C69.484 13.0978 67.2685 9.92191 63.9483 9.36853Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="fill-white stroke-gray-400"
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
                      className="fill-white stroke-gray-400"
                    />
                    <path
                      d="M47.9344 44.3772H22.0655C19.3041 44.3772 17.0656 42.1386 17.0656 39.3772L17.0656 35.9161L29.4724 22.7682L38.9825 33.7121C39.7832 34.6335 41.2154 34.629 42.0102 33.7025L47.2456 27.5996L52.9344 33.7209V39.3772C52.9344 42.1386 50.6958 44.3772 47.9344 44.3772Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="stroke-gray-400"
                    />
                    <circle
                      cx="39.5902"
                      cy="14.9672"
                      r="4.16393"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="stroke-gray-400"
                    />
                  </svg>
                  <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
                    <span className="pe-1 font-medium text-gray-800">
                      {isDragActive ? "Drop the files here" : "Drop your files here or"}
                    </span>
                    {!isDragActive && (
                      <span className="relative cursor-pointer bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2">
                        browse
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-gray-400">JPG, PNG</p>
                </div>
              </div>
            </div>
          }


        </div>

        <div className="p-5 border-t border-gray-200 dark:border-neutral-700">
          <div className="flex items-center gap-x-2">
            {/* Button */}
            <button
              type="button"
              className="py-2 px-3 w-64 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => onChanged?.(input)}
              data-hs-overlay={`#hs-offcanvas-${id || response?.id}`}
            >
              Save
            </button>
            {/* End Button */}
            {/* Button */}
            {/* <button
              type="button"
              className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              <svg
                className="hidden sm:block shrink-0 size-4"
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
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1={10} x2={10} y1={11} y2={17} />
                <line x1={14} x2={14} y1={11} y2={17} />
              </svg>
              Delete
            </button> */}
            {/* End Button */}
          </div>
        </div>

        <Lightbox
          carousel={{ finite: true }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[{
            src: response?.payload?.url || ""
            , alt: response?.payload.alt
          }]}
        />
      </div >
    </>
  )
}
export default ImageEditor;