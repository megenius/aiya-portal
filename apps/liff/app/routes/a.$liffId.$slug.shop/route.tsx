import { Outlet, useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";

const Route = () => {
  const { page,lang } = useOutletContext<{ page: PageLiff,lang: string }>()
  // return (
  //   <>
  //     {JSON.stringify(page)}
  //   </>
  // )

  return (
    <>
      <main id="content" className="h-screen-safe">
        <Outlet context={{page,lang}}/>
      </main>
    </>
  );
};

export default Route;
