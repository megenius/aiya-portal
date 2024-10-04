// hooks/useBots.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

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
    const response = await axios("/api/files/upload-automix", {
      method: "POST",
      data,
    }).then((response) => response.data);

    return resolve(response);
  });
};
