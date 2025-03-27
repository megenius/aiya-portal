import React, { useState } from 'react';

interface Tag {
  id: string;
  name: string;
  color: string;
  selected: boolean;
  disabled?: boolean;
}

interface TagsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateTag: () => void;
  tags: Tag[];
  onTagSelectionChange: (tagId: string, selected: boolean) => void;
}

const TagsModal = ({ isOpen, onClose, onCreateTag, tags, onTagSelectionChange }: TagsModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTags = searchQuery 
    ? tags.filter(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : tags;

  return (
    <div className={`hs-overlay ${isOpen ? 'open' : 'hidden'} size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none`} role="dialog">
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-sm sm:w-full m-3 sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
        <div className="w-full max-h-full overflow-hidden flex flex-col bg-white rounded-xl pointer-events-auto shadow-xl dark:bg-neutral-800">
          {/* Header */}
          <div className="py-2.5 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
            <h3 id="tags-modal-label" className="font-medium text-gray-800 dark:text-neutral-200">
              Tags
            </h3>
            <button 
              type="button" 
              className="size-8 shrink-0 flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" 
              aria-label="Close"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Search Input */}
          <div className="p-1 mb-2">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-2.5">
                <svg className="shrink-0 size-3.5 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <input 
                type="text" 
                className="py-1 sm:py-1.5 px-8 block w-full bg-gray-100 border-transparent rounded-md sm:text-sm placeholder:text-gray-500 focus:outline-hidden focus:border-blue-500 focus:ring-blue-500 focus:bg-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:bg-neutral-900" 
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <div className="absolute inset-y-0 end-0 flex items-center z-20 pe-1">
                  <button 
                    type="button" 
                    className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" 
                    onClick={() => setSearchQuery('')}
                  >
                    <span className="sr-only">Clear</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Body with tags list */}
          <div className="p-1 max-h-80 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div>
              <span className="mb-2 px-3 block text-xs text-gray-500 dark:text-neutral-500">
                All tags
              </span>

              {/* Tags List */}
              <div className="space-y-1">
                {filteredTags.map((tag) => (
                  <div 
                    key={tag.id}
                    className="flex justify-between items-center py-1.5 px-3 cursor-pointer rounded-lg hover:bg-gray-100 has-disabled:opacity-50 has-disabled:pointer-events-none dark:hover:bg-neutral-700"
                  >
                    <label htmlFor={`tag-${tag.id}`} className="flex flex-1 items-center gap-x-2.5 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300">
                      <span className={`size-2 rounded-full bg-${tag.color}-500`} aria-hidden="true"></span>
                      {tag.name}
                    </label>
                    <input 
                      type="checkbox" 
                      className="shrink-0 size-4 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" 
                      id={`tag-${tag.id}`}
                      checked={tag.selected}
                      disabled={tag.disabled}
                      onChange={(e) => onTagSelectionChange(tag.id, e.target.checked)} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-1 border-t border-gray-200 dark:border-neutral-700">
            <button 
              type="button" 
              className="w-full inline-flex justify-center items-center gap-x-1.5 py-2 px-2.5 font-medium text-xs rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              onClick={onCreateTag}
            >
              Create new tag
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsModal;
