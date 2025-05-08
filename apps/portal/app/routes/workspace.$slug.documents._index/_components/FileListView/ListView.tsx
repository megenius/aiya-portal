import React from 'react';
import { FileItem } from './types';
import { FileIcon } from './FileIcon';
import { WorkspaceDocument } from '~/@types/app';
import FileSize from './FileSize';

interface ListViewProps {
  // You might want to pass files as props in a real implementation
  documents: WorkspaceDocument[];
  onDelete: (id: string) => void;
}

const ListView: React.FC<ListViewProps> = ({ documents, onDelete }) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };



  return (
    <div className="flex flex-col bg-white dark:bg-neutral-800">
      {/* Heading */}
      <div className="py-3 grid grid-cols-12 items-center gap-x-2">
        <div className="col-span-10 md:col-span-8 xl:col-span-7 2xl:col-span-8 ps-1.5">
          <span className="block font-medium text-sm text-gray-800 dark:text-neutral-200">
            Name
          </span>
        </div>
        <div className="col-span-2 xl:col-span-1">
          <span className="block font-medium text-sm text-gray-800 dark:text-neutral-200">
            Size
          </span>
        </div>
        <div className="md:col-span-2 hidden md:block">
          <span className="block font-medium text-sm text-gray-800 dark:text-neutral-200">
            Type
          </span>
        </div>
        <div className="xl:col-span-2 2xl:col-span-1 hidden xl:block">
          <span className="block font-medium text-sm text-gray-800 dark:text-neutral-200">
            Modified
          </span>
        </div>
      </div>
      {/* End Heading */}

      {/* File List */}
      {documents?.map((file) => (
        <div key={file.id} className="py-1 border-t border-gray-200 first:pt-0 last:pb-0 first:border-t-0 dark:border-neutral-700">
          <div className="hs-dropdown [--trigger:contextmenu] [--scope:window] relative z-1 group">
            <div className="hs-dropdown-toggle relative py-2 block bg-white rounded-lg group-hover:bg-gray-100 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
              <div className="grid grid-cols-12 items-center gap-x-2">
                <div className="col-span-10 md:col-span-8 xl:col-span-7 2xl:col-span-8">
                  <div className="flex items-center gap-x-2 truncate">
                    <div className="size-8 flex shrink-0 justify-center items-center rounded-lg">
                      <FileIcon fileType={file.src_mimetype || ""} />
                    </div>
                    <p className="truncate text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {file.name}
                    </p>
                  </div>
                </div>
                <div className="col-span-2 xl:col-span-1">
                  <span className="text-xs text-gray-600 dark:text-neutral-400">
                    <FileSize size={file.src_file_size || 0} decimal={1} className="text-xs text-gray-600 dark:text-neutral-400" />
                  </span>
                </div>
                <div className="md:col-span-2 hidden md:block">
                  <span className="text-xs text-gray-600 dark:text-neutral-400">
                    {file.src_mimetype || ""}
                  </span>
                </div>
                <div className="xl:col-span-2 2xl:col-span-1 hidden xl:block">
                  <span className="text-xs text-gray-600 dark:text-neutral-400">
                    {formatDate(new Date(file.date_created as string))}
                  </span>
                </div>
              </div>
              <div className="after:absolute after:inset-0 after:z-1" role="button" data-hs-overlay="#hs-pro-dfo" aria-expanded="false" />
            </div>

            {/* Dropdown Context Menu */}
            <div className="hs-dropdown-menu z-2 hidden w-40 bg-white rounded-xl shadow-xl dark:bg-neutral-800" role="menu" aria-orientation="vertical">
              <div className="p-1">
                <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                  <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1={12} x2={12} y1={2} y2={15} />
                  </svg>
                  Share file
                </button>
                {/* Other menu options */}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* End File List */}
    </div>
  );
};

export default ListView;
