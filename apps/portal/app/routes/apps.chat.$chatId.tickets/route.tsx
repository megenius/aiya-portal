import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "@remix-run/react";
import { useAppSelector } from "~/store";
import { SideBarHeader } from "~/components/ChatHubs/SideBarHeader";
import { SideBarNav } from "~/components/ChatHubs/SideBarNav";
import { SideBarFooter } from "~/components/ChatHubs/SideBarFooter";
import { TicketsSidebar } from "~/components/ChatHubs/TicketsSidebar";

const Route = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    navigate("/apps/chat/" + chatId + "/tickets/all", { replace: true });
  }, []);

  return (
    <>
      <aside className="relative">
        <div id="hs-pro-chat-sidebar" className="hs-overlay [--auto-close:xl] sm:w-auto xl:w-80 xl:block xl:translate-x-0 xl:end-auto xl:bottom-0
[--auto-close-equality-type:less-than]
hs-overlay-open:translate-x-0
-translate-x-full transition-all duration-300 transform
size-full
hidden
fixed inset-y-0 start-0 z-59
bg-gray-200
dark:bg-neutral-950" tabIndex={-1} aria-labelledby="hs-pro-chat-sidebar-label">
          <div className="h-full flex">
            <div className="relative z-10 w-16 flex flex-col h-full max-h-full pb-5">
              <SideBarHeader />
              <SideBarNav />
              <SideBarFooter />
            </div>

            {/* Tickets Sidebar */}
            <TicketsSidebar />
            {/* End Tickets Sidebar */}
          </div>
        </div>
      </aside>
      <main id="content" className="2xl:hs-overlay-layout-open:pe-96 lg:ps-80 xl:ps-160 transition-all duration-300">
        <Outlet />
      </main>
    </>
  );
};

export default Route;


