import { useMutation } from "@tanstack/react-query";
import { uploadBotMessageFile } from "~/services/file";

export function useBotMessageFileUpload() {
  return useMutation({
    mutationFn: ({ path, file }: { path: string; file: File }) =>
      uploadBotMessageFile(path, file),
  });
}
