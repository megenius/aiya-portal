import React from 'react';
import FilterGroup from './FilterGroup';
import ViewToggle from './ViewToggle';

interface FileListHeaderProps {
  activeView: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

const FileListHeader: React.FC<FileListHeaderProps> = ({ activeView, onViewChange }) => {
  return (
    <div className="mb-3">
      <h2 className="inline-block font-medium text-gray-800 dark:text-neutral-200">
        {/* All files */}
      </h2>
      <FilterGroup activeView={activeView} onViewChange={onViewChange} />
    </div>
  );
};

export default FileListHeader;
