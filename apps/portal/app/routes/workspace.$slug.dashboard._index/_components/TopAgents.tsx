import React from 'react';

interface TopAgentsProps {

}

const TopAgents: React.FC<TopAgentsProps> = () => {
  return (
    <div className="h-full flex flex-col bg-white border border-stone-200 shadow-sm rounded-xl">
      {/* Header */}
      <div className="p-5 pb-3 flex justify-between items-center">
        <h2 className="ms-1 inline-block font-semibold text-stone-800">
          Top countries
        </h2>
        <a
          className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline"
          href="#"
        >
          Reports
        </a>
      </div>
      {/* End Header */}
      {/* Body */}
      <div className="flex flex-col justify-between h-full pb-5 px-5">
        {/* Grid */}
        <div className="pt-3 grid grid-cols-3 items-end gap-4">
          {/* Progress */}
          <div className="text-center">
            <svg
              className="mb-3 shrink-0 size-8 rounded-full mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              id="flag-icon-css-us"
              viewBox="0 0 512 512"
            >
              <g fillRule="evenodd">
                <g strokeWidth="1pt">
                  <path
                    fill="#bd3d44"
                    d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                    transform="scale(3.9385)"
                  />
                  <path
                    fill="#fff"
                    d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                    transform="scale(3.9385)"
                  />
                </g>
                <path
                  fill="#192f5d"
                  d="M0 0h98.8v70H0z"
                  transform="scale(3.9385)"
                />
                <path
                  fill="#fff"
                  d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                  transform="scale(3.9385)"
                />
              </g>
            </svg>
            <div className="p-3 h-40 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-800">1st</p>
              <p className="mt-1 py-1 px-2.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-full bg-white border border-stone-200 text-stone-800">
                1,265
              </p>
            </div>
            <p className="mt-1.5 text-sm text-stone-800">United States</p>
          </div>
          {/* End Progress */}
          {/* Progress */}
          <div className="text-center">
            <svg
              className="mb-3 shrink-0 size-8 rounded-full mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              id="flag-icon-css-de"
              viewBox="0 0 512 512"
            >
              <path fill="#ffce00" d="M0 341.3h512V512H0z" />
              <path d="M0 0h512v170.7H0z" />
              <path fill="#d00" d="M0 170.7h512v170.6H0z" />
            </svg>
            <div className="p-3 h-32 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-800">2nd</p>
              <p className="mt-1 py-1 px-2.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-full bg-white border border-stone-200 text-stone-800">
                1,009
              </p>
            </div>
            <p className="mt-1.5 text-sm text-stone-800">Germany</p>
          </div>
          {/* End Progress */}
          {/* Progress */}
          <div className="text-center">
            <svg
              className="mb-3 shrink-0 size-8 rounded-full mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              id="flag-icon-css-cn"
              viewBox="0 0 512 512"
            >
              <defs>
                <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
              </defs>
              <path fill="#de2910" d="M0 0h512v512H0z" />
              <use
                width={30}
                height={20}
                transform="matrix(76.8 0 0 76.8 128 128)"
                xlinkHref="#a"
              />
              <use
                width={30}
                height={20}
                transform="rotate(-121 142.6 -47) scale(25.5827)"
                xlinkHref="#a"
              />
              <use
                width={30}
                height={20}
                transform="rotate(-98.1 198 -82) scale(25.6)"
                xlinkHref="#a"
              />
              <use
                width={30}
                height={20}
                transform="rotate(-74 272.4 -114) scale(25.6137)"
                xlinkHref="#a"
              />
              <use
                width={30}
                height={20}
                transform="matrix(16 -19.968 19.968 16 256 230.4)"
                xlinkHref="#a"
              />
            </svg>
            <div className="p-3 h-24 bg-stone-100 rounded-lg">
              <p className="text-sm text-stone-800">3rd</p>
              <p className="mt-1 py-1 px-2.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-full bg-white border border-stone-200 text-stone-800">
                922
              </p>
            </div>
            <p className="mt-1.5 text-sm text-stone-800">China</p>
          </div>
          {/* End Progress */}
        </div>
        {/* End Grid */}
        <div className="mt-4 py-3 flex items-center text-sm text-stone-800 before:flex-1 before:border-t before:border-stone-200 before:me-3 after:flex-1 after:border-t after:border-stone-200 after:ms-3">
          <span className="py-1 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
            <svg
              className="shrink-0 size-3"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            Good
          </span>
        </div>
        <p className="mt-1 text-sm text-stone-500">
          Your overall performance is 98% higher than average.
        </p>
      </div>
      {/* End Body */}
    </div>
  );
};

export default TopAgents;