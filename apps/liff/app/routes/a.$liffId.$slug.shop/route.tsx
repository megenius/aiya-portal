import { Outlet, useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";

const Route = () => {
  const { page } = useOutletContext<{ page: PageLiff }>()
  // return (
  //   <>
  //     {JSON.stringify(page)}
  //   </>
  // )

  return (
    <>
      <main id="content" className="h-screen-safe">
        <Outlet context={{page}}/>
      </main>
    </>
  );
};

export default Route;
