import { useDispatch, useSelector } from "react-redux";
import i18n from "i18next";
import { RootState } from "~/store"; // อ้างอิงถึง root state
import { setUser } from "~/store/slices/userSlice";
import { store } from "~/store";

export const useLanguage = () => {
  const user = useSelector((state: RootState) => state.user);

  // ฟังก์ชันสำหรับเปลี่ยนภาษา
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // เปลี่ยนภาษาใน i18next
    store.dispatch(setUser({ ...(user as any), language: lang })); // เปลี่ยนภาษาใน Redux
  };

  const mapLanguage = {
    en: "en-US",
    th: "th-TH",
  };

  const mapCurrency = {
    en: "usd",
    th: "thb",
  };

  return {
    currentLanguage: user.language,
    changeLanguage,
    lang: mapLanguage[user.language as string],
    currency: mapCurrency[user.language as string],
  };
};
