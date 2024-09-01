import React from "react"
import { Outlet, useNavigate, useOutletContext } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import MainContent from "./_components/MainContent";
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
      <MainContent bot={bot} />
    </>
  )
}

export default Route


