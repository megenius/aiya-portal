import { Link, useNavigate, useSearchParams } from '@remix-run/react';
import React, { useEffect } from 'react';
import { useSignup } from '~/hooks/useSignup';
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useVerifyInvite } from '~/hooks/useVerifyInvite';
import { useAcceptInvite } from '~/hooks/useAcceptInvite';
import { useResetPassword } from '~/hooks/useResetPassword';
import { toast } from 'react-toastify';
interface MainContentProps {

}

const signupSchema = z.object({
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
  const resetPassword = useResetPassword()

  const { data: invitation } = useVerifyInvite({ token })

  const onSubmit = (data) => {
    resetPassword.mutateAsync({
      variables: {
        token: token as string,
        password: data.password
      }
    }).then(() => {
      toast.success('Password changed successfully')
      navigate('../sign-in')
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
            Change password:
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Enter your new password.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5">
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
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600"
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
                  className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600"
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
                className="shrink-0 border-gray-200 size-3.5 mt-[3px] rounded text-blue-600 focus:ring-offset-0"
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
              Change password
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-500">
          Have an account?
          <Link
            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline"
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
