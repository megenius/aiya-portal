import React from 'react';

interface PaymentMethodProps {

}

const PaymentMethod: React.FC<PaymentMethodProps> = () => {
  return (
    <>                      {/* Manage Cards Modal */}
      <div className="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Body */}
        <div className="h-full p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
            Payment methods
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
            Add and manage your payment methods using our secure payment system.
          </p>
          <div className="mt-4">
            {/* List Group */}
            <ul className="flex flex-col bg-white border border-gray-200 rounded-xl -space-y-px dark:bg-neutral-800 dark:border-neutral-700">
              {/* List Item */}
              <li className="p-4 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
                {/* Media */}
                <div className="flex gap-x-3">
                  {/* Logo */}
                  <div>
                    <div className="py-2.5 px-3 border rounded-lg dark:border-neutral-700">
                      <svg className="shrink-0 w-8 h-auto" width={35} height={22} viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_666_270977asdasd" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={0} y={5} width={35} height={12}>
                          <path d="M34.5 5.4751H0.5V16.5081H34.5V5.4751Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_666_270977asdasd)">
                          <path d="M15.239 16.3211H12.468L14.202 5.6621H16.973L15.239 16.3211ZM10.139 5.6621L7.487 12.9891L7.181 11.4081L6.246 6.6311C6.246 6.6311 6.127 5.6791 4.937 5.6791H0.551L0.5 5.8491C0.5 5.8491 1.843 6.1211 3.407 7.0731L5.821 16.3381H8.711L13.131 5.6791L10.139 5.6621ZM31.95 16.3211H34.5L32.273 5.6621H30.046C29.009 5.6621 28.771 6.4611 28.771 6.4611L24.64 16.3211H27.53L28.108 14.7401H31.627L31.95 16.3211ZM28.907 12.5471L30.369 8.5521L31.185 12.5471H28.907ZM24.844 8.2291L25.235 5.9341C25.235 5.9341 24.011 5.4751 22.736 5.4751C21.359 5.4751 18.095 6.0701 18.095 9.0111C18.095 11.7651 21.937 11.7991 21.937 13.2441C21.937 14.6891 18.503 14.4341 17.364 13.5161L16.956 15.9131C16.956 15.9131 18.197 16.5081 20.084 16.5081C21.971 16.5081 24.827 15.5221 24.827 12.8531C24.827 10.0821 20.951 9.8271 20.951 8.6201C20.951 7.4131 23.654 7.5661 24.844 8.2291Z" fill="#2566AF" />
                          <path d="M7.181 11.4252L6.246 6.6312C6.246 6.6312 6.127 5.6792 4.937 5.6792H0.551L0.5 5.8492C0.5 5.8492 2.608 6.2912 4.614 7.9232C6.552 9.4702 7.181 11.4252 7.181 11.4252Z" fill="#E6A540" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* End Logo */}
                  {/* Body */}
                  <div className="grow flex flex-col sm:flex-row sm:justify-between gap-y-2 sm:gap-x-3">
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Visa •••• 9016
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-500">
                        Debit Expires 12/25
                      </p>
                    </div>
                    {/* Button Group */}
                    <div className="flex gap-x-2">
                      <div>
                        <button type="button" className="py-2 px-2.5 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" disabled>
                          Default
                        </button>
                      </div>
                      <div>
                        <button type="button" className="py-2 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-300 dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-deacm">
                          Edit
                        </button>
                      </div>
                    </div>
                    {/* End Button Group */}
                  </div>
                  {/* End Body */}
                </div>
                {/* End Media */}
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="p-4 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
                {/* Media */}
                <div className="flex gap-x-3">
                  {/* Logo */}
                  <div>
                    <div className="py-2.5 px-3 border rounded-lg dark:border-neutral-700">
                      <svg className="shrink-0 w-8 h-auto" width={35} height={22} viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="asfasfa1123f33123" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={0} y={0} width={35} height={22}>
                          <path d="M34.5 0.375H0.5V21.387H34.5V0.375Z" fill="white" />
                        </mask>
                        <g mask="url(#asfasfa1123f33123)">
                          <path d="M22.0899 19.1431H12.9099V2.61914H22.0899V19.1431Z" fill="#FF5F00" />
                          <path d="M13.488 10.881C13.488 7.532 15.052 4.54 17.5 2.619C15.647 1.157 13.369 0.375 11.006 0.375C5.209 0.375 0.5 5.084 0.5 10.881C0.5 16.678 5.209 21.387 11.006 21.387C13.369 21.387 15.647 20.605 17.5 19.143C15.052 17.222 13.488 14.23 13.488 10.881Z" fill="#EB001B" />
                          <path d="M34.5 10.881C34.5 16.678 29.791 21.387 23.994 21.387C21.631 21.387 19.353 20.605 17.5 19.143C19.948 17.222 21.512 14.23 21.512 10.881C21.512 7.532 19.948 4.54 17.5 2.619C19.353 1.157 21.631 0.375 23.994 0.375C29.791 0.375 34.5 5.084 34.5 10.881Z" fill="#F79E1B" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* End Logo */}
                  {/* Body */}
                  <div className="grow flex flex-col sm:flex-row sm:justify-between gap-y-2 sm:gap-x-3">
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                        MasterCard •••• 4242
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-500">
                        Debit Expires 04/24
                      </p>
                    </div>
                    {/* Button Group */}
                    <div className="flex gap-x-2">
                      <div>
                        <button type="button" className="py-2 px-2.5 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                          Set as default
                        </button>
                      </div>
                      <div>
                        <button type="button" className="py-2 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-300 dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-deacm">
                          Edit
                        </button>
                      </div>
                    </div>
                    {/* End Button Group */}
                  </div>
                  {/* End Body */}
                </div>
                {/* End Media */}
              </li>
              {/* End List Item */}
            </ul>
            {/* End List Group */}
          </div>
        </div>
        {/* End Body */}
        {/* Footer */}
        <div className="flex -space-x-px border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <button type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-dmcm">
            Manage cards
          </button>
          <button type="button" className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-dmacm">
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx={12} cy={12} r={10} />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
            Add new card
          </button>
        </div>
        {/* End Footer */}
      </div>
      {/* End Manage Cards Modal */}
    </>
  );
};

export default PaymentMethod;