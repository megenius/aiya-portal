export const getDirectusFileUrl = (
  fileId: string | null | undefined,
  options: { key?: string; width?: number; height?: number } = {}
): string => {
  if (!fileId) return "";

  const { key = "system-medium-cover", width, height } = options;
  let url = `/api/files/${fileId}?key=${encodeURIComponent(key)}`;

  if (width) url += `&width=${width}`;
  if (height) url += `&height=${height}`;

  return url;
};