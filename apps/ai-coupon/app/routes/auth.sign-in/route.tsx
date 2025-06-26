import { Link, useNavigate, useSearchParams } from '@remix-run/react';
import React, { useEffect } from 'react';
import { useLogin } from '~/hooks/useLogin';
import { useAppSelector } from '~/store';
import { randomHexString } from '~/utils/random';
import { useTranslation } from "react-i18next";
interface MainContentProps {

}

const MainContent: React.FC<MainContentProps> = () => {
  const login = useLogin();
  const [search] = useSearchParams()
  const token = search.get('token')
  const { t } = useTranslation();

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutateAsync({ email, password });
  };

  const signInWithGoogle = () => {
    const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
    const REDIRECT_URI = `${import.meta.env.VITE_BASE_URL}/api/auth/google/callback`

    let googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${GOOGLE_CLIENT_ID}&` +
      `redirect_uri=${REDIRECT_URI}&` +
      `response_type=code&` +
      `scope=email profile&` +
      `include_granted_scopes=true&` +
      `access_type=offline`;

    if (token) {
      googleAuthUrl += `&state=${token}`
    }

    window.location.href = googleAuthUrl;
  }

  const signInWithLine = () => {
    // https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=12345abcde&scope=profile%20openid&nonce=09876xyz
    const LINE_CLIENT_ID = import.meta.env.VITE_LINE_CLIENT_ID
    const REDIRECT_URI = `${import.meta.env.VITE_BASE_URL}/api/auth/line/callback`

    let url = `https://access.line.me/oauth2/v2.1/authorize?` +
      `client_id=${LINE_CLIENT_ID}&` +
      `redirect_uri=${REDIRECT_URI}&` +
      `response_type=code&` +
      `scope=openid profile email&` +
      `state=${randomHexString(8)}&` +
      `nonce=${randomHexString(8)}`;

    // if (token) {
    //   url += `&state=${token}`
    // }

    window.location.href = url;
  }


  return (
    <div className="grow px-5">
      <div className="h-full min-h-screen sm:w-[448px] flex flex-col justify-center mx-auto space-y-5">
        {/* Title */}
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            {t("auth.login.title")}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {t("auth.login.subtitle")}
          </p>
        </div>
        {/* End Title */}
        {/* Button Group */}
        {/* <div className="flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            className="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50"
            onClick={signInWithGoogle}
          >
            <svg
              className="shrink-0 w-4 h-4"
              width={33}
              height={32}
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4132_5805)">
                <path
                  d="M32.2566 16.36C32.2566 15.04 32.1567 14.08 31.9171 13.08H16.9166V19.02H25.7251C25.5454 20.5 24.5866 22.72 22.4494 24.22L22.4294 24.42L27.1633 28.1L27.4828 28.14C30.5189 25.34 32.2566 21.22 32.2566 16.36Z"
                  fill="#4285F4"
                />
                <path
                  d="M16.9166 32C21.231 32 24.8463 30.58 27.5028 28.12L22.4694 24.2C21.1111 25.14 19.3135 25.8 16.9366 25.8C12.7021 25.8 9.12677 23 7.84844 19.16L7.66867 19.18L2.71513 23L2.65521 23.18C5.2718 28.4 10.6648 32 16.9166 32Z"
                  fill="#34A853"
                />
                <path
                  d="M7.82845 19.16C7.48889 18.16 7.28915 17.1 7.28915 16C7.28915 14.9 7.48889 13.84 7.80848 12.84V12.62L2.81499 8.73999L2.6552 8.81999C1.55663 10.98 0.937439 13.42 0.937439 16C0.937439 18.58 1.55663 21.02 2.63522 23.18L7.82845 19.16Z"
                  fill="#FBBC05"
                />
                <path
                  d="M16.9166 6.18C19.9127 6.18 21.9501 7.48 23.0886 8.56L27.6027 4.16C24.8263 1.58 21.231 0 16.9166 0C10.6648 0 5.27181 3.6 2.63525 8.82L7.80851 12.84C9.10681 8.98 12.6821 6.18 16.9166 6.18Z"
                  fill="#EB4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_4132_5805">
                  <rect
                    width={32}
                    height={32}
                    fill="white"
                    transform="translate(0.937439)"
                  />
                </clipPath>
              </defs>
            </svg>
            {t("auth.login.sign_in_with.google")}
          </button>
          <button
            type="button"
            className="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50"
            onClick={signInWithLine}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#00c300" d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"></path><path fill="#fff" d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"></path>
            </svg>
            {t("auth.login.sign_in_with.line")}
          </button>
        </div> */}
        {/* End Button Group */}
        {/* <div className="flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
          {t("auth.login.or")}
        </div> */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label
                htmlFor="hs-pro-dale"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                {t("auth.login.email")}
              </label>
              <input
                type="email"
                id="hs-pro-dale"
                className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="hs-pro-dalp"
                  className="block text-sm font-medium text-gray-800"
                >
                  {t("auth.login.password")}
                </label>
                <a
                  className="inline-flex items-center gap-x-1.5 text-xs text-gray-600 hover:text-gray-700 decoration-2 hover:underline focus:outline-hidden focus:underline"
                  href="/auth/reset-password"
                >
                  {t("auth.login.forgot_password")}
                </a>
              </div>
              <div className="relative">
                <input
                  id="hs-pro-dalp"
                  type="password"
                  className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  data-hs-toggle-password='{
            "target": "#hs-pro-dalp"
          }'
                  className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden focus:text-blue-600"
                >
                  <svg
                    className="shrink-0 size-4"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      className="hs-password-active:hidden"
                      d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                    />
                    <path
                      className="hs-password-active:hidden"
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                    />
                    <path
                      className="hs-password-active:hidden"
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                    />
                    <line
                      className="hs-password-active:hidden"
                      x1={2}
                      x2={22}
                      y1={2}
                      y2={22}
                    />
                    <path
                      className="hidden hs-password-active:block"
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                    />
                    <circle
                      className="hidden hs-password-active:block"
                      cx={12}
                      cy={12}
                      r={3}
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={login.isPending}
              className="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              {login.isPending ? t('auth.login.signing_in') : t("auth.login.sign_in")}
            </button>
            {login.isError && <p>
              {t("auth.login.login_failed")}
            </p>}
          </div>
        </form>
        <p className="text-sm text-gray-500">
          {t("auth.login.new_user")}
          <Link
            className="inline-flex ms-1 items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-hidden focus:underline"
            to={"../sign-up"}
          >
            {t("auth.login.sign_up")}
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MainContent;