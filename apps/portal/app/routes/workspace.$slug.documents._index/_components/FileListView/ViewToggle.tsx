import React from 'react';

interface ViewToggleProps {
  activeView: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ activeView, onViewChange }) => {
  return (
    <nav className="flex items-center" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
      <button 
        type="button" 
        className={`flex shrink-0 justify-center items-center size-7.5 border-md text-gray-800 rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:focus:text-neutral-500 dark:focus:hs-tab-active:text-neutral-200 ${activeView === 'grid' ? 'bg-gray-200 dark:bg-neutral-700' : ''}`}
        onClick={() => onViewChange('grid')}
        aria-selected={activeView === 'grid'}
        role="tab"
      >
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect width={7} height={7} x={3} y={3} rx={1} />
          <rect width={7} height={7} x={14} y={3} rx={1} />
          <rect width={7} height={7} x={14} y={14} rx={1} />
          <rect width={7} height={7} x={3} y={14} rx={1} />
        </svg>
        <span className="sr-only">Grid</span>
      </button>
      <button 
        type="button" 
        className={`flex shrink-0 justify-center items-center size-7.5 border-md text-gray-800 rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:focus:text-neutral-500 dark:focus:hs-tab-active:text-neutral-200 ${activeView === 'list' ? 'bg-gray-200 dark:bg-neutral-700' : ''}`}
        onClick={() => onViewChange('list')}
        aria-selected={activeView === 'list'}
        role="tab"
      >
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <line x1={3} x2={21} y1={6} y2={6} />
          <line x1={3} x2={21} y1={12} y2={12} />
          <line x1={3} x2={21} y1={18} y2={18} />
        </svg>
        <span className="sr-only">List</span>
      </button>
    </nav>
  );
};

export default ViewToggle;
