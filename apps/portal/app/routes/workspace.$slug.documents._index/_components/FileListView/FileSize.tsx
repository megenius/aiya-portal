import React from 'react';

interface FileSizeProps {
  size: number;
  decimal?: number;
  className?: string;
}

const FileSize: React.FC<FileSizeProps> = ({ size, decimal = 2, className = '' }) => {
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) {
      return bytes.toFixed(decimal) + ' B';
    } else if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(decimal) + ' KB';
    } else if (bytes < 1024 * 1024 * 1024) {
      return (bytes / (1024 * 1024)).toFixed(decimal) + ' MB';
    } else if (bytes < 1024 * 1024 * 1024 * 1024) {
      return (bytes / (1024 * 1024 * 1024)).toFixed(decimal) + ' GB';
    } else {
      return (bytes / (1024 * 1024 * 1024 * 1024)).toFixed(decimal) + ' TB';
    }
  };

  return (
    <div className={`text-sm text-gray-500 ${className}`}>
      {formatFileSize(size)}
    </div>
  );
};

export default FileSize;