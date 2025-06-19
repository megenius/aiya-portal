import { Outlet } from "@remix-run/react"
import { useLineLiff } from "~/hooks/useLineLiff"

const Layout = () => {
  // Initialize LIFF
  useLineLiff()

  return (
    <>
      <Outlet />
    </>
  )
}

export default Layout