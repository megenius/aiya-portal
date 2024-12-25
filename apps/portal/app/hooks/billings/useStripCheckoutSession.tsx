import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCheckoutSession } from '~/services/billing.service'
import { useAppSelector } from '~/store'

const useStripeCheckoutSession = (
  { sessionId }: { sessionId: string }
) => {
  return useQuery({
    queryKey: ['checkout-session', sessionId],
    queryFn: () => getCheckoutSession(sessionId as string).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  })
}


export default useStripeCheckoutSession