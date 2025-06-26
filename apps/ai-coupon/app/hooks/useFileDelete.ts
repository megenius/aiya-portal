import { useMutation } from "@tanstack/react-query";
import { deleteFile } from "~/services/file";

export function useFileDelete() {
  return useMutation({
    mutationFn: (fileId: string) => deleteFile(fileId),
  });
}
