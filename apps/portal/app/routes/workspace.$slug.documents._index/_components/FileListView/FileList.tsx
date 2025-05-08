import React, { useState } from 'react';
import FileListHeader from './FileListHeader';
import GridView from './GridView';
import ListView from './ListView';
import { WorkspaceDocument } from '~/@types/app';
import { File, FileText } from 'lucide-react';

export interface FileListProps {
  // Add any props needed for file list configuration
  initialView?: 'grid' | 'list';
  title?: string;
  documents: WorkspaceDocument[];
  onDelete: (id: string) => void;
}

const FileList: React.FC<FileListProps> = ({
  initialView = 'grid',
  title = 'All files',
  documents = [],
  onDelete,
}) => {
  const [activeView, setActiveView] = useState<'grid' | 'list'>(initialView);

  const handleViewChange = (view: 'grid' | 'list') => {
    setActiveView(view);
  };


  if (!documents || documents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <FileText size={48} color='gray' strokeWidth={1} />
        <h3 className="text-lg font-medium text-gray-500">No documents found</h3>
        <p className="text-sm text-gray-400 mt-1">Upload documents to get started</p>
      </div>
    );
  }

  return (
    <div className="file-list-container">
      <FileListHeader activeView={activeView} onViewChange={handleViewChange} />

      {/* Tab Content */}
      <div className="tab-content">
        {activeView === 'grid' ? <GridView /> : <ListView documents={documents} onDelete={onDelete} />}
      </div>
    </div>
  );
};

export default FileList;
