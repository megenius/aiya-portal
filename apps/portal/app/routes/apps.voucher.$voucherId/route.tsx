import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "@remix-run/react";
import { useAppSelector } from "~/store";
import { Loading } from "@repo/preline";
import Header from "./_components/Header";
import { usePageLiff } from "~/hooks/usePageLiff";

const Route = () => {
  const { voucherId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Use the new hook to fetch LIFF page data
  const {
    data: voucherPage,
    isLoading,
    error,
  } = usePageLiff(voucherId as string);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/sign-in");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !voucherPage) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h1>
          <p className="text-gray-600">
            The requested voucher page could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        <Header voucherPage={voucherPage} />
        <main
          id="content"
          className="w-full max-w-[85rem] mx-auto pt-[59px] pb-5 lg:pt-0"
        >
          <Outlet context={{ voucherPage }} />
        </main>
      </div>
    </>
  );
};

export default Route;
