import { useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"

const Route = () => {
  const { slug } = useParams()
  return (
    <>
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
        <MainContent />
      </div>
    </>
  )
}

export default Route
