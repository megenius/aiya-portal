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

  const {
    key = "system-medium-cover",
    width,
    height,
    filename_download,
    baseUrl,
  } = options;
  const params = new URLSearchParams();
  if (key) params.set("key", key);
  if (typeof width === "number") params.set("width", String(width));
  if (typeof height === "number") params.set("height", String(height));

  let url = `/api/files/${fileId}`;
  if (filename_download) {
    url += `/${encodeURIComponent(filename_download)}`;
  }
  const query = params.toString();
  if (query) url += `?${query}`;

  if (baseUrl) {
    return `${baseUrl}${url}`;
  }

  return url;
};
