import React from 'react';
import { getDirectusFileUrl } from '~/utils/files';
import { format } from 'date-fns';
import { WorkspaceDocument } from '~/@types/app';
import { formatBytes } from '~/utils/string';

interface DocumentListProps {
  documents: WorkspaceDocument[];
  onDelete: (id: string) => void;
}

const getFileIcon = (type: string) => {
  if (type.includes('pdf')) {
    return (
      <svg className="size-8 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 13v4" />
        <path d="M12 13v4" />
        <path d="M15 13v4" />
      </svg>
    );
  } else if (type.includes('word') || type.includes('doc')) {
    return (
      <svg className="size-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15v-2h6v2" />
      </svg>
    );
  } else if (type.includes('sheet') || type.includes('excel') || type.includes('xls')) {
    return (
      <svg className="size-8 text-green-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    );
  } else {
    return (
      <svg className="size-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    );
  }
};

export const DocumentList: React.FC<DocumentListProps> = ({ documents, onDelete }) => {
  if (!documents || documents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <svg className="size-12 text-gray-300 mb-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        <h3 className="text-lg font-medium text-gray-500">No documents found</h3>
        <p className="text-sm text-gray-400 mt-1">Upload documents to get started</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Document</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Size</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Uploaded</th>
                  <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {documents.map((document) => (
                  <tr key={document.id} className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                      <div className="flex items-center gap-x-3">
                        {getFileIcon(document.type || '')}
                        <a
                          href={getDirectusFileUrl(document.src as string)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 hover:underline"
                        >
                          {document.name}
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-white">
                      {document.src_file_size ? formatBytes(document.src_file_size) : 'Unknown'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-white">
                      {document.date_created ? format(new Date(document.date_created), 'PP') : 'Unknown'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <div className="flex gap-x-1 justify-end">
                        <a
                          href={getDirectusFileUrl(document.dest as string)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700"
                          download
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                        </a>
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => onDelete(document.id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
