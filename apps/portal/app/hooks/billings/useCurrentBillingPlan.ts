import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCurrentBillingPlan } from '~/services/billing.service'
import { useAppSelector } from '~/store'

const useCurrentBillingPlan = () => {
  return useQuery({
    queryKey: ['current-billing-plan'],
    queryFn: () => getCurrentBillingPlan().then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  })
}


export default useCurrentBillingPlan