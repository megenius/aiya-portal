import React, { useCallback, useEffect, useState } from 'react';
import { Loading } from "@repo/preline"
import { useNavigate, useParams } from '@remix-run/react';
import MainContainer from '~/components/MainContainer';
import { Workspace } from '~/@types/app';
import { DocumentList } from './DocumentList';
import PageFilter from './PageFilter';
import { randomHexString } from '~/utils/random';
import { useFileUpload } from '~/hooks/useFileUpload';
import { getDirectusFileUrl } from '~/utils/files';
import { useDropzone } from 'react-dropzone-esm';
import { useWorkspaceDocuments } from '~/hooks/workspace/useWorkspaceDocuments';
import { insertWorkspaceDocument, deleteWorkspaceDocument } from '~/services/workspaces';
import FileListView from './FileListView';

interface MainContentProps {
  workspace: Workspace
}

const MainContent: React.FC<MainContentProps> = ({ workspace }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [searchValue, setSearchValue] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const fileUpload = useFileUpload();

  // Use the new hook to fetch documents
  const { data: documentsData, isLoading, refetch } = useWorkspaceDocuments({
    variables: {
      workspaceId: workspace.id,
    },
  });

  const documents = documentsData?.items || [];

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredDocuments = React.useMemo(() => {
    if (!searchValue) return documents;

    const searchText = searchValue.toLowerCase().trim();

    return documents.filter(doc => {
      return doc.name?.toLowerCase().includes(searchText);
    });
  }, [documents, searchValue]);

  const processFile = async (file: File) => {
    fileUpload.mutateAsync({
      file,
      folder: '881a597d-8888-47bf-bc26-1a425b8cfb4c', //documents
    }, {
      onSuccess: async (data) => {
        // Create the document in the workspace
        await insertWorkspaceDocument(workspace.id, {
          name: file.name,
          src: data?.id,
          src_file_size: data?.filesize,
          src_minetype: data?.type,
          status: 'draft',
        });

        // Refetch documents to update the list
        refetch();
      },
    });
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      processFile(acceptedFiles[0]);
    }
  }, [workspace]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx']
    },
    multiple: false
  });

  const handleDeleteDocument = async (id: string) => {
    try {
      await deleteWorkspaceDocument(workspace.id, id);
      refetch();
    } catch (error) {
      console.error("Failed to delete document:", error);
    }
  };

  return (
    <>
      <MainContainer
        title="Documents"
        description="Upload and manage your workspace documents"
        button={
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            data-hs-overlay="#document-uploader-modal"
            disabled={fileUpload.isPending}
          >
            <svg className="hidden sm:block shrink-0 size-3 me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z" />
            </svg>
            <span className="hidden sm:block">Upload</span>Document
          </button>
        }
      >
        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
          <PageFilter onChanged={handleSearchChange} />

          <div className="flex items-center">
            <nav className="flex items-center space-x-2" aria-label="Tabs" role="tablist">
              <button
                type="button"
                className={`py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-800' : 'bg-transparent text-gray-500 hover:text-blue-600'}`}
                onClick={() => setViewMode('grid')}
                role="tab"
                aria-selected={viewMode === 'grid'}
              >
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                <span className="hidden md:inline-block">Grid</span>
              </button>
              <button
                type="button"
                className={`py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-800' : 'bg-transparent text-gray-500 hover:text-blue-600'}`}
                onClick={() => setViewMode('list')}
                role="tab"
                aria-selected={viewMode === 'list'}
              >
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
                <span className="hidden md:inline-block">List</span>
              </button>
            </nav>
          </div>
        </div>

        {isLoading || fileUpload.isPending ? (
          <div className="flex justify-center py-8">
            <Loading />
          </div>
        ) : (
          <FileListView initialView='list' documents={filteredDocuments} onDelete={handleDeleteDocument} />
          // <DocumentList
          //   documents={filteredDocuments}
          //   onDelete={handleDeleteDocument}
          // />
        )}
      </MainContainer>

      {/* Document Uploader Modal */}
      <div id="document-uploader-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/10">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                Upload Document
              </h3>
              <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:outline-hidden dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#document-uploader-modal">
                <span className="sr-only">Close</span>
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <div {...getRootProps()} className="cursor-pointer">
                <div className="flex items-center justify-center w-full p-12 bg-white border border-dashed border-gray-300 rounded-xl">
                  <input {...getInputProps()} />
                  <div className="text-center">
                    <svg
                      className="w-16 text-gray-400 mx-auto"
                      width={70}
                      height={46}
                      viewBox="0 0 70 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.05172 9.36853L17.2131 7.5083V41.3608L12.3018 42.3947C9.01306 43.0871 5.79705 40.9434 5.17081 37.6414L1.14319 16.4049C0.515988 13.0978 2.73148 9.92191 6.05172 9.36853Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="fill-white stroke-gray-400"
                      />
                      <path
                        d="M63.9483 9.36853L52.7869 7.5083V41.3608L57.6982 42.3947C60.9869 43.0871 64.203 40.9434 64.8292 37.6414L68.8568 16.4049C69.484 13.0978 67.2685 9.92191 63.9483 9.36853Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="fill-white stroke-gray-400"
                      />
                      <rect
                        x="17.0656"
                        y="1.62305"
                        width="35.8689"
                        height="42.7541"
                        rx={5}
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="fill-white stroke-gray-400"
                      />
                    </svg>
                    <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
                      <span className="pe-1 font-medium text-gray-800">
                        {isDragActive ? "Drop the document here" : "Drop your document here or"}
                      </span>
                      {!isDragActive && (
                        <span className="relative cursor-pointer bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-hidden focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2">
                          browse
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-gray-400">PDF, DOC, DOCX, TXT, XLS, XLSX, PPT, PPTX</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#document-uploader-modal">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
