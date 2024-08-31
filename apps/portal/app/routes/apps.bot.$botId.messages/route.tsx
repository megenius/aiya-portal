import { Outlet, useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"
import { Loading } from "@repo/preline"
import { useBot } from "~/hooks/bot"


const Route = () => {
  const { botId } = useParams()
  const { data: bot, isLoading } = useBot({ id: botId });
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
