import React from 'react';

interface MainContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
  button: {
    id: string;
    title: string
  }
}

const MainContainer: React.FC<MainContainerProps> = ({ title, description, button, children }) => {
  return (
    <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div className="mb-4 xl:mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            {title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            {description}
          </p>
        </div>
        <div>
          <AddButton title={button.title} id={button.id} />
        </div>
      </div>
      <div className="space-y-5">
        {children}
      </div>
    </div>
  )
}

export default MainContainer

const AddButton: React.FC<{ id: string, title: string }> = ({ id, title }) => {
  return (
    <button
      type="button"
      className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      data-hs-overlay={`#${id}`}
    >
      <svg className="hidden sm:block flex-shrink-0 size-3 me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z" />
      </svg>
      <span className="hidden sm:block">Add</span>{title}
    </button>
  )
}