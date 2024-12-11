import { Link, useNavigate, useSearchParams } from '@remix-run/react';
import { Loading } from '@repo/preline';
import React, { useEffect } from 'react';
import { useLogin } from '~/hooks/useLogin';
import { useAppSelector } from '~/store';

interface MainContentProps {

}

const MainContent: React.FC<MainContentProps> = () => {
  const login = useLogin();
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const user = searchParams.get("user")
    if (user) {
      const userInfo = JSON.parse(user)
      
      if (userInfo.external_identifier) {
        login.mutateAsync({
          email: userInfo.email,
          first_name: userInfo.first_name,
          last_name: userInfo.last_name || "",
          avatar: userInfo.avatar,
          external_identifier: userInfo.external_identifier,
        });
      }
    }
  }, [searchParams])

  return <Loading />
};

export default MainContent;