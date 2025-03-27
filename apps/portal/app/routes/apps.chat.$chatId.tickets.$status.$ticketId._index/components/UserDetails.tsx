import React from "react";

interface UserDetail {
  label: string;
  value: string;
  icon: string;
  isLink?: boolean;
}

interface User {
  id: string;
  name: string;
  status: string;
  avatarUrl: string;
  details: UserDetail[];
}

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <aside 
      id="hs-pro-chhds1" 
      className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
      translate-x-full transition-all duration-300 transform
      sm:w-96 w-full
      hidden
      fixed bottom-0 end-0 z-10 top-0 h-full
      bg-white border-s border-gray-200
      2xl:block 2xl:translate-x-full 2xl:bottom-0
      dark:bg-neutral-800 dark:border-neutral-700" 
      tabIndex={-1} 
      aria-labelledby="hs-pro-chhds1-label"
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
          <span id="hs-pro-chhds1-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
            Details
          </span>
          {/* Close Button */}
          <div className="absolute top-2 end-4 z-10">
            <button 
              type="button" 
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" 
              aria-label="Close" 
              data-hs-overlay="#hs-pro-chhds1"
            >
              <span className="sr-only">Close</span>
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          {/* End Close Button */}
        </div>
        {/* End Header */}
        
        {/* Profile */}
        <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
          <img className="shrink-0 size-16 rounded-full" src={user.avatarUrl} alt={`${user.name}'s avatar`} />
          <div className="mt-2 w-full">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              {user.name}
            </h2>
            <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
              {user.status}
            </p>
            {/* Button Group */}
            <div className="mt-4 flex justify-center items-center gap-x-3">
              <button 
                type="button" 
                className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                  <rect width={18} height={18} x={3} y={4} rx={2} />
                  <circle cx={12} cy={10} r={2} />
                  <line x1={8} x2={8} y1={2} y2={4} />
                  <line x1={16} x2={16} y1={2} y2={4} />
                </svg>
                View profile
              </button>
              <button 
                type="button" 
                className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect width={20} height={16} x={2} y={4} rx={2} />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Send email
              </button>
            </div>
            {/* End Button Group */}
          </div>
        </div>
        {/* End Profile */}
        
        {/* Body */}
        <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div className="hs-accordion-group" data-hs-accordion-always-open>
            {/* User Details Section */}
            <UserDetailsSection user={user} />
            
            {/* Shared Media Section */}
            <div className="hs-accordion active" id="hs-pro-chdssmc1">
              <button 
                type="button" 
                className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" 
                aria-expanded="true" 
                aria-controls="hs-pro-chdssmc1-collapse"
              >
                <span className="text-sm font-medium">Shared media</span>
                <AccordionArrow />
              </button>
              <div 
                id="hs-pro-chdssmc1-collapse" 
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" 
                role="region" 
                aria-labelledby="hs-pro-chdssmc1"
              >
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Only shared images appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Body */}
      </div>
    </aside>
  );
};

interface UserDetailsSectionProps {
  user: User;
}

const UserDetailsSection: React.FC<UserDetailsSectionProps> = ({ user }) => {
  return (
    <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc1">
      <button 
        type="button" 
        className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" 
        aria-expanded="true" 
        aria-controls="hs-pro-chdsudc1-collapse"
      >
        <span className="text-sm font-medium">User details</span>
        <AccordionArrow />
      </button>
      <div 
        id="hs-pro-chdsudc1-collapse" 
        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" 
        role="region" 
        aria-labelledby="hs-pro-chdsudc1"
      >
        <div className="px-5 pb-5">
          {user.details.map((detail, index) => (
            <UserDetailItem key={index} detail={detail} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface UserDetailItemProps {
  detail: UserDetail;
}

const UserDetailItem: React.FC<UserDetailItemProps> = ({ detail }) => {
  const { label, value, icon, isLink } = detail;
  
  // Map of icon names to SVG elements
  const icons: Record<string, React.ReactNode> = {
    company: (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12h.01" />
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
        <rect width={20} height={14} x={2} y={6} rx={2} />
      </svg>
    ),
    location: (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx={12} cy={10} r={3} />
      </svg>
    ),
    email: (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect width={20} height={16} x={2} y={4} rx={2} />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    phone: (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    website: (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={12} cy={12} r={10} />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  };
  
  return (
    <dl className="py-1 flex items-center gap-x-4">
      <dt className="w-full max-w-28">
        <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
          {icons[icon] || null}
          {label}:
        </p>
      </dt>
      <dd className="grow">
        {isLink ? (
          <a className="align-top text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-hidden focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
            {value}
          </a>
        ) : (
          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
            {value}
          </p>
        )}
      </dd>
    </dl>
  );
};

const AccordionArrow: React.FC = () => {
  return (
    <>
      <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
      <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
      </svg>
    </>
  );
};

export default UserDetails;
