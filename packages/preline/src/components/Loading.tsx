import React from 'react';

interface LoadingProps {
  isLoading?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ isLoading = true }) => {
  return (
    <>
      {isLoading && (
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5 h-full w-full">
          <div className="flex justify-center">
            <div
              className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
};
