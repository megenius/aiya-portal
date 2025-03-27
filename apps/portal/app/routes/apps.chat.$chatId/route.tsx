import React from "react";
import { Outlet, useNavigate, useParams } from "@remix-run/react";
import { useAppSelector } from "~/store";
import { useGetChatHub } from "~/hooks/useGetChatHub";

const Route = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { chatId } = useParams()
  const { data: chatHub } = useGetChatHub({
    id: chatId,
  })

  return (
    <Outlet context={{
      chatHub
    }} />
  );
};

export default Route;


