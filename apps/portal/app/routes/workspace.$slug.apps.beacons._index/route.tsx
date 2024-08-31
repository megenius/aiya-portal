import { useOutletContext, useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"
import { Workspace } from "~/@types/app"

const Route = () => {
  const { workspace } = useOutletContext<{ workspace: Workspace }>()
  return (
    <>
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
        <MainContent workspace={workspace} />
      </div>
    </>
  )
}

export default Route
