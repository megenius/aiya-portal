import React, { useState } from 'react';
import { ResponseElement } from '@repo/shared';

interface TextEditorProps {
  response: ResponseElement;
  onChanged,
  onDelete
}

const TextEditor: React.FC<TextEditorProps> = ({
  response,
  onChanged,
  onDelete
}) => {
  const [input, setInput] = useState(response.payload?.text);
  const maxLength = 1000

  return (
    <>
      <div
        id={`hs-offcanvas-${response.id}`}
        className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full flex-1 flex flex-col fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xl w-full z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="hs-offcanvas-example-label"
      >
        <div className="flex justify-between items-center py-3 px-4 border-b">
          <h3 id="hs-offcanvas-example-label" className="font-bold text-gray-800">
            Text Message<span className='text-gray-400 ps-2'>{response.id}</span>
          </h3>
          <button
            type="button"
            className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Close"
            data-hs-overlay={`#hs-offcanvas-${response.id}`}
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
          <textarea
            // ref={textareaRef}
            id="hs-pro-message-text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            rows={12}
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value.slice(0, maxLength))}
            maxLength={maxLength}
          />
          <div className="mt-2 text-sm text-gray-500 text-right">
            {input.length} / {maxLength}
          </div>
        </div>

        <div className="p-5 border-t border-gray-200 dark:border-neutral-700">
          <div className="flex items-center gap-x-2">
            {/* Button */}
            <button
              type="button"
              className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => onChanged({ ...response, payload: { text: input } })}
              data-hs-overlay={`#hs-offcanvas-${response.id}`}
            >
              Save
            </button>
            {/* End Button */}
            {/* Button */}
            <button
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
            </button>
            {/* End Button */}
          </div>
        </div>

      </div >
    </>
  )
}
export default TextEditor;