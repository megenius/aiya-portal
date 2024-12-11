import { useSearchParams } from "@remix-run/react"
import { Loading } from "@repo/preline"
import { Avatar } from "@repo/preline/Avatar"
import { useCallback, useEffect } from "react"
import { useAcceptInvite } from "~/hooks/useAcceptInvite"
import { useVerifyInvite } from "~/hooks/useVerifyInvite"

const Route = () => {
  const [search] = useSearchParams()
  const token = search.get('token')
  const { data, isPending } = useVerifyInvite({ token })
  const acceptInvite = useAcceptInvite()


  const handleAccept = useCallback(({
    id, user_id
  }) => {
    // Accept invitation
    acceptInvite.mutateAsync({
      variables: {
        id,
        user_id
      }
    }).then(({ slug }) => {
      // Redirect to workspace
      window.location.href = `/workspace/${slug}`
    })
  }, [])

  const handleSignup = useCallback(() => {
    // Redirect to signup
    window.location.href = `/auth/sign-in?token=${token}`
  }, [])


  if (isPending) {
    return <Loading />
  }

  if (!data) {
    return (
      <div className="w-full h-full">
        <div className="m-auto mt-7 max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800">Invitation</h1>
              <p className="text-sm text-gray-600 mt-2">Invitation not found</p>
            </div>
          </div>
        </div>
      </div>
    )
  }


  if (data?.user_id) {
    return (
      <div className="w-full h-full">
        <div className="m-auto mt-7 max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800">Invitation</h1>
              <p className="text-sm text-gray-600 mt-2">You have been invited to join the team</p>
            </div>
            <div className="mt-5 text-center">
              <h1 className="block text-4xl font-bold text-gray-800">{data.team_name}</h1>
            </div>
            <button className="block w-full mt-5 py-3 bg-blue-500 text-white rounded-lg"
              onClick={() => handleAccept({
                id: data.id,
                user_id: data.user_id
              })}
            >Accept Invitation</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      <div className="m-auto mt-7 max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Invitation</h1>
            <p className="text-sm text-gray-600 mt-2">You have been invited to join the team</p>
          </div>
          <div className="mt-5 text-center">
            <h1 className="block text-4xl font-bold text-gray-800">{data.team_name}</h1>
          </div>
          <button className="block w-full mt-5 py-3 bg-blue-500 text-white rounded-lg"
            onClick={handleSignup}
          >Create your account</button>
        </div>
      </div>
    </div>
  )
}

export default Route