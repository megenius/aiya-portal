import { useMutation } from "@tanstack/react-query";
import { ServiceMessage } from "~/types/app";
import { sendLineServiceMessage } from "~/services/notifies";

interface MutationFn {
  variables: ServiceMessage;
}

export function useSendServiceMessage() {
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      sendLineServiceMessage(variables).then((response) => response.data),
  });
}
