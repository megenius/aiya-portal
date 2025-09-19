export const getDirectusFileUrl = (
  fileId: string | null | undefined,
  options: {
    key?: string;
    width?: number;
    height?: number;
    baseUrl?: string;
    filename_download?: string;
    format?: string; // e.g., webp, avif, jpg
    quality?: number; // 1-100
    fit?: string; // cover, contain, inside, outside, fill
  } = {}
): string => {
  if (!fileId) return "";

  const { width, height, filename_download, baseUrl, key = "", format, quality, fit } = options;
  let url = `/api/files/${fileId}`;

  const params: string[] = [];
  if (width) params.push(`width=${encodeURIComponent(String(width))}`);
  if (height) params.push(`height=${encodeURIComponent(String(height))}`);
  if (filename_download) params.push(`filename_download=${encodeURIComponent(filename_download)}`);
  if (key) params.push(`key=${encodeURIComponent(key)}`);
  if (format) params.push(`format=${encodeURIComponent(format)}`);
  if (quality) params.push(`quality=${encodeURIComponent(String(quality))}`);
  if (fit) params.push(`fit=${encodeURIComponent(fit)}`);

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }

  if (baseUrl) {
    return `${baseUrl}${url}`;
  }

  return url;
};
