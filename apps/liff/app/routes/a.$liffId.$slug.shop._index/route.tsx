import { useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";
import { Header } from "./components/Header";
import MainContent from "./components/MainContent";
import { useLiff } from "~/hooks/useLiff";
import Loading from "~/components/Loading";

const Route = () => {
  const { page } = useOutletContext<{ page: PageLiff }>();
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id });
    const isThaiLanguage = language.startsWith("th");
    const lang = isThaiLanguage ? "th" : "en";
  // const { data: liff } = useLineLiff();
  // const myCoupons = [
  //   {
  //     id: 1,
  //     type: "booking",
  //     store: "ร้านอาหารอร่อยดี",
  //     category: "food",
  //     discount: "ส่วนลด 25%",
  //     expiry: "31 มี.ค. 2025",
  //     image: "https://placehold.co/200x150",
  //   },
  // ];

  // return <>dd{JSON.stringify(page)}</>;
  if (!isLoggedIn) {
    return <Loading/>;
  }

  return (
    <>
    {page?.liff_id && (
      <>
        <Header page={page} language={lang} />
        <MainContent page={page} language={lang} />
      </>
    )}
    </>
    
  );
};

export default Route;
