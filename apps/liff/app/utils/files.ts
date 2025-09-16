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
  let url = `/api/files/${fileId}`;

  const params: string[] = [];
  if (width) params.push(`width=${encodeURIComponent(String(width))}`);
  if (height) params.push(`height=${encodeURIComponent(String(height))}`);
  if (filename_download) params.push(`filename_download=${encodeURIComponent(filename_download)}`);
  if (key) params.push(`key=${encodeURIComponent(key)}`);

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }

  if (baseUrl) {
    return `${baseUrl}${url}`;
  }

  return url;
};
