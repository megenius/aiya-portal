import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "@remix-run/react";
import { useLiff } from "~/hooks/useLiff";
import Loading from "~/components/Loading";

const LoginPage = () => {
  const { liffId, slug } = useParams();
  const { isInitialized, isLoggedIn } = useLiff({ liffId: liffId ?? "" });
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const dest = search.get("dest") || `/a.${liffId}.${slug}`;

  useEffect(() => {
    if (isInitialized && isLoggedIn) {
      // กลับไปหน้าที่ต้องการหลัง login สำเร็จ
      navigate(dest, { replace: true });
    }
  }, [isInitialized, isLoggedIn, navigate, dest]);

  return <Loading />;
};

export default LoginPage;
