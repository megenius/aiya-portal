import React from 'react';

interface WelcomeProps {

}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <div className="p-2 sm:p-5 sm:pb-0">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <h2 className="inline-block text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Welcome
            </h2>
          </div>
          <div className="flex items-center gap-x-2">
            <button
              type="button"
              className="p-2 inline-flex justify-center items-center gap-x-2 border border-transparent text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch intro
            </button>
            <button
              type="button"
              className="p-2 inline-flex justify-center items-center gap-x-2 border border-transparent text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
                <line x1={16} x2={16} y1={2} y2={6} />
                <line x1={8} x2={8} y1={2} y2={6} />
                <line x1={3} x2={21} y1={10} y2={10} />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              Book a demo
            </button>
          </div>
        </div>
        {/* End Header */}
        <div className="my-4">
          <div className="space-y-4">
            {/* Card */}
            <div className="p-5 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="grid sm:grid-cols-12 gap-4">
                <div className="sm:col-span-5 sm:order-2">
                  <div className="bg-gray-100 rounded-xl overflow-hidden dark:bg-neutral-700">
                    <img
                      className="ps-5 pt-5 w-full"
                      src="../assets/svg/pro/analytics-demo.svg"
                      alt="Template Image"
                    />
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-7 sm:order-1">
                  <div className="h-full flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                        Explore the most popular Preline dashboard templates
                      </h3>
                      <p className="mt-1 sm:mt-3 text-gray-500 dark:text-neutral-500">
                        Grab the ones that fit your marketing strategy
                      </p>
                    </div>
                    <p>
                      <a
                        className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500"
                        href="#"
                      >
                        Explore templates
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
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
                {/* End Col */}
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="p-5 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="grid sm:grid-cols-12 gap-4">
                <div className="sm:col-span-5 sm:order-2">
                  <div className="bg-blue-100 rounded-xl overflow-hidden dark:bg-blue-900">
                    <img
                      className="ps-5 pt-5 w-full"
                      src="../assets/svg/pro/analytics-demo.svg"
                      alt="Template Image"
                    />
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:col-span-7 sm:order-1">
                  <div className="h-full flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                        Documentation
                      </h3>
                      <p className="mt-1 sm:mt-3 text-gray-500 dark:text-neutral-500">
                        Whether you're a startup or a global enterprise, learn how
                        to integrate with Preline.
                      </p>
                    </div>
                    <p>
                      <a
                        className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500"
                        href="#"
                      >
                        Learn more
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
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
                {/* End Col */}
              </div>
            </div>
            {/* End Card */}
          </div>
        </div>
        {/* Card */}
        <div className="py-10 px-5 relative overflow-hidden text-center bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
              Invite friends
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              Invite teammates to collaborate in Preline
            </p>
            <div className="mt-3 sm:mt-5">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-overlay="#hs-pro-dshm"
              >
                Send an invite
              </button>
            </div>
          </div>
          <div className="absolute top-5 start-10">
            <img
              className="shrink-0 size-10 rounded-full"
              src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
              alt="Avatar"
            />
          </div>
          <div className="hidden sm:block absolute top-20 start-20">
            <img
              className="shrink-0 size-14 rounded-full"
              src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
              alt="Avatar"
            />
          </div>
          <div className="absolute bottom-5 start-40">
            <img
              className="shrink-0 size-8 rounded-full"
              src="https://images.unsplash.com/photo-1568048689711-5e0325cea8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
              alt="Avatar"
            />
          </div>
          <div className="absolute bottom-3 start-8">
            <img
              className="shrink-0 size-8 rounded-full"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
              alt="Avatar"
            />
          </div>
          <div className="absolute -top-5 end-40">
            <img
              className="shrink-0 size-14 rounded-full"
              src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
          </div>
          <div className="absolute top-7 end-14">
            <img
              className="shrink-0 size-8 rounded-full"
              src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
          </div>
          <div className="hidden sm:block absolute top-20 end-20">
            <img
              className="shrink-0 size-14 rounded-full"
              src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
          </div>
          <div className="hidden sm:block absolute bottom-5 end-40">
            <img
              className="shrink-0 size-8 rounded-full"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
              alt="Avatar"
            />
          </div>
          <div className="absolute bottom-3 end-8">
            <img
              className="shrink-0 size-8 rounded-full"
              src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
              alt="Avatar"
            />
          </div>
        </div>
        {/* End Card */}
      </div>
    </div>

  );
};

export default Welcome;