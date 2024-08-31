import { useNavigate, useParams } from "@remix-run/react"
import React, { useEffect } from "react"
import { useWorkspace } from "~/hooks/workspace"
import Welcome from "./_components/Welcome"

const Route = () => {
  const navigate = useNavigate()
useEffect(() => {
  navigate("settings/channels")
}, [])
  return (
    <>
      {/* <Welcome /> */}
    </>
  )
}

export default Route
