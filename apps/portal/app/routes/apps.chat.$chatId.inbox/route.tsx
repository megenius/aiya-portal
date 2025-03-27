import React from "react";
import { Outlet, useNavigate, useOutletContext } from "@remix-run/react";
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import { ChatThreads } from "./_components/ChatThreads";
import { SideBarHeader } from "~/components/ChatHubs/SideBarHeader";
import { SideBarNav } from "~/components/ChatHubs/SideBarNav";
import { SideBarFooter } from "~/components/ChatHubs/SideBarFooter";

const Route = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const context = useOutletContext<{
    chatHub
  }>()

  return (
    <>
      <aside className="relative">
        <div id="hs-pro-chat-sidebar" className="hs-overlay [--auto-close:lg] sm:w-auto lg:w-88 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
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
            <ChatThreads chatHub={context?.chatHub} />
          </div>
        </div>
      </aside>
      <main id="content" className="2xl:hs-overlay-layout-open:pe-96 lg:ps-88 transition-all duration-300">
        <Outlet context={context} />
      </main>
    </>
  );
};

export default Route;


