import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPlans } from "~/services/billing.service";
import { useAppSelector } from "~/store";
import { useLanguage } from "../useLanguage";

interface Plan {
  lang: string;
  interval: string;
}

const usePlans = ({ lang, interval }: Plan) => {
  return useQuery({
    queryKey: ["plans"],
    queryFn: () =>
      getPlans({
        lang,
        interval,
      }).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};

export default usePlans;
