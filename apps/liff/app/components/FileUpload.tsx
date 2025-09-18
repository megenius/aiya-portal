import React, { useState, useRef } from "react";
import { useUploadFile } from "~/hooks/campaigns";
import { Upload, X, CheckCircle, AlertCircle, File } from "lucide-react";

interface FileUploadProps {
  name: string;
  value?: string; // file_id or URL
  accept?: string;
  maxSize?: number; // in MB
  required?: boolean;
  error?: string;
  language: string;
  onChange: (name: string, value: string) => void;
  onBlur?: (name: string) => void;
}

interface UploadedFileInfo {
  file_id: string;
  url: string;
  mime_type: string;
  size: number;
}

const FileUpload: React.FC<FileUploadProps> = ({
  name,
  value,
  accept,
  maxSize = 10, // 10MB default
  required = false,
  error,
  language,
  onChange,
  onBlur,
}) => {
  const lang = language as 'th' | 'en';
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFileInfo | null>(null);
  const [originalFileName, setOriginalFileName] = useState<string>("");

  const uploadMutation = useUploadFile();

  // Initialize uploaded file info if value exists
  React.useEffect(() => {
    if (value && !uploadedFile) {
      // If value is a file_id, we'll show it as uploaded
      // In a real scenario, you might want to fetch file info from the API
      setUploadedFile({
        file_id: value,
        url: value,
        mime_type: 'unknown',
        size: 0,
      });
    }
  }, [value, uploadedFile]);

  const validateFile = (file: File): string | null => {
    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      return lang === 'th'
        ? `ไฟล์ใหญ่เกินไป (สูงสุด ${maxSize}MB)`
        : `File too large (max ${maxSize}MB)`;
    }

    // Check file type if accept is specified
    if (accept) {
      const acceptedTypes = accept.split(',').map(type => type.trim());
      const fileType = file.type;
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();

      const isAccepted = acceptedTypes.some(acceptType => {
        if (acceptType.startsWith('.')) {
          return fileExtension === acceptType.toLowerCase();
        }
        if (acceptType.includes('/*')) {
          const mainType = acceptType.split('/')[0];
          return fileType.startsWith(mainType + '/');
        }
        return fileType === acceptType;
      });

      if (!isAccepted) {
        return lang === 'th'
          ? `ประเภทไฟล์ไม่ถูกต้อง`
          : `Invalid file type`;
      }
    }

    return null;
  };

  const handleFileSelect = async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      alert(validationError);
      return;
    }

    setOriginalFileName(file.name);

    try {
      const response = await uploadMutation.mutateAsync(file);
      const fileInfo = response.data;

      setUploadedFile(fileInfo);
      onChange(name, fileInfo.file_id);
    } catch (error) {
      console.error('Upload failed:', error);
      alert(lang === 'th' ? 'การอัปโหลดไฟล์ล้มเหลว กรุณาลองใหม่อีกครั้ง' : 'File upload failed. Please try again.');
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setOriginalFileName("");
    onChange(name, "");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType.startsWith('image/')) {
      return '🖼️';
    }
    if (mimeType.includes('pdf')) {
      return '📄';
    }
    if (mimeType.includes('video/')) {
      return '🎥';
    }
    if (mimeType.includes('audio/')) {
      return '🎵';
    }
    return '📎';
  };

  if (uploadedFile) {
    return (
      <div className="space-y-2">
        <div className={`relative rounded-lg border-2 border-dashed p-4 ${
          error ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-green-500" />
              <div className="flex-1">
                <div className="font-medium text-green-800">
                  {originalFileName || (lang === 'th' ? 'ไฟล์ที่อัปโหลด' : 'Uploaded file')}
                </div>
                {uploadedFile.size > 0 && (
                  <div className="text-sm text-green-600">
                    {formatFileSize(uploadedFile.size)}
                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div
        className={`relative rounded-lg border-2 border-dashed p-6 transition-colors ${
          dragOver
            ? 'border-blue-400 bg-blue-50'
            : error
            ? 'border-red-300 bg-red-50'
            : 'border-gray-300 bg-gray-50 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileInputChange}
          onBlur={() => onBlur?.(name)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          required={required}
        />

        <div className="text-center">
          {uploadMutation.isPending ? (
            <div className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
              </div>
              <div className="text-sm text-blue-600">
                {lang === 'th' ? 'กำลังอัปโหลด...' : 'Uploading...'}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <Upload size={24} className="text-gray-400" />
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium text-blue-600 hover:underline">
                  {lang === 'th' ? 'คลิกเพื่อเลือกไฟล์' : 'Click to select file'}
                </span>{' '}
                {lang === 'th' ? 'หรือลากไฟล์มาวาง' : 'or drag and drop'}
              </div>
              {accept && (
                <div className="text-xs text-gray-500">
                  {lang === 'th' ? 'ประเภทไฟล์ที่รองรับ:' : 'Supported types:'} {accept}
                </div>
              )}
              <div className="text-xs text-gray-500">
                {lang === 'th' ? `ขนาดไฟล์สูงสุด ${maxSize}MB` : `Max file size ${maxSize}MB`}
              </div>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600">
          <AlertCircle size={16} />
          <span className="text-sm">{error}</span>
        </div>
      )}
    </div>
  );
};

export default FileUpload;