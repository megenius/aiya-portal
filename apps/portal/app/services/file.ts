import api from "./api";

interface UploadResponse {
  id: string;
  filename_disk: string;
  filename_download: string;
  filesize: number;
  type: string;
}

interface R2UploadResponse {
  url: string;
  filename_download: string;
}

export const uploadFile = async (file: File, folder: string = "") => {
  const formData = new FormData();
  if (folder) {
    formData.append("folder", folder);
  }
  formData.append("file", file);

  return api
    .post<UploadResponse>("/files/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => response.data);
};

export const deleteFile = async (fileId: string) => {
  return api.delete(`/files/${fileId}`);
};

export const uploadBotMessageFile = async (path: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("path", path);

  return api
    .post<R2UploadResponse>(`/files/upload-bot-message`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => response.data);
};
