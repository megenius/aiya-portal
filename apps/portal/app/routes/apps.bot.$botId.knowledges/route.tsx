import React from "react"
import { Outlet, useNavigate, useOutletContext } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import { Bot } from "~/@types/app";

const Route = () => {
  const navigate = useNavigate()
  const { bot } = useOutletContext<{ bot: Bot }>();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     window.location.href = '/';
  //   }
  // }, [isAuthenticated]);

  // if (isAuthenticated) {
  //   return <div></div>
  // }

  return (
    <>
      <Outlet context={{ bot }} />
      {/* <MyChatWidget /> */}
    </>
  )
}

export default Route


