import { useParams } from "@remix-run/react"
import React, { Suspense } from "react"
import MainContent from "./_components/MainContent"
import { ClientOnly } from 'remix-utils/client-only';

const Route = () => {
  const { slug } = useParams()
  return (
    <Suspense fallback="">
      <ClientOnly>
        {() =>
          <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
            <MainContent />
          </div>
        }
      </ClientOnly>
    </Suspense>
  )
}

export default Route
