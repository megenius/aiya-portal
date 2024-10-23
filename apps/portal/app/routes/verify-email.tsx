import { useSearchParams } from "@remix-run/react"
import { Loading } from "@repo/preline"
import { useCallback, useEffect } from "react"
import { useVerifyEmail } from "~/hooks/useVerfiyEmail"

const Route = () => {
  const [search] = useSearchParams()
  const token = search.get('token')
  const verifyEmail = useVerifyEmail()

  const onProceed = useCallback((token: string) => {
    verifyEmail.mutateAsync({ variables: { token } }).then(() => {
      console.log('Email verified')
      window.location.href = `/auth/sign-in`
    })
  }, [verifyEmail])

  useEffect(() => {
    if (token) {
      onProceed(token)
    }
  }, [token])

  if (verifyEmail.isPending) {
    return <Loading />
  }

  return (
    <>
      {verifyEmail.isSuccess ? (
        <div>Email verified</div>
      ) : (
        <div>Failed to verify email</div>
      )}
    </>
  )
}

export default Route