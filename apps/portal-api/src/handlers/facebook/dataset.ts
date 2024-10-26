export const getDatasetId = ({
  pageId,
  pageToken,
}: {
  pageId: string;
  pageToken: string;
}): Promise<{ id: string }> => {
  return fetch(`https://graph.facebook.com/v21.0/${pageId}/dataset`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${pageToken}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
