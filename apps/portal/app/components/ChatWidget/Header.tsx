import React from 'react';

interface HeaderProps {
  icon?: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      {/* Header */}
      <div className="py-2 px-4 flex justify-between items-center gap-x-3 border-b border-gray-200">
        {/* Avatar */}
        <div className="w-full">
          <div className="truncate flex items-center gap-x-2">
            <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="../../pro/chat/index.html" aria-label="Preline">
              <svg className="w-7 h-auto" width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.0835 3.23358C9.88316 3.23358 3.23548 9.8771 3.23548 18.0723V35.5832H0.583496V18.0723C0.583496 8.41337 8.41851 0.583252 18.0835 0.583252C27.7485 0.583252 35.5835 8.41337 35.5835 18.0723C35.5835 27.7312 27.7485 35.5614 18.0835 35.5614H16.7357V32.911H18.0835C26.2838 32.911 32.9315 26.2675 32.9315 18.0723C32.9315 9.8771 26.2838 3.23358 18.0835 3.23358Z" className="fill-blue-600" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M18.0833 8.62162C12.8852 8.62162 8.62666 12.9245 8.62666 18.2879V35.5833H5.97468V18.2879C5.97468 11.5105 11.3713 5.97129 18.0833 5.97129C24.7954 5.97129 30.192 11.5105 30.192 18.2879C30.192 25.0653 24.7954 30.6045 18.0833 30.6045H16.7355V27.9542H18.0833C23.2815 27.9542 27.54 23.6513 27.54 18.2879C27.54 12.9245 23.2815 8.62162 18.0833 8.62162Z" className="fill-blue-600" fill="currentColor" />
                <path d="M24.8225 18.1012C24.8225 21.8208 21.8053 24.8361 18.0833 24.8361C14.3614 24.8361 11.3442 21.8208 11.3442 18.1012C11.3442 14.3815 14.3614 11.3662 18.0833 11.3662C21.8053 11.3662 24.8225 14.3815 24.8225 18.1012Z" className="fill-blue-600" fill="currentColor" />
              </svg>
            </a>
            <span className="grow truncate">
              <span className="truncate block font-semibold text-sm leading-4 text-gray-800">
                {title}
              </span>
            </span>
          </div>
        </div>
        {/* End Avatar */}
        <div>
          {/* Button */}
          <button type="button" className="hs-dropdown-close flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100" aria-label="Close">
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            <span className="sr-only">Close</span>
          </button>
          {/* End Button */}
        </div>
      </div>
      {/* End Header */}
    </>
  );
};

export default Header;