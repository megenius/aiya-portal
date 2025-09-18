import api from "./api";

// Minimal shape from Directus /files response
export type DirectusFile = {
  id: string;
  filename_disk?: string;
  filename_download?: string;
  title?: string;
  type?: string; // mime type
  filesize?: number | string;
  width?: number;
  height?: number;
  [key: string]: unknown;
};

export function uploadFile(folderId: string, file: File): Promise<DirectusFile>;
export function uploadFile(file: File): Promise<DirectusFile>;
export function uploadFile(
  arg1: string | File,
  arg2?: File,
): Promise<DirectusFile> {
  const formData = new FormData();
  const hasFolder = typeof arg1 === "string";
  const file = (hasFolder ? arg2 : arg1) as File;
  const folderId = hasFolder ? (arg1 as string) : undefined;

  if (folderId) {
    formData.append("folder", folderId);
  }
  formData.append("file", file);

  return api
    .post<DirectusFile>("/files/upload", formData)
    .then((res) => res.data);
}
