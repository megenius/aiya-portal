import { useMutation } from "@tanstack/react-query";
import { insertLeadSubmission } from "~/services/leadSubmissions";
import { LeadSubmission } from "~/types/app";

interface MutationFn {
  variables: Partial<LeadSubmission>;
}

export function useInsertLeadSubmission() {
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      insertLeadSubmission(variables).then((response) => response.data),
  });
}
