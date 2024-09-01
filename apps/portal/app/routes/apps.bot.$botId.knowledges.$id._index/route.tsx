import React from "react"
import { Outlet, useNavigate, useOutletContext, useParams } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import MainContent from "./_components/MainContent";
import { Bot } from "~/@types/app";
import { useBotKnowlegde } from "~/hooks/bot/useBotKnowlegde";
import { Loading } from "@repo/preline";

const Route = () => {
  const navigate = useNavigate()
  const { bot } = useOutletContext<{ bot: Bot }>();
  const { id } = useParams();
  const { data: knowledge, isLoading } = useBotKnowlegde(id as string);

  if (isLoading || !knowledge) {
    return <Loading />;
  }

  return (
    <>
      <MainContent bot={bot} knowledge={knowledge} />
    </>
  )
}

export default Route


