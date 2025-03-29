export interface FileItem {
  id: string;
  name: string;
  type: 'document' | 'image' | 'spreadsheet' | 'audio' | 'video' | 'pdf' | 'other';
  fileType: string; // File extension (e.g., "PDF", "DOCX")
  size: string;
  dateModified: Date;
  imageUrl?: string; // For images
  icon?: 'word' | 'excel' | 'pdf' | 'powerpoint' | 'default'; // For non-image files
  sharedWith?: Array<{
    id: string;
    name: string;
    avatarUrl?: string;
  }>;
}
