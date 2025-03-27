import React from "react";
import { Outlet, useNavigate } from "@remix-run/react";
import { useAppSelector } from "~/store";
import ChatHeader from "./components/ChatHeader";
import ChatContent from "./components/ChatContent";
import ChatInput from "./components/ChatInput";
import UserDetails from "./components/UserDetails";

const Route: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Commented out authentication redirect logic
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     window.location.href = '/';
  //   }
  // }, [isAuthenticated]);

  // if (isAuthenticated) {
  //   return <div></div>
  // }

  return (
    <>
      <div className="relative h-dvh flex flex-col justify-end">
        <ChatHeader
          user={{
            name: "Costa Quinn",
            status: "Online",
            avatarUrl: "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
          }}
        />

        <ChatContent
          messages={[
            {
              id: "1",
              sender: {
                id: "1",
                name: "Costa Quinn",
                avatarUrl: "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
              },
              content: "Yes, you can!",
              timestamp: "1m",
              isOwn: false
            },
          ]}
        />

        <ChatInput recipient=""
          onSendMessage={(message => { })}
        />

      </div>

      <UserDetails user={{
        id: "1",
        name: "Costa Quinn",
        status: "Online",
        avatarUrl: "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
        details: [
          { label: "Company", value: "Fortex", icon: "company" },
          { label: "Country", value: "United States", icon: "location" },
          { label: "Email", value: "costa.notion@gmail.com", icon: "email" },
          { label: "Phone", value: "+1 000-00-00", icon: "phone" },
          { label: "Site", value: "fortex.com", icon: "website" }
        ]
      }} />

    </>
  );
};

export default Route;


