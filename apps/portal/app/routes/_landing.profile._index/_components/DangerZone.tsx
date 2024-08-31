import React from 'react';

interface DangerZoneProps {

}

const DangerZone: React.FC<DangerZoneProps> = () => {
  return (
    <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
      {/* Grid */}
      <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
        <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
          <label className="inline-block text-sm text-gray-500 dark:text-neutral-500">
            Danger zone
          </label>
        </div>
        {/* End Col */}
        <div className="sm:col-span-8 xl:col-span-4">
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-red-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          >
            Delete my account
          </button>
          <p className="mt-3 text-sm text-gray-500 dark:text-neutral-500">
            This will immediately delete all of your data. This action is
            not reversible, so please continue with caution.{" "}
            <a
              className="text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500"
              href="#"
            >
              Learn more
            </a>
          </p>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default DangerZone;