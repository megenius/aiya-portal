import React from 'react';

const Title: React.FC = () => {
  return (
    <div className="mb-4 xl:mb-8">
      <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
        Profile
      </h1>
      <p className="text-sm text-gray-500 dark:text-neutral-500">
        Manage your name, password and account settings.
      </p>
    </div>
  );
};

export default Title;