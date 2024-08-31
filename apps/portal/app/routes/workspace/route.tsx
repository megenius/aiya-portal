import { Outlet } from "@remix-run/react"
import { Loading } from "@repo/preline"
import { useWorkspaces } from "~/hooks/workspace"

const Route = () => {
  const { data, isLoading } = useWorkspaces()

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Outlet context={{ workspaces: data?.items }} />
    </>
  )
}

export default Route
