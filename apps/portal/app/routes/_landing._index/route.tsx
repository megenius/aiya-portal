import React from "react"
const MainContent = React.lazy(() => import("./_components/MainContent"))

const Route = () => {
  return (
    <>
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
        <MainContent />
      </div>
    </>
  )
}

export default Route


