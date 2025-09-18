import React, { useEffect, useState, useRef } from "react";
import { Upload, X, AlertCircle } from "lucide-react";
import { resizeImage } from "~/utils/resizeImg";

interface FileUploadProps {
  name: string;
  value?: string; // string for controlled form value (e.g., filename or file_id)
  accept?: string;
  maxSize?: number; // in MB
  required?: boolean;
  error?: string;
  language: string;
  onChange: (name: string, value: string) => void;
  onFileChange?: (name: string, file: File | null) => void; // for deferred upload
  onBlur?: (name: string) => void;
}

type SelectedPreview = { url: string; name: string; size: number; type: string } | null;

const FileUpload: React.FC<FileUploadProps> = ({
  name,
  value,
  accept,
  maxSize = 10, // 10MB default
  required = false,
  error,
  language,
  onChange,
  onFileChange,
  onBlur,
}) => {
  const lang = language as 'th' | 'en';
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState<SelectedPreview>(null);
  const [originalFileName, setOriginalFileName] = useState<string>("");

  type CaptureAttr = { capture?: 'environment' | 'user' | boolean };

  // Build preview from incoming value
  useEffect(() => {
    // Clean old object URL
    return () => {
      setPreview((prev) => {
        if (prev?.url?.startsWith('blob:')) {
          try { URL.revokeObjectURL(prev.url); } catch { /* noop */ }
        }
        return null;
      });
    };
  }, []);

  useEffect(() => {
    if (!value) {
      setPreview(null);
      setOriginalFileName("");
      return;
    }
    // value is just a string; preview is only from locally picked File
    setOriginalFileName(value);
  }, [value]);

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

  const handleFileSelect = async (picked: File) => {
    const isImage = (accept && accept.includes('image/')) || picked.type.startsWith('image/');

    // Snapshot file to avoid cloud permission revokes (Google Photos/iCloud)
    let file: File = picked;
    try {
      const ab = await picked.arrayBuffer();
      const blob = new Blob([ab], { type: picked.type || 'application/octet-stream' });
      file = new File([blob], picked.name || `image-${Date.now()}.jpg`, { type: picked.type || 'application/octet-stream' });
    } catch (e) {
      console.warn('[file-pick] snapshot failed (likely cloud/permission issue):', e);
      alert(
        lang === 'th'
          ? 'ไม่สามารถอ่านไฟล์จากตัวเลือกนี้ได้ อาจเป็นไฟล์จากคลาวด์\nโปรดดาวน์โหลดรูปลงเครื่องก่อนแล้วลองใหม่ หรือถ่ายรูปด้วยกล้องโดยตรง'
          : "Cannot read the selected file (possibly from cloud). Please download the photo locally and try again, or use camera."
      );
      return;
    }

    setOriginalFileName(file.name);

    // Compress images before storing (deferred upload)
    let processed: File = file;
    try {
      if (isImage) {
        processed = await resizeImage(file, { maxSizeMB: maxSize || 2 });
      }
    } catch (resizeErr) {
      console.error('[resizeImage-error]', resizeErr);
      // Fallback to original file
      processed = file;
    }

    // Validate after compression (for images) or directly (for non-images)
    const validationError = validateFile(processed);
    if (validationError) {
      alert(validationError);
      return;
    }

    // Set local preview and propagate File to parent (deferred upload)
    try {
      const url = URL.createObjectURL(processed);
      setPreview({ url, name: processed.name, size: processed.size, type: processed.type });
    } catch { /* noop */ }
    onFileChange?.(name, processed);
    onChange(name, processed.name);
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
    if (preview?.url?.startsWith('blob:')) {
      try { URL.revokeObjectURL(preview.url); } catch { /* noop */ }
    }
    setPreview(null);
    setOriginalFileName("");
    onFileChange?.(name, null);
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

  // Note: if you want to show file-type icons, implement here. Currently unused.

  if (preview || originalFileName) {
    return (
      <div className="space-y-2">
        <div className={`relative overflow-hidden rounded-lg border p-3 ${error ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'}`}>
          <div className="flex items-center gap-3">
            {preview && preview.type.startsWith('image/') ? (
              <img src={preview.url} alt={originalFileName} className="h-16 w-16 rounded object-cover" />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded bg-white text-gray-500">FILE</div>
            )}
            <div className="min-w-0 flex-1">
              <div className="truncate font-medium text-green-800">{originalFileName || (lang === 'th' ? 'ไฟล์ที่เลือก' : 'Selected file')}</div>
              {preview?.size ? (
                <div className="text-sm text-green-700">{formatFileSize(preview.size)}</div>
              ) : null}
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
          {...((): CaptureAttr => {
            const isImageAccept = !!accept && accept.includes('image/');
            const isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
            const props: CaptureAttr = {};
            if (isImageAccept && isAndroid) props.capture = 'environment';
            return props;
          })()}
        />

        <div className="text-center">
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