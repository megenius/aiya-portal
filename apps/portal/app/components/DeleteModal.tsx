import { cn } from '@repo/ui/utils';
import { HSOverlay } from 'preline/preline';
import React, { ReactNode, useEffect, useRef } from 'react';

interface DeleteModalProps {
  id: string;
  title: string;
  className?: string;
  onOk?: (values: Record<string, string>) => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ id, title, className }) => {

  const handleOk = () => {
  }

  return (
    <div
      id={id}
      className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] pointer-events-none"
      role="dialog"
      tabIndex={-1}
      aria-labelledby={`${id}-label`}
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-md sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="relative w-full max-h-full overflow-hidden flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]">
          {/* Close Button */}
          <div className="absolute top-3 end-3 z-10">
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200"
              aria-label="Close"
              data-hs-overlay="#hs-pro-chhdl"
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
          {/* End Close Button */}
          {/* Body */}
          <div className="p-4 ">
            <h3
              id="hs-pro-chhdl-label"
              className="text-lg font-medium text-gray-800"
            >
              Are you sure?
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Are you sure you want to delete this message?
            </p>
            {/* Checkbox */}
            <div className="mt-5 flex items-center">
              <input
                type="checkbox"
                className="shrink-0 size-3.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                id="hs-pro-chhdlcch"
              />
              <label
                htmlFor="hs-pro-chhdlcch"
                className="text-sm text-gray-600 ms-2"
              >
                Don't show me this again
              </label>
            </div>
            {/* End Checkbox */}
            {/* Button Group */}
            <div className="mt-5 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                data-hs-overlay="#hs-pro-chhdl"
              >
                Cancel
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleOk}
              >
                Yes, I’m sure
              </button>
            </div>
            {/* End Button Group */}
          </div>
          {/* End Body */}
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

