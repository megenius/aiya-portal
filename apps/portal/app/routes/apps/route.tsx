import { Outlet, useNavigate } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";

const Route = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default Route


