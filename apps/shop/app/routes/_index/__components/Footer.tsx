import React from 'react';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mt-auto  bg-white border-t border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
      <div className="w-full max-w-[85rem] mx-auto pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3">
          {/* Input Group */}
          <div className="max-w-md">
            <label
              htmlFor="hs-pro-shfsei"
              className="block mb-2 font-medium text-gray-800 dark:text-neutral-200"
            >
              Subscribe &amp; get 10% off
            </label>
            <div className="flex items-center gap-2">
              <input
                id="hs-pro-shfsei"
                type="text"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder-neutral-600 dark:focus:ring-neutral-600"
                placeholder="Enter email address"
              />
              <button
                type="button"
                className="py-3 px-4 whitespace-nowrap inline-flex justify-center items-center gap-x-2 sm:text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                Sign up
              </button>
            </div>
          </div>
          {/* End Input Group */}
        </div>
        {/* End Col */}
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          <div>
            <h4 className="mb-3 font-medium text-sm text-gray-800 dark:text-neutral-200">
              Help
            </h4>
            <ul className="grid space-y-2">
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Subscription
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Order Status
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Returns &amp; Exchanges
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* End Col */}
          <div>
            <h4 className="mb-3 font-medium text-sm text-gray-800 dark:text-neutral-200">
              Resources
            </h4>
            <ul className="grid space-y-2">
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Find a Store
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Membership
                </a>
              </li>
            </ul>
          </div>
          {/* End Col */}
          <div>
            <h4 className="mb-3 font-medium text-sm text-gray-800 dark:text-neutral-200">
              Company
            </h4>
            <ul className="grid space-y-2">
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  New features
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Purpose
                </a>
              </li>
            </ul>
          </div>
          {/* End Col */}
          <div className="space-y-10">
            {/* List */}
            <div className="space-y-3">
              <button
                type="button"
                className="flex items-center gap-x-1.5 text-start text-sm text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                data-hs-overlay="#hs-pro-shnlm"
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
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                Location
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
              </button>
              <button
                type="button"
                className="flex items-center gap-x-1.5 text-start text-sm text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                data-hs-overlay="#hs-pro-shnrsm"
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
                  <circle cx={12} cy={12} r={10} />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                United Kingdom
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
              </button>
              <button
                type="button"
                className="flex items-center gap-x-1.5 text-start text-sm text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                data-hs-overlay="#hs-pro-shwrm"
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
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Send us feedback
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
              </button>
            </div>
            {/* End List */}
            <div>
              <h4 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                Stay connected
              </h4>
              {/* Social Brands */}
              <div className="mt-3 md:mt-5 space-x-4">
                <a
                  className="relative inline-block text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
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
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  className="relative inline-block text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-3.5"
                    width={48}
                    height={50}
                    viewBox="0 0 48 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5665 20.7714L46.4356 0H42.2012L26.6855 18.0355L14.2931 0H0L18.7397 27.2728L0 49.0548H4.23464L20.6196 30.0087L33.7069 49.0548H48L28.5655 20.7714H28.5665ZM22.7666 27.5131L5.76044 3.18778H12.2646L42.2032 46.012H35.699L22.7666 27.5142V27.5131Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">X (Twitter)</span>
                </a>
                <a
                  className="relative inline-block text-sm text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
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
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
              {/* End Social Brands */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      <div className="w-full max-w-[85rem] pb-10 lg:pb-20 mx-auto px-4 sm:px-6 lg:px-8">
        {/* List */}
        <ul className="flex flex-wrap  items-center whitespace-nowrap gap-3">
          <li className="inline-flex items-center relative text-xs text-gray-500 pe-3.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2 dark:text-neutral-500 dark:after:bg-neutral-600">
            © 2024 Preline Labs.
          </li>
          <li className="inline-flex items-center relative text-xs text-gray-500 pe-3.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2 dark:text-neutral-500 dark:after:bg-neutral-600">
            <a
              className="text-xs text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              Terms
            </a>
          </li>
          <li className="inline-flex items-center relative text-xs text-gray-500 pe-3.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2 dark:text-neutral-500 dark:after:bg-neutral-600">
            <a
              className="text-xs text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              Privacy
            </a>
          </li>
          <li className="inline-flex items-center relative text-xs text-gray-500 pe-3.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2 dark:text-neutral-500 dark:after:bg-neutral-600">
            <a
              className="text-xs text-gray-500 underline-offset-4 hover:underline hover:text-gray-800 focus:outline-none focus:underline focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              Your Privacy Choices
            </a>
          </li>
          <li className="inline-flex items-center relative text-xs text-gray-500 pe-3.5 last:pe-0 last:after:hidden after:absolute after:top-1/2 after:end-0 after:inline-block after:size-[3px] after:bg-gray-400 after:rounded-full after:-translate-y-1/2 dark:text-neutral-500 dark:after:bg-neutral-600">
            {/* Dark Mode */}
            <button
              type="button"
              className="hs-dark-mode-active:hidden flex hs-dark-mode items-center gap-x-1.5 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              data-hs-theme-click-value="dark"
            >
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
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              <span className="sr-only">Dark mode</span>
            </button>
            <button
              type="button"
              className="hs-dark-mode-active:flex hidden hs-dark-mode items-center gap-x-1.5 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              data-hs-theme-click-value="light"
            >
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
                <circle cx={12} cy={12} r={4} />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
              <span className="sr-only">Light mode</span>
            </button>
            {/* End Dark Mode */}
          </li>
        </ul>
        {/* End List */}
      </div>
    </footer>
  );
};

export default Footer;