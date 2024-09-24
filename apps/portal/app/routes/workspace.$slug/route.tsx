import { Outlet, useNavigate, useOutletContext, useParams } from "@remix-run/react"
import Header from "./_components/Header"
import SideBar from "./_components/SideBar"
import { useAppSelector } from "~/store";
import { useEffect } from "react";
import Footer from "./_components/Footer";
import { Workspace } from "~/@types/app";
import ArchiveLayout from "~/components/ArchiveLayout";
import { useWorkspaceBySlug } from "~/hooks/workspace/useWorkspaceBySlug";
import { Loading } from "@repo/preline";

const Layout = () => {
  const navigate = useNavigate();
  const { slug } = useParams()
  const { data: workspace, isLoading } = useWorkspaceBySlug({ slug })
  const { workspaces } = useOutletContext<{ workspaces: Workspace[] }>()
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/sign-in");
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <Loading />
  }

  if (workspace?.status === 'Archived') {
    return <ArchiveLayout workspace={workspace} />
  }

  return (
    <>
      <Header />
      <SideBar workspaces={workspaces} workspace={workspace} />
      <main id="content" className="lg:ps-[260px] pt-[59px] pb-[40px] sm:pb-[64px]">
        <Outlet context={{ workspace }} />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout


