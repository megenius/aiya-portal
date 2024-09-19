import React, { useState } from 'react';
import SearchInput from './SearchInput';
import { useFacebookSDK } from '~/hooks/useFacebookSDK';
import { PageInfo } from '~/@types/app';

interface MemberTableFilterProps {
  onChanged?: (value: string) => void;
  onLoadPages?: (pages: Array<PageInfo>) => void;
}

const MemberTableFilter: React.FC<MemberTableFilterProps> = ({ onChanged, onLoadPages }) => {
  return (
    <>
      <div className="flex sm:grid sm:grid-cols-2 gap-x-2 sm:gap-x-5">
        <SearchInput onSearchChange={(value) => onChanged && onChanged(value)} />
        <div className="flex justify-end items-center gap-x-2">
          {/* <DownloadCSVButton /> */}
          {/* <AddButton /> */}
          <AddButton onLoadPages={onLoadPages} />
        </div>
      </div>
    </>
  );
};

export default MemberTableFilter;


const AddButton: React.FC<{ onLoadPages }> = ({ onLoadPages }) => {
  const { login, getPages } = useFacebookSDK({ appId: import.meta.env.VITE_FB_APP_ID  });

  const handleFacebookLogin = async () => {
    // console.log("import.meta.env.VITE_FB_APP_LOGIN_ID", import.meta.env.VITE_FB_APP_LOGIN_ID);
    const configId = import.meta.env.VITE_FB_APP_LOGIN_ID
    login({
      config_id: configId, //import.meta.env.VITE_FB_APP_LOGIN_ID,
      response_type: 'code',
      override_default_response_type: true
    }).then((response) => {
      getPages(response.authResponse?.accessToken).then((pages) => {
        onLoadPages(pages)
      })
    })
    // const modal = document.getElementById('add-facebook-modal');
    // if (modal) {
    //   window.HSOverlay.open(modal);
    // }
  }

  return (
    <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
      {/* Help Button Icon */}
      <div className="hs-tooltip [--placement:bottom] inline-block">
        <button
          id="hs-pro-dnhd"
          type="button"
          className="hs-tooltip-toggle  py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          Add Channel
        </button>
      </div>
      {/* End Help Button Icon */}
      {/* Help Dropdown */}
      <div
        className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-pro-dnhd"
      >
        <div className="p-1">
          <button
            className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            data-hs-overlay={`#add-line-modal`}
          >
            <svg
              className="hidden shrink-0 mt-0.5 size-4"
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
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            LINE
          </button>
          <button
            className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            onClick={handleFacebookLogin}
          >
            <svg
              className="hidden shrink-0 mt-0.5 size-4"
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Facebook
          </button>
          <a
            className="hidden flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            href="#"
          >
            <svg
              className="shrink-0 mt-0.5 size-4"
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
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
      {/* End Help Dropdown */}
    </div>

  )
}