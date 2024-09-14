import React from "react"
import { Outlet, useNavigate, useOutletContext } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import Overview from "./_components/Overview";
import MainContent from "./_components/MainContent";
import { FacebookAdAccount } from "~/@types/app";

const Route = () => {
  const navigate = useNavigate()
  const { adaccount } = useOutletContext<{ adaccount: FacebookAdAccount }>()

  return (
    <>
      <MainContent>
        <Overview adaccount={adaccount} />
      </MainContent>
    </>
  )
}

export default Route


