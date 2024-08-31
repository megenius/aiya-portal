import React from "react"
import { Outlet, useNavigate } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";

const Route = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("./messages")
  }, [navigate]);

  return <div></div>
}

export default Route


