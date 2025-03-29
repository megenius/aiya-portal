import React from 'react';
import { FileItem } from './types';

interface FileCardProps {
  file: FileItem;
}

const FileCard: React.FC<FileCardProps> = ({ file }) => {
  const renderFilePreview = () => {
    if (file.imageUrl) {
      return (
        <img 
          className="size-full object-cover object-center" 
          src={file.imageUrl} 
          alt={file.name} 
        />
      );
    } else if (file.icon) {
      // Render different icons based on file type
      return renderFileIcon(file.icon);
    } else {
      // Default icon
      return (
        <svg className="shrink-0 size-16 mx-auto" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    }
  };

  const renderFileIcon = (icon: string) => {
    switch (icon) {
      case 'word':
        return (
          <svg className="shrink-0 size-16 mx-auto text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M16 4V1a1.003 1.003 0 0 0-1-1H4a1 1 0 0 0-1 1v3l6.5 1.379z" fill="#41a5ee" />
            <path fill="#2b7cd3" d="M15.999 4h-13v4L9.5 9.168 15.999 8V4z" />
            <path fill="#185abd" d="M16 8H3v4l6.499 1L16 12V8z" />
            <path d="M3 12v3a1.003 1.003 0 0 0 1 1h11a1 1 0 0 0 1-1v-3z" fill="#103f91" />
            <path d="M10 4.003L3 4l.002 10H9a2 2 0 0 0 2-2V5.002a1 1 0 0 0-1-1z" opacity=".5" />
            <rect y={3} width={10} height={10} rx={1} fill="#185abd" />
            <path d="M3.352 9.54q.026.213.034.372h.02q.011-.15.045-.364t.065-.36L4.429 5H5.61l.945 4.126a6.335 6.335 0 0 1 .118.778h.016a6.293 6.293 0 0 1 .098-.753L7.543 5h1.075l-1.323 6H6.04l-.901-3.975q-.04-.171-.089-.448t-.06-.401h-.017q-.015.146-.06.435t-.073.427L3.992 11H2.716L1.382 5h1.094L3.3 9.197q.028.13.053.343z" fill="#fff" />
          </svg>
        );
      case 'excel':
        return (
          <svg className="shrink-0 size-16 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M10 0H4a1.003 1.003 0 0 0-1 1v3l7.001 4L13 9.968 16 8V4z" fill="#21a366" />
            <path fill="#107c41" d="M16 8H3v4l7 1.4 6-1.4V8z" />
            <path d="M3 12v3a1.003 1.003 0 0 0 1 1h11a1 1 0 0 0 1-1v-3z" fill="#185c37" />
            <path d="M10 4H3v10h6a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1z" opacity=".5" />
            <rect y={3} width={10} height={10} rx={1} fill="#107c41" />
            <path d="M2.292 11l1.942-3.008L2.455 5h1.431l.971 1.912q.134.272.184.406h.013q.096-.217.2-.423L6.293 5h1.314L5.782 7.975 7.652 11H6.255L5.133 8.9A1.753 1.753 0 0 1 5 8.62h-.016a1.324 1.324 0 0 1-.13.271L3.698 11z" fill="#fff" />
            <path d="M16 1v3h-6V0h5a1.003 1.003 0 0 1 1 1z" fill="#33c481" />
          </svg>
        );
      case 'pdf':
        return (
          <svg className="shrink-0 size-16 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M8 0a8.024 8.024 0 0 0-8 8l10 2.363z" fill="#ed6c47" />
            <path d="M8 0v8l4 2.59L16 8a8.024 8.024 0 0 0-8-8z" fill="#ff8f6b" />
            <path d="M16 8A8 8 0 0 1 0 8z" fill="#d35230" />
            <path d="M10 4.003H1.086A7.93 7.93 0 0 0 2.735 14h6.264a2 2 0 0 0 2-2V5.002a1 1 0 0 0-1-1z" opacity=".5" />
            <rect y={3} width={10} height={10} rx={1} fill="#c43e1c" />
            <path d="M5.336 5a2.276 2.276 0 0 1 1.56.481 1.766 1.766 0 0 1 .542 1.393 2.019 2.019 0 0 1-.267 1.042 1.827 1.827 0 0 1-.762.71 2.475 2.475 0 0 1-1.144.253H4.182V11h-1.11V5zM4.182 7.962h.956a1.2 1.2 0 0 0 .845-.265 1.009 1.009 0 0 0 .285-.777q0-.991-1.094-.991h-.992z" fill="#fff" />
          </svg>
        );
      case 'powerpoint':
        return (
          <svg className="shrink-0 size-16 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M8 0a8.024 8.024 0 0 0-8 8l10 2.363z" fill="#ed6c47" />
            <path d="M8 0v8l4 2.59L16 8a8.024 8.024 0 0 0-8-8z" fill="#ff8f6b" />
            <path d="M16 8A8 8 0 0 1 0 8z" fill="#d35230" />
            <path d="M10 4.003H1.086A7.93 7.93 0 0 0 2.735 14h6.264a2 2 0 0 0 2-2V5.002a1 1 0 0 0-1-1z" opacity=".5" />
            <path d="M10 4.003H1.086A7.93 7.93 0 0 0 2.735 14h6.264a2 2 0 0 0 2-2V5.002a1 1 0 0 0-1-1z" opacity=".1" />
            <rect y={3} width={10} height={10} rx={1} fill="#c43e1c" />
            <path d="M5.336 5a2.276 2.276 0 0 1 1.56.481 1.766 1.766 0 0 1 .542 1.393 2.019 2.019 0 0 1-.267 1.042 1.827 1.827 0 0 1-.762.71 2.475 2.475 0 0 1-1.144.253H4.182V11h-1.11V5zM4.182 7.962h.956a1.2 1.2 0 0 0 .845-.265 1.009 1.009 0 0 0 .285-.777q0-.991-1.094-.991h-.992z" fill="#fff" />
          </svg>
        );
      default:
        return (
          <svg className="shrink-0 size-16 mx-auto" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        );
    }
  };

  return (
    <div className="hs-dropdown [--trigger:contextmenu] [--scope:window] relative z-1 group">
      <div className="hs-dropdown-toggle relative p-1 block w-56 bg-white rounded-xl shadow-xs dark:bg-neutral-800">
        <div className="p-3 h-42 bg-white rounded-lg group-hover:bg-gray-100 group-focus:bg-gray-100 dark:bg-neutral-800 dark:group-hover:bg-neutral-700 dark:group-focus:bg-neutral-700">
          <div className="size-full flex shrink-0 justify-center items-center">
            {renderFilePreview()}
          </div>
        </div>
        <div className="p-3">
          <p className="truncate font-medium text-sm text-gray-800 dark:text-neutral-200">
            {file.name}
          </p>
          <ul className="text-xs truncate text-gray-500 dark:text-neutral-500">
            {file.fileType && (
              <li className="relative inline-block pe-3 last:pe-0 first-of-type:before:hidden before:absolute before:top-1/2 before:-start-2.5 before:-translate-y-1/2 before:size-1 before:bg-gray-400 before:rounded-full dark:before:bg-neutral-600">
                <span className="truncate">{file.fileType}</span>
              </li>
            )}
            {file.size && (
              <li className="relative inline-block pe-3 last:pe-0 first-of-type:before:hidden before:absolute before:top-1/2 before:-start-2.5 before:-translate-y-1/2 before:size-1 before:bg-gray-400 before:rounded-full dark:before:bg-neutral-600">
                <span className="truncate">{file.size}</span>
              </li>
            )}
          </ul>
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
          <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 14 20 9 15 4" />
              <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
            </svg>
            Move to
          </button>
          <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Add to starred
          </button>
          <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
            Rename
          </button>
          <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1={12} x2={12} y1={15} y2={3} />
            </svg>
            Download
          </button>
          <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
          <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1={4} x2={4} y1={22} y2={15} />
            </svg>
            Report
          </button>
          <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-red-600 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-red-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1={10} x2={10} y1={11} y2={17} />
              <line x1={14} x2={14} y1={11} y2={17} />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
