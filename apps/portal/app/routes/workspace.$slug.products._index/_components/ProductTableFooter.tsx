import React from 'react';

interface ProductTableFooterProps {

}

const ProductTableFooter: React.FC<ProductTableFooterProps> = () => {
  return (
    <>
      {/* Footer */}
      <div className="mt-5 flex flex-wrap justify-between items-center gap-2">
        <p className="text-sm text-stone-800 dark:text-neutral-200">
          <span className="font-medium">27</span>
          <span className="text-stone-500 dark:text-neutral-500">
            results
          </span>
        </p>
        {/* Pagination */}
        <nav
          className="flex justify-end items-center gap-x-1"
          aria-label="Pagination"
        >
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-stone-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
            aria-label="Previous"
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span className="sr-only">Previous</span>
          </button>
          <div className="flex items-center gap-x-1">
            <span
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-stone-100 text-stone-800 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:text-white"
              aria-current="page"
            >
              1
            </span>
            <span className="min-h-[38px] flex justify-center items-center text-stone-500 py-2 px-1.5 text-sm dark:text-neutral-500">
              of
            </span>
            <span className="min-h-[38px] flex justify-center items-center text-stone-500 py-2 px-1.5 text-sm dark:text-neutral-500">
              3
            </span>
          </div>
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-stone-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
            aria-label="Next"
          >
            <span className="sr-only">Next</span>
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </nav>
        {/* End Pagination */}
      </div>
      {/* End Footer */}
    </>
  );
};

export default ProductTableFooter;