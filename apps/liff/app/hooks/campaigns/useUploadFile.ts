import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "~/services/campaigns";

export function useUploadFile() {
  return useMutation({
    mutationFn: (file: File) => uploadFile(file),
  });
}