import { useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"

const Route = () => {
  const { slug } = useParams()
  return (
    <>
      <MainContent />
    </>
  )
}

export default Route
