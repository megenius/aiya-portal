import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCurrentBillingPlan } from '~/services/billing.service'
import { useAppSelector } from '~/store'
import { useMe } from '../useMe'

const useCurrentBillingPlan = () => {
  const { data: user } = useMe()

  return useQuery({
    queryKey: ['current-billing-plan'],
    queryFn: () => getCurrentBillingPlan(user?.id as string).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  })
}


export default useCurrentBillingPlan