import api from "./api";

interface UploadResponse {
  id: string;
  filename_disk: string;
  filename_download: string;
}

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return api
    .post<UploadResponse>("/files/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => response.data);
};

export const deleteFile = async (fileId: string) => {
  return api.delete(`/files/${fileId}`)
};
