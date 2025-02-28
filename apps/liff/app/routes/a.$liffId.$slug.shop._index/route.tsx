import { useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";
import { Header } from "./components/Header";
import MainContent from "./components/MainContent";
import { useLineLiff } from "~/hooks/useLineLiff";

const Route = () => {
  const { page } = useOutletContext<{ page: PageLiff }>();
  const { data: liff } = useLineLiff();
  const myCoupons = [
    {
      id: 1,
      type: "booking",
      store: "ร้านอาหารอร่อยดี",
      category: "food",
      discount: "ส่วนลด 25%",
      expiry: "31 มี.ค. 2025",
      image: "https://placehold.co/200x150",
    },
  ];

  // return <>dd{JSON.stringify(page)}</>;

  return (
    <>
    {page?.liff_id && (
      <>
        <Header myCouponsCount={myCoupons.length} page={page} />
        <MainContent page={page} />
      </>
    )}
    </>
    
  );
};

export default Route;
