import Header from "./_components/Header";
import MainContent from "./_components/MainContent";
import { useOutletContext } from "@remix-run/react";
import VoucherCardShimmer from "../../components/VoucherCardShimmer";
import { useVouchersUser } from "~/hooks/vouchers/useVouchersUser";
import { PageLiff } from "~/types/page";

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { data: myVouchers, isLoading: isMyVouchersLoading } =
    useVouchersUser();

  return (
    <div className="h-full bg-gray-50">
      <div className="bg-white">
        <Header language={lang} />
      </div>

      {isMyVouchersLoading ? (
        <VoucherCardShimmer />
      ) : (
        <MainContent page={page} vouchers={myVouchers || []} language={lang} />
      )}
    </div>
  );
};

export default Route;
