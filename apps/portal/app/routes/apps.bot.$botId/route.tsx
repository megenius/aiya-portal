import { useState,useEffect } from "react";
import { Outlet, useNavigate, useParams } from "@remix-run/react";
import { useAppSelector } from "~/store";
import { useBot } from "~/hooks/bot";
import { Loading } from "@repo/preline";
import Header from "./_components/Header";
import ChatWidget from "~/components/ChatWidget";
import ChatToggleButton from "~/components/ChatToggleButton";

const Route = () => {
  const { botId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { data: bot, isLoading } = useBot({ id: botId });
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/sign-in");
    }
  }, [isAuthenticated]);

  if (!bot || isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="w-full grid grid-cols-12">
        <div
          className={`w-full flex flex-col transition-all duration-300 ease-in-out ${isOpen ? "col-span-9" : "col-span-12"}`}
        >
          <Header bot={bot} />
          <main
            id="content"
            className="w-full max-w-[85rem] mx-auto pt-[59px] lg:pt-0"
          >
            <Outlet context={{ bot }} />
          </main>
        </div>
        <div
          className={`fixed w-1/4 min-w-80 top-0 right-0 h-screen bg-white shadow-lg transition-transform duration-300 ease-in-out transform z-10 ${
            !isOpen && "hidden"
          }`}
        >
          <ChatWidget providerId={`P${botId}`} toggleChat={toggleChat} />
        </div>
      </div>

      <ChatToggleButton isOpen={isOpen} toggleChat={toggleChat} />
    </>
  );
};

export default Route;
