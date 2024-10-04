export const getDirectusFileUrl = (
  fileId: string | null | undefined,
  options: {
    key?: string;
    width?: number;
    height?: number;
    baseUrl?: string;
    filename_download?: string;
  } = {}
): string => {
  if (!fileId) return "";
  
  const { width, height, filename_download, baseUrl, key = "" } = options;
  let url = `/api/files/${fileId}`
  if (width) url += `&width=${width}`;
  if (height) url += `&height=${height}`;

  if (baseUrl) {
    return `${baseUrl}${url}`;
  }

  return url;
};
