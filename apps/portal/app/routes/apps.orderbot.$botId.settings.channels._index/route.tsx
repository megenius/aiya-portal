import { useOutletContext, useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"
import { Orderbot } from "~/@types/app"


const Route = () => {
  const { bot } = useOutletContext<{ bot: Orderbot }>()

  return (
    <>
      <MainContent bot={bot} />
    </>
  )
}

export default Route
