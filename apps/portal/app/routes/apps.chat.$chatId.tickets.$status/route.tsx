import React from "react";
import { Outlet, useNavigate } from "@remix-run/react";
import { useAppSelector } from "~/store";
import { TicketsList } from "./components";

const Route: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Commented out authentication redirect logic
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
      <TicketsList />
      <Outlet />
    </>
  );
};

export default Route;


