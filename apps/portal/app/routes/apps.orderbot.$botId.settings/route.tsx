import { Outlet, useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"
import { Loading } from "@repo/preline"
import { useOrderbot } from "~/hooks/orderbot/useOrderbot"


const Route = () => {
  const { botId } = useParams()
  const { data: bot, isLoading } = useOrderbot({ id: botId });
  if (isLoading) {
    return <Loading />
  }

  return (
    <MainContent>
      <Outlet context={{ bot }} />
    </MainContent>
  )
}

export default Route
