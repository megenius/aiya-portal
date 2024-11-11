import { useNavigate, useOutletContext } from "@remix-run/react";
import { useEffect } from "react";
import { FacebookAdAccount } from "~/@types/app";

const Route = () => {
  const navigate = useNavigate()
  const { adaccount } = useOutletContext<{ adaccount: FacebookAdAccount }>()

  useEffect(() => {
    if (adaccount) {
      navigate("./dashboard")
    }

  }, [navigate]);

}

export default Route


