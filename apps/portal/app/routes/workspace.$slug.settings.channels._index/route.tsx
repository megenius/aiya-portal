import { useOutletContext, useParams } from "@remix-run/react"
import React, { useEffect } from "react"
import MainContent from "./_components/MainContent"
import { Workspace } from "~/@types/app"
import { useFacebookSDK } from "~/hooks/useFacebookSDK"


const Route = () => {
  useFacebookSDK({ appId: import.meta.env.VITE_FB_APP_ID });
  const { workspace } = useOutletContext<{ workspace: Workspace }>()

  useEffect(() => {
  }, [])
  return (
    <>
      <MainContent workspace={workspace} />
    </>
  )
}

export default Route
