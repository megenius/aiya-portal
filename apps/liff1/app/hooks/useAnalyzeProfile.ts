// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface AnalyzeProfile {
  pictureUrl: string;
  path: string;
}

export const useAnalyzeProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["bot:insert"],
    mutationFn: (data: AnalyzeProfile) =>
      analyze(data).then((response) => response),
  });
};

const analyze = async (
  data: AnalyzeProfile
): Promise<{
  analysis: any;
}> => {
  return new Promise(async (resolve) => {
    //upload image to server
    // https://portal.aiya.me/api/files/upload-automix
    const response = await fetch(
      "https://portal.aiya.me/api/files/upload-automix",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((response) => response.json<any>());

    return resolve(response);
  });
};
