import { Link, useNavigate, useSearchParams } from '@remix-run/react';
import React, { useEffect } from 'react';
import { useSignup } from '~/hooks/useSignup';
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useVerifyInvite } from '~/hooks/useVerifyInvite';
import { useAcceptInvite } from '~/hooks/useAcceptInvite';
interface MainContentProps {

}

const signupSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

const MainContent: React.FC<MainContentProps> = () => {
  const [search] = useSearchParams()
  const token = search.get('token')
  const { register, reset, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(signupSchema),
  })
  const { errors } = formState
  const signUp = useSignup()
  const navigate = useNavigate()

  const { data: invitation } = useVerifyInvite({ token })
  const acceptInvite = useAcceptInvite()

  const onSubmit = (data) => {
    const [firstName, lastName] = data.name.split(' ')
    signUp.mutateAsync({
      variables: {
        email: data.email,
        password: data.password,
        first_name: firstName,
        last_name: lastName
      }
    }).then((res) => {
      if (res.id) {
        acceptInvite.mutateAsync({
          variables: {
            id: invitation?.id as string,
            user_id: res.id
          }
        }).then(({ slug }) => {
          navigate(`../verify-email?mail=${data.email}`, { replace: true })
        })
      } else {
        navigate(`../verify-email?mail=${data.email}`, { replace: true })
      }
    })
  }

  useEffect(() => {
    if (invitation) {
      reset({
        email: invitation.email
      })
    }
  }, [invitation])

  return (
    <div className="grow px-5">
      <div className="h-full min-h-screen sm:w-[448px] flex flex-col justify-center mx-auto space-y-5">
        {/* Title */}
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Set up your AIYA account:
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Enhance customer engagement with AIYA.
          </p>
        </div>
        {/* End Title */}
        {/* Button Group */}
        <div className="hidden flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            className="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50"
          >
            <svg
              className="shrink-0 size-4"
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
            Sign up with Google
          </button>
          <button
            type="button"
            className="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50"
          >
            <svg
              className="shrink-0 size-4"
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.2192 10.9088C27.0336 11.0528 23.7568 12.8992 23.7568 17.0048C23.7568 21.7536 27.9264 23.4336 28.0512 23.4752C28.032 23.5776 27.3888 25.776 25.8528 28.016C24.4832 29.9872 23.0528 31.9552 20.8768 31.9552C18.7008 31.9552 18.1408 30.6912 15.6288 30.6912C13.1808 30.6912 12.3104 31.9968 10.32 31.9968C8.3296 31.9968 6.9408 30.1728 5.344 27.9328C3.4944 25.3024 2 21.216 2 17.3376C2 11.1168 6.0448 7.8176 10.0256 7.8176C12.1408 7.8176 13.904 9.2064 15.232 9.2064C16.496 9.2064 18.4672 7.7344 20.8736 7.7344C21.7856 7.7344 25.0624 7.8176 27.2192 10.9088ZM19.7312 5.1008C20.7264 3.92 21.4304 2.2816 21.4304 0.6432C21.4304 0.416 21.4112 0.1856 21.3696 0C19.7504 0.0608 17.824 1.0784 16.6624 2.4256C15.7504 3.4624 14.8992 5.1008 14.8992 6.7616C14.8992 7.0112 14.9408 7.2608 14.96 7.3408C15.0624 7.36 15.2288 7.3824 15.3952 7.3824C16.848 7.3824 18.6752 6.4096 19.7312 5.1008Z"
                className="fill-black"
                fill="currentColor"
              />
            </svg>
            Sign up with Apple
          </button>
        </div>
        {/* End Button Group */}
        <div className="hidden flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
          Or
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5">
            <div>
              <label
                htmlFor="hs-pro-dalfn"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Full name
              </label>
              <input
                type="text"
                id="hs-pro-dalfn"
                className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="John Doe"
                {...register('name')}
              />
            </div>
            {/* <div>
              <label
                htmlFor="hs-pro-dalfn"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Phone
              </label>
              <input
                type="text"
                id="hs-pro-dalfn"
                className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="ex. 0812345678"
                {...register('phone')}
              />
            </div>
            <div>
              <label
                htmlFor="hs-pro-dalfn"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Company
              </label>
              <input
                type="text"
                id="hs-pro-dalfn"
                className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="My Company"
                {...register('company')}
              />
            </div> */}
            <div>
              <label
                htmlFor="hs-pro-dale"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="hs-pro-dale"
                className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="you@email.com"
                // disabled={invitation?.email !== null}
                {...register('email')}
              />
            </div>
            <div data-hs-toggle-password-group="" className="space-y-3">
              {/* Input */}
              <div>
                <label
                  htmlFor="hs-pro-dappnp"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="hs-pro-dappnp"
                    type="password"
                    className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="********"
                    {...register('password')}
                  />
                  <button
                    type="button"
                    data-hs-toggle-password='{"target": ["#hs-pro-dappnp", "#hs-pro-dapprnp"]}'
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
              {errors.password?.message && <div className="text-red-800">{errors.password.message.toString()}</div>}
              {/* End Input */}
              {/* Input */}
              <div className="relative">
                <input
                  id="hs-pro-dapprnp"
                  type="password"
                  className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="********"
                  {...register('confirmPassword')}
                />
                <button
                  type="button"
                  data-hs-toggle-password='{"target": ["#hs-pro-dappnp", "#hs-pro-dapprnp"]}'
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
              {errors.confirmPassword?.message && <div className="text-red-800">{errors.confirmPassword.message.toString()}</div>}

              {errors.firstName?.type === "required" && (
                <p role="alert">First name is required</p>
              )}
              {/* End Input */}
            </div>
            {/* <div>
              <label
                htmlFor="hs-pro-dappcn"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Company name
              </label>
              <input
                type="text"
                id="hs-pro-dappcn"
                className="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="e.g. Preline"
              />
            </div> */}
            {/* <div className="flex gap-x-2">
              <input
                type="checkbox"
                className="shrink-0 border-gray-200 size-3.5 mt-[3px] rounded-sm text-blue-600 focus:ring-offset-0"
                id="hs-pro-dsftac"
              />
              <label
                htmlFor="hs-pro-dsftac"
                className="text-sm text-gray-800 ms-1.5"
              >
                I accept the
                <a
                  className="inline-flex items-center gap-x-1.5 font-medium text-blue-600 hover:text-blue-700 decoration-2 hover:underline"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div> */}
            <button
              disabled={signUp.isPending}
              type="submit"
              className="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-500">
          Have an account?
          <Link
            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-hidden focus:underline"
            to={"../sign-in"}
          >
            Sign in
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
