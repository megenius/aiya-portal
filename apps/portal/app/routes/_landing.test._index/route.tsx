import React from "react"
import { useNavigate } from "@remix-run/react"
import { useTranslation } from "react-i18next"
import WebSocketDemo from "./_components/WebSocketDemo"

const Route = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()


  return (
    <>
      <main id="content" className="pb-[40px] sm:pb-[64px] ">
        <WebSocketDemo />
      </main>
    </>
  )
}

export default Route


