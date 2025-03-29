import React from 'react';
import FileCard from './FileCard';
import { FileItem } from './types';

// Sample data - you would likely fetch this or receive as props
const thisWeekFiles: FileItem[] = [
  {
    id: '1',
    name: 'Untitled',
    type: 'image',
    fileType: 'PDF',
    size: '309 kb',
    imageUrl: 'https://images.unsplash.com/photo-1678851836066-dc27614cc56b?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dateModified: new Date(),
  },
  {
    id: '2',
    name: 'January 2025 Invoice',
    type: 'document',
    fileType: 'DOCX',
    size: '20 kb',
    icon: 'word',
    dateModified: new Date(),
  },
];

const lastMonthFiles: FileItem[] = [
  {
    id: '3',
    name: '2024 Audit',
    type: 'spreadsheet',
    fileType: 'XLS',
    size: '58 kb',
    icon: 'excel',
    dateModified: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
  },
  // Add more files as needed
];

interface GridViewProps {
  // You might want to pass files as props in a real implementation
}

const GridView: React.FC<GridViewProps> = () => {
  return (
    <div className="flex flex-col gap-y-8">
      {/* This Week Section */}
      <div>
        <div className="mb-3">
          <h4 className="text-xs text-gray-500 dark:text-neutral-500">
            This week
          </h4>
        </div>
        <div className="flex flex-row gap-3 overflow-x-auto pb-1.5 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          {thisWeekFiles.map(file => (
            <FileCard key={file.id} file={file} />
          ))}
        </div>
      </div>
      
      {/* Last Month Section */}
      <div>
        <div className="mb-3">
          <h4 className="text-xs text-gray-500 dark:text-neutral-500">
            Last month
          </h4>
        </div>
        <div className="flex flex-row gap-3 overflow-x-auto pb-1.5 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          {lastMonthFiles.map(file => (
            <FileCard key={file.id} file={file} />
          ))}
        </div>
      </div>
      
      {/* You can add more sections as needed */}
    </div>
  );
};

export default GridView;
