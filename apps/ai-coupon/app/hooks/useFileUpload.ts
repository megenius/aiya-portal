import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "~/services/file";

interface FileUploadProps {
  file: File;
  folder?: string;
}

export function useFileUpload() {
  return useMutation({
    mutationFn: (args: FileUploadProps) => uploadFile(args.file, args.folder),
  });
}
