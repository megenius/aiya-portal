import { useParams } from "@remix-run/react"
import React, { Suspense } from "react"
import MainContent from "./_components/MainContent"
import { ClientOnly } from "remix-utils/client-only"

const Route = () => {
  const { slug } = useParams()
  return (
    <Suspense fallback="">
      <ClientOnly>
        {() =>
          <MainContent />
        }
      </ClientOnly>
    </Suspense>
  )
}

export default Route
