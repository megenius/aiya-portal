import { useOutletContext, useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"
import { Workspace } from "~/@types/app"
import { useFacebookSDK } from "~/hooks/useFacebookSDK"

const FB_APP_ID = '788582819272015'

const Route = () => {
  useFacebookSDK({ appId: FB_APP_ID });
  const { workspace } = useOutletContext<{ workspace: Workspace }>()

  return (
    <>
      <MainContent workspace={workspace} />
    </>
  )
}

export default Route
