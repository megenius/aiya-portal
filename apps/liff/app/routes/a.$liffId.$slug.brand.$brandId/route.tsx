import { useOutletContext } from "@remix-run/react";
import { PageLiff } from "~/types/page";
import { useLiff } from "~/hooks/useLiff";
import MainContent from "./components/MainContent";


const BrandDetailRoute = () => {
  const { page } = useOutletContext<{ page: PageLiff }>();
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id });
  const isThaiLanguage = language.startsWith("th");
  // Using English as default language for now
  const lang = "en";

  return (
    <>
      {page?.liff_id && (
        <>
          <MainContent language={lang} />
        </>
      )}
    </>
  );
};

export default BrandDetailRoute;
