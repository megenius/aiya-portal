import React from 'react';

interface MainContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
  button: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ title, description, button, children }) => {
  return (
    <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
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
          {button}
        </div>
      </div>
      <div className="space-y-5">
        {children}
      </div>
    </div>
  )
}

export default MainContainer
