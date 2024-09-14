import React from "react"
import { Outlet, useNavigate, useParams } from "@remix-run/react"
import { SideBar } from "./_components/SideBar"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import { useFacebookAdAccount } from "~/hooks/adaccount";
import { Loading } from "@repo/preline";
import Header from "./_components/Header";

const Route = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { data: adaccount, isLoading } = useFacebookAdAccount({ variables: { id: id as string } });


  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/sign-in");
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return
  }

  if (!adaccount || isLoading) {
    return <Loading />
  }

  return (
    <>
      <Header adaccount={adaccount} />
      <main id="content" className="max-w-[85rem] mx-auto pt-[59px] lg:pt-0">
        <Outlet context={{ adaccount }} />
      </main>
    </>
  )
}

export default Route


