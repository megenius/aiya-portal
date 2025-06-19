import { Outlet } from "@remix-run/react"
import { useLineLiff } from "~/hooks/useLineLiff"

const Layout = () => {
  useLineLiff()

  return (
    <>
      <Outlet />
    </>
  )
}

export default Layout