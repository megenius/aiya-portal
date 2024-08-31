import { Outlet, useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"
import { Loading } from "@repo/preline"
import { useWorkspaceBySlug } from "~/hooks/workspace/useWorkspaceBySlug"


const Route = () => {
  const { slug } = useParams()
  const { data: workspace, isLoading } = useWorkspaceBySlug({ slug })
  if (isLoading) {
    return <Loading />
  }

  return (
    <MainContent>
      <Outlet context={{ workspace }} />
    </MainContent>
  )
}

export default Route
