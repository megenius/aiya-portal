import { useOutletContext, useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"
import { Workspace } from "~/@types/app"

const Route = () => {
  const { workspace } = useOutletContext<{ workspace: Workspace }>()
  return (
    <>
      <MainContent workspace={workspace} />
    </>
  )
}

export default Route
