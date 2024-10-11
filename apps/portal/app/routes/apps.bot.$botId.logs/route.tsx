import React from "react"
import { Outlet, useNavigate } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import MainContent from "./_components/MainContent";

const Route = () => {
  const navigate = useNavigate()
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
      <MainContent />
    </>
  )
}

export default Route


