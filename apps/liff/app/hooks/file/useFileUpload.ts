import { useMutation } from "@tanstack/react-query";
import { uploadFile, type DirectusFile } from "~/services/file";

// Map folder keys to env vars (Vite style: VITE_*)
const ENV_FOLDERS = {
  user_uploads: import.meta.env.VITE_FILE_FOLDER_USER_UPLOADS as
    | string
    | undefined,
};

export type FolderKey = keyof typeof ENV_FOLDERS;

function getFolderId(folder: FolderKey): string {
  const id = ENV_FOLDERS[folder];
  if (!id) {
    throw new Error(
      `[useFileUpload] Missing env for folder "${folder}". Please set VITE_FILE_FOLDER_${folder.toUpperCase()} in your .env`,
    );
  }
  return id;
}

export function useFileUpload() {
  return useMutation<DirectusFile, Error, { folder: FolderKey; file: File }>({
    mutationFn: ({ folder, file }) => {
      const folderId = getFolderId(folder);
      return uploadFile(folderId, file);
    },
  });
}
